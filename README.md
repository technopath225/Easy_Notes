Easy Notes 📝


<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/b6fdf5f8-d198-4eb5-b94d-869315252e79" />


Easy Notes is a full-stack note-taking web application currently under development. The project was built to explore the development of a modular application using React on the frontend, Node.js and Express.js on the backend, and PostgreSQL for persistent data storage.

The application allows users to create, view, edit, and delete notes through a responsive web interface. The frontend and backend are currently maintained as separate applications, communicating through a local REST API.

🚧 Development Status: This project is currently under active development. Some functionality and architecture may change as development continues.

📸 Preview

🎯 Project Overview

The goal of Easy Notes was to build a simple but structured full-stack application while gaining practical experience working across the frontend, backend, and database layers.

The project follows a separation-of-concerns approach:

Easy Notes
│
├── Frontend
│   └── React
│
├── Backend
│   └── Node.js + Express.js
│
└── Database
    └── PostgreSQL


The frontend is responsible for the user interface and user interactions, while the backend provides a RESTful API for handling note-related operations. PostgreSQL is used to persist the application's data.

✨ Features
Create notes
View existing notes
Edit notes
Delete notes
Responsive user interface
Reusable React components
RESTful backend API
PostgreSQL data persistence
Separate frontend and backend architecture
API testing with Postman
🛠️ Technologies
JavaScript
React
Node.js
Express.js
PostgreSQL
HTML
CSS
Postman
🏗️ Project Structure

The frontend and backend are currently kept as separate applications within the project.

easy-notes/
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── package.json
│   └── ...
│
└── README.md


This structure makes it easier to develop and maintain each part of the application independently.

🔌 Backend API

The backend is built with Node.js and Express.js and exposes RESTful endpoints for managing notes.

The main operations include:

GET     /api/notes
POST    /api/notes
PUT     /api/notes/:id
DELETE  /api/notes/:id


The frontend communicates with these endpoints locally during development.

API requests have been tested using Postman to verify request handling and backend functionality.

▶️ Running the Project

The project is currently configured for local development, with the frontend and backend running separately.

1. Clone the repository
git clone <repository-url>
cd easy-notes

2. Start the backend

From the project directory, navigate into the backend:

cd backend
npm run dev

3. Start the frontend

Open another terminal and navigate into the frontend:

cd frontend
npm run dev


Both applications will run locally and communicate with each other through the local API.

Note: The project currently uses local development URLs and database configuration. Environment variables may be introduced later as the project moves toward a more production-ready setup.

🗄️ Database

Easy Notes uses PostgreSQL for persistent storage.

The database integration is currently configured for local development. Database connection details are currently handled within the backend during development and may be moved to environment variables as the project progresses.

For a production deployment, sensitive credentials and connection details should be stored using environment variables rather than committed to the repository.

🧪 API Testing

The backend API has been tested using Postman during development.

Testing includes:

Creating notes
Retrieving notes
Updating notes
Deleting notes
Checking API responses
Validating backend request handling
💡 Development Approach

The project was developed with a focus on keeping the application modular and easy to extend.

Frontend

The React frontend uses reusable components and responsive design principles to provide a consistent experience across different screen sizes.

Backend

The Express.js backend provides a RESTful API responsible for handling note-related operations and communicating with the PostgreSQL database.

Database

PostgreSQL provides persistent storage for the application's notes and allows the backend to manage stored data through database queries.

🔮 Future Improvements

As development continues, planned improvements may include:

User authentication
User-specific notes
Search and filtering
Note categories or tags
Improved validation and error handling
Automated testing
Environment-based configuration
Production deployment
👨‍💻 Project Details

Role: Full-Stack Developer
Duration: May 2026 – June 2026
Category: Software Development

Contributions
Developed a modular React frontend using reusable components and responsive design principles.
Built a RESTful backend API using Express.js and Node.js for note creation, retrieval, editing, and deletion.
Designed and integrated a PostgreSQL database for persistent note storage.
Tested and validated API endpoints using Postman.
Structured the application into separate frontend, backend, and database layers to improve maintainability and scalability.

🚧 Easy Notes is currently a work in progress. The architecture and features may continue to evolve as development progresses.
