##folder structure of the project

Task-Management-App/
│── backend/             # Backend (Node.js, Express, MongoDB)
│   ├── config/         # Environment & DB config
│   ├── controllers/    # Handles logic for API routes
│   ├── models/        # MongoDB schemas (Users, Teams, Tasks)
│   ├── routes/        # Defines API endpoints
│   ├── middleware/    # Authentication & authorization helpers
│   ├── utils/         # Helper functions
│   ├── server.js      # Main backend file
│   ├── package.json   # Backend dependencies
│
│── frontend/            # Frontend (React.js)
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Main screens (Dashboard, Login, Task Manager)
│   │   ├── context/     # Global state management (Context API)
│   │   ├── hooks/       # Custom React hooks
│   │   ├── services/    # API calls (Axios)
│   │   ├── styles/      # CSS or Tailwind styling
│   │   ├── App.js       # Root React component
│   │   ├── index.js     # Entry point for React
│   ├── public/         # Static assets (images, icons)
│   ├── package.json    # Frontend dependencies
│
│── .env                # Environment variables
│── README.md           # Project documentation
