# Project README


## I AM A FRONTENDEND DEVELOPER. PLEASE ONLY REVIEW FRONT-END CODE.



## Overview

This project implements a frontend application that displays a list of document cards with drag-and-drop and overlay capabilities. The project has been built as per the requirements given for the frontend tasks. This README provides an overview of my approach, setup instructions, and some additional information on my thought process.

### Tech Stack

- **Frontend**: React
- **Mocking Service**: `msw` (Mock Service Worker) to simulate API responses for a local, serverless experience.
- **Data Persistence**: `localStorage` to retain data across page reloads.
- **Styling**: CSS and a few React component libraries
- **Development Tools**: Docker (with `docker-compose`), for setting up the app in a containerized environment

## Instructions to Run

### Prerequisites

Ensure you have the following installed on your machine:
- Node.js (v14+)
- Docker and Docker Compose

### Setup Steps

1. **Clone the Repository**
   ```bash
   git clone <repo-url>
   cd <repo-directory>
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Application Locally**
   ```bash
   npm start
   ```

   - The application will start on `http://localhost:3000`.
   - The mock API will also be activated, thanks to `msw`, allowing the app to make requests without an actual backend server.

4. **Using Docker Compose for Deployment**
   - Build and start the app in a Docker container:
     ```bash
     docker-compose up --build
     ```

   - Once running, the app should be accessible at `http://localhost:3000`.

### Application Features

1. **Grid Display**:
   - Loads a static JSON file, displaying five document cards in a 3x2 grid layout.

2. **Dynamic Card Layout**:
   - The cards are displayed with distinct thumbnails based on their document type.
   - Users can reorder the cards via drag-and-drop.

3. **Image Overlay**:
   - Clicking a card opens an image overlay centered on the page.
   - The overlay can be closed by pressing the `ESC` key.

4. **Mocked API with `msw`**:
   - The app uses `msw` to simulate REST API interactions, such as fetching and adding data, without needing an actual server.

5. **Data Persistence with `localStorage`**:
   - Data is stored in `localStorage`, allowing it to persist across page reloads.


### Thought Process and Approach

1. **User Experience and Simplicity**:
   - Focused on creating a simple, intuitive UI with the core requested features.
   - Ensured that actions like reordering and viewing images were seamless, with attention to performance and responsiveness.

2. **Data Persistence**:
   - Chose `localStorage` for its simplicity and effectiveness in maintaining data across reloads in the frontend environment.
   - Implemented a save function that checks for changes before writing to avoid redundant saves, optimizing the application for user experience.

3. **Drag-and-Drop Implementation**:
   - Used HTML5 Drag and Drop API for drag-and-drop functionality to ensure smooth interactions and flexibility.

4. **Mock Service Worker for Local API Simulation**:
   - The use of `msw` enabled the development of API interactions as if they were real, without a backend.
   - Mocking provided a quick, lightweight alternative, allowing me to work on the frontend independently.

### Deployment Approach

Since I am focused on frontend development, I only containerized the React app using Docker. This approach would allow seamless deployment in most CI/CD environments.

## Additional Notes

- **Modern Practices**: I used React Hooks and functional components to ensure a modern, optimized codebase.
- **Simplicity and Focus**: I adhered strictly to the requirements, avoiding any unnecessary complexities or extra features to keep the solution straightforward and focused.

### Hypothetical API Design

If I were to design a backend API for this project, the following endpoints would be implemented for managing document cards:

1. **`GET /api/items`** - Fetch all items.
2. **`POST /api/items`** - Add a new items.
3. **`PUT /api/items/:id`** - Update a item's details.
4. **`DELETE /api/items/:id`** - Remove a itemi by ID.
  
