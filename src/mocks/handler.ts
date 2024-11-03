import { http, HttpResponse } from 'msw';
import { IIteminterface } from '../types';
import cat1 from '../assets/cat1.webp';
import cat2 from '../assets/cat2.webp';
import cat3 from '../assets/cat3.webp';
import cat4 from '../assets/cat4.webp';
import cat5 from '../assets/cat5.webp';

// Default data
const defaultData: IIteminterface[] = [
  { type: "bank draft", imgSrc: cat1, title: "Bank Draft", position: 0 },
  { type: "bill-of-lading", imgSrc: cat2, title: "Bill of Lading", position: 1 },
  { type: "invoice", imgSrc: cat3, title: "Invoice", position: 2 },
  { type: "bank-draft-2", imgSrc: cat4, title: "Bank Draft 2", position: 3 },
  { type: "bill-of-lading-2", imgSrc: cat5, title: "Bill of Lading 2", position: 4 },
];

// Load data from localStorage or use default data
const loadDocuments = (): IIteminterface[] => {
  const storedData = localStorage.getItem('dummyData');
  return storedData ? JSON.parse(storedData) : defaultData;
};

// Save data to localStorage
const saveDocuments = (data: IIteminterface[]) => {
  localStorage.setItem('dummyData', JSON.stringify(data));
};

// Initial load to ensure localStorage is populated if empty
if (!localStorage.getItem('dummyData')) {
  saveDocuments(defaultData);
}

export const handlers = [
  // Handler for fetching data
  http.get('/api/getData', () => {
    const data = loadDocuments();
    return HttpResponse.json(data, { status: 200 });
  }),

  // Handler for adding new data
  http.post('/api/addData', async ({ request }) => {
    // Extract new document data from request body
    const newItem = await request.json() as IIteminterface;

    const data = loadDocuments();
    const updatedData = [...data, newItem];
    saveDocuments(updatedData);

    return HttpResponse.json(
      { message: 'item added successfully', document: data },
      { status: 201 }
    );
  }),


  http.put('/api/updateAllData', async ({ request }) => {
    const updatedData = await request.json() as IIteminterface[];

    // Overwrite the entire document set in localStorage
    saveDocuments(updatedData);

    return HttpResponse.json(
      { message: 'All documents updated successfully', documents: updatedData },
      { status: 200 }
    );
  }),
];
