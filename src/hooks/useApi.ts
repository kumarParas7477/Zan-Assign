import { useState, useEffect } from 'react';
import { IIteminterface } from '../types';

const useApi = () => {
  const [cards, setCards] = useState<IIteminterface[]>([]);
  const [error, setError] = useState<string | null>(null);

  const getData = async () => {
    try {
      const response = await fetch('/api/getData');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCards(data);
    } catch (err:any) {
      setError(err.message);
      console.error('Failed to fetch data:', err);
    }
  };

  const updateData = async (updatedData: IIteminterface[]) => {
    try {
      const response = await fetch('/api/updateAllData', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error('Failed to update data');
      }

      const data = await response.json();
      console.log(data);
      setCards(updatedData);
    } catch (err:any) {
      setError(err.message);
      console.error('Failed to update data:', err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { cards, updateData, error };
};

export default useApi;
