# 📘 StudyMate - Online Group Study Platform

Welcome to **StudyMate**, an online platform where friends can collaborate and grow through assignments and peer evaluations! This project is a job assessment for a Junior MERN Stack Developer role at **BJET Inc. Japan**.

---

## 🌐 Live Website

👉 [Visit StudyMate Live](https://study-mate-d0ccd.web.app/)

---

## 🎯 Project Purpose

The purpose of this project is to demonstrate skills in the MERN stack (MongoDB, Express.js, React, Node.js) by building an interactive, secure, and responsive web application focused on online group study and peer evaluation.

---

## 🚀 Key Features

### 🔐 Authentication
- Email & Password-based registration and login using Firebase.
- Google Login (OAuth) support.
- JWT authentication for securing protected routes.

### 📝 Assignment Management
- Create assignments with title, description, marks, difficulty level, and due date.
- Filter and search assignments by difficulty and title.
- View assignment details and take assignments.
- Update and delete your own assignments only.

### 📤 Assignment Submission
- Submit via Google Docs link and notes.
- Only logged-in users can submit.
- All submissions are initially in "pending" status.

### ✅ Evaluation System
- View all pending submissions.
- Give marks and feedback to others' submissions.
- Examiner cannot mark their own submission.

### 👤 User Experience
- View personal submitted assignments with feedback and marks.
- Profile dropdown with avatar and logout options.
- Theme toggle (Light/Dark mode).
- Beautiful and responsive UI (mobile, tablet, desktop).
- Framer Motion animations on the homepage.

---

## 📄 Pages & Routes

| Page                     | Access Type         | Description |
|--------------------------|---------------------|-------------|
| Home                     | Public              | Welcome, features, FAQ, animations |
| Login / Register         | Public              | Auth system |
| Assignments              | Public              | View all assignments |
| Create Assignment        | Private             | Form for assignment creation |
| My Attempted Assignments| Private             | User's submitted assignments |
| Pending Assignments      | Private             | See others' pending submissions |
| Assignment Details       | Private & Dynamic   | View full info + take assignment |

---

## 🛠️ Technologies Used

### 🔧 Frontend
- React.js
- React Router DOM
- Tailwind CSS
- Framer Motion
- React DatePicker
- SweetAlert2 / Toast
- Firebase Auth

### 🧪 Backend
- Node.js
- Express.js
- MongoDB
- CORS
- JWT (jsonwebtoken)
- Dotenv

---

## 🔒 Security

- Firebase config keys secured using `.env.local`
- MongoDB URI secured using `.env` on server
- JWT tokens stored on client and sent in API headers for authentication
- Protected Routes check for valid JWT tokens

---

## 📱 Responsiveness

- Fully responsive layout across:
  - Mobile
  - Tablet
  - Desktop

---

## 📁 Folder Structure Highlights

