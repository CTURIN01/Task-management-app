# Task Management App with RBAC

## Overview

This is a full-stack Task Management application with Role-Based Access Control (RBAC). It allows users to create, read, update, and delete tasks based on their assigned roles. The application is built with a Node.js/Express backend, MongoDB database, and React frontend.

## Features

- User Authentication: JWT-based login and registration system
- Role-Based Access Control: Three roles (admin, manager, user) with distinct permissions
- Task Management:
  - Admin: Full CRUD access to all tasks
  - Manager: Can create, read, and update tasks
  - User: Can view tasks and update their status
- Responsive React frontend
- RESTful API backend

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- MongoDB (v4.0.0 or later)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/task-management-app.git
```

2. Install dependencies:

cd backend
npm install

cd backend
npm install


4. Set up environment variables:
- In the `backend` directory, create a `.env` file with the following content:

- Replace `your_jwt_secret_here` with a secure random string

## Usage

1. Start the backend server:

cd backend
npm start

2. Start the frontend development server:

cd frontend
npm start

The React app will run on `http://localhost:3000`

3. Open your browser and navigate to `http://localhost:3000` to use the application

## API Endpoints

- POST `/api/auth/register`: Register a new user
- POST `/api/auth/login`: Login a user
- GET `/api/auth/me`: Get current user info
- GET `/api/tasks`: Get all tasks (filtered by user role)
- POST `/api/tasks`: Create a new task (admin and manager only)
- PATCH `/api/tasks/:id`: Update a task
- DELETE `/api/tasks/:id`: Delete a task (admin only)

## Contributing

Contributions to this project are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the original branch: `git push origin feature-branch-name`
5. Create the pull request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact

If you want to contact me, you can reach me at `your-email@example.com`.

## Acknowledgements

- [Express.js](https://expressjs.com/)
- [React](https://reactjs.org/)
- [MongoDB](https://www.mongodb.com/)
- [JSON Web Tokens](https://jwt.io/)
