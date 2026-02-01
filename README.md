# Task Manager – MERN Stack Application

A full-stack Task Manager application built using **React**, **Node.js**, **Express**, and **MongoDB Atlas**.  
The app allows users to create tasks, mark them as completed, and delete them, with data persisting in a cloud database.

This project demonstrates end-to-end full-stack development, REST API design, and frontend–backend integration.

---

## ✨ Features

- Create new tasks
- Mark tasks as completed (toggle)
- Delete tasks
- Persistent data storage using MongoDB Atlas
- Clean and responsive user interface
- RESTful API architecture

---

## 🛠 Tech Stack

**Frontend**
- React
- Tailwind CSS
- Axios

**Backend**
- Node.js
- Express.js
- Mongoose

**Database**
- MongoDB Atlas

**Version Control**
- Git & GitHub

---
## 📁 Project Structure

task-manager/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── src/
│ ├── public/
│ └── package.json
│
├── .gitignore
└── README.md

---

## 🚀 Getting Started (Run Locally)

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/task-manager-mern.git
cd task-manager-mern
2️⃣ Backend Setup
cd backend
npm install


Create a .env file inside the backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string


Run the backend server:

npm run dev


Backend runs on:

http://localhost:5000

3️⃣ Frontend Setup
cd ../frontend
npm install
npm start


Frontend runs on:

http://localhost:3000

🔌 API Endpoints
Method	Endpoint	Description
GET	   /api/tasks	Fetch all tasks
POST	/api/tasks	Create a new task
PATCH	/api/tasks/:id	Toggle task completion
DELETE	/api/tasks/:id	Delete a task
## 📸 Screenshots

![Task Manager UI](./screenshots/task-manager-ui.png)
🔮 Future Improvements

User authentication (JWT)

User-specific tasks

Task filters (All / Completed / Pending)

Deployment (Vercel + Render)

Improved UI animations and feedback

👤 Author

Aaron Ninan
Aspiring Full-Stack Developer
GitHub: https://github.com/aninan1512

## 📁 Project Structure

