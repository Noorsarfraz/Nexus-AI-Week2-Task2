
# NexusAI - Real-Time AI Server & Analytics Terminal

NexusAI is a modern full-stack web application designed for monitoring live AI server nodes, tracking real-time telemetry metrics, managing secure user authentication sessions, and executing server operations.

---

## 🚀 Features & Pages

* **Secure Authentication System:** 
  * **Login & Signup Pages:** Fully functional user registration and login with encrypted password storage.
  * **JWT Token-Based Security:** Protected API endpoints utilizing JSON Web Tokens for safe data communication.
* **Dashboard / Node Monitor:** 
  * Real-time deployment, monitoring, updating, and termination of active cluster nodes.
* **Responsive Cyber UI:** 
  * Built using **React**, **Tailwind CSS**, and **Lucide Icons** for a sleek, modern, and dark-themed dashboard experience.
* **Navigation & Protected Routes:** 
  * Dynamic routing via **React Router** ensuring unauthorized users cannot access telemetry dashboards.

---

## 🛠️ Tech Stack

### Frontend
* **React.js** (Vite)
* **Tailwind CSS** (Styling & Layout)
* **React Router DOM** (Client-side routing)
* **Lucide React** (Modern UI Icons)

### Backend
* **Node.js & Express.js** (REST API Server)
* **JSON Web Tokens (JWT)** (Session Authentication)
* **Bcrypt.js** (Password Hashing)
* **CORS & Dotenv** (Security and Environment configuration)

---

## ⚙️ Installation & Setup Instructions

To run this project locally on your machine, follow these steps:

### 1. Clone the Repository

```bash
git clone [https://github.com/Noorsarfraz/Nexus-AI-Week2-Task2.git](https://github.com/Noorsarfraz/Nexus-AI-Week2-Task2.git)
cd nexus-ai

```

### 2. Backend Setup

Navigate to the backend directory, install dependencies, and start the server:

```bash
cd backend
npm install
npm run dev

```

*(Make sure to create a `.env` file in the backend folder with `PORT=5000` and your `JWT_SECRET`)*

### 3. Frontend Setup

Open a new terminal tab/window, navigate to the frontend directory, install dependencies, and run the development server:

```bash
cd frontend
npm install
npm run dev

```

---

## 📌 Available Commands Summary

* **Backend Commands:**
* `npm install` - Installs Express, JWT, Bcrypt, and CORS packages.
* `npm run dev` - Starts the backend server using nodemon.


* **Frontend Commands:**
* `npm install` - Installs React, Tailwind, and router packages.
* `npm run dev` - Launches the Vite development server for the UI.


* **Git Workflow Commands Used:**
* `git add .` - Stages modified and new files.
* `git commit -m "..."` - Commits changes with descriptive messages.
* `git push origin main` - Pushes code securely to the GitHub repository.



---

## 👨‍💻 Author

**Noor Sarfraz**

*BSIT Student - Baba Guru Nanak University (BGNU)*

```

```
