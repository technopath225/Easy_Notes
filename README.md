Easy Notes 📝




📝 Easy Notes App
A lightning-fast, highly optimized full-stack note-taking application built with React, Node.js/Express, and PostgreSQL. Designed with a focus on meticulous UI performance, seamless responsiveness across all devices, and an instantaneous, page-reload-free user experience.

🎥 Demo

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/b6fdf5f8-d198-4eb5-b94d-869315252e79" />

✨ Key Features
⚡ High-Performance Architecture: Leverages React.memo and targeted state updates to ensure that only modified components re-render, keeping resource consumption down to an absolute minimum.

📱 Fully Responsive UI: Crafted with custom modular CSS to provide a gorgeous, adaptive layout that looks and feels native on mobile, tablet, and desktop screens.

🔄 Seamless CRUD Operations: Create, edit, and delete notes instantly without ever needing to refresh the browser page.

🐘 Persistent PostgreSQL Backend: Robust data layer ensuring all changes safely commit straight to your database. Discarded notes clear cleanly without cluttering storage.

☁️ Cloud & Environment Ready: Built clean and modular. Easily scale this app to production cloud databases like Neon or swap out hardcoded configurations for .env variables in seconds.

🛠️ Tech Stack
Frontend
React (via Vite)

CSS Modules for scoped, modern styling

Optimized component re-rendering strategies

Backend
Node.js & Express

PostgreSQL (pg) for reliable relational data management

CORS middleware configured for secure cross-origin communication

Nodemon for smooth local development workflow

🚀 Getting Started
Follow these instructions to get a copy of the project up and running locally on your machine.

Prerequisites
Node.js installed on your machine

PostgreSQL installed and running locally

1. Backend Setup
Navigate to your backend directory, install the dependencies, and fire up the server.

Bash


# Install dependencies
npm install

# Dependencies used:
# "cors": "^2.8.6",
# "express": "^5.2.1",
# "pg": "^8.23.0"
# "nodemon": "^3.1.14" (devDependencies)

# Start the server with nodemon
npm run dev
The backend server runs locally on Port 5005:

JavaScript


const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
  }));
const PORT = 5005;
2. Frontend Setup
Navigate to your Vite/React frontend directory:

Bash


# Install dependencies
npm install

# Run the development server
npm run dev
The frontend will typically launch at http://localhost:5173.

⚙️ Environment Configuration (.env)
To keep local development friction-free, base URLs and database ports are written directly in code for quick testing. However, moving to an environment variables configuration is effortless:

Create a .env file in your root directories.

Replace hardcoded URLs and database credentials with process variables (e.g., process.env.PORT, process.env.DATABASE_URL).

Plug in your cloud database provider string (like Neon or Supabase) directly into your pg connection pool.

🗄️ Database Schema
The application runs on a clean, straightforward PostgreSQL schema tailored for speed and simplicity:

id: Unique Identifier (Primary Key)

title: String / Text (Note header)

text: Text (Main body content)

created_at / updated_at: Timestamps tracking lifecycle changes
