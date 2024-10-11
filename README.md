Overview
This Note-Taking App is a simple yet powerful tool for managing your daily notes and tasks. It allows users to add, edit, delete, and mark notes as complete. Additionally, the app features both day and night modes for enhanced user experience.

Features
Add, Edit, and Delete Notes: Easily manage your notes with intuitive controls.
Responsive Design: Uses a grid layout for a responsive user interface.
Dark Mode: Switch between day and night modes for comfortable viewing.
User Authentication: Secure login and registration with password hashing and session management.
Real-Time Updates: The app fetches and displays notes dynamically.
Error Handling: Comprehensive error handling to ensure a smooth user experience.

Prerequisites
Node.js (version 14 or higher)
MongoDB (running locally or a remote instance)
npm (Node Package Manager)
Setup Instructions

Clone the Repository:

git clone <your-repository-url>
cd <repository-directory>

Install Dependencies:

npm install
npm install cors dotenv express express-session mongoose passport passport-local
npm install nodemon --save-dev

Add the following scripts to the scripts section to use nodemon for development:

  "scripts": {
    "start": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }

Set Up Environment Variables:

Create a .env file in the root directory.
Define your environment variables like so:

PORT=4000
MONGO_URI=mongodb://localhost:27017/note
SESSION_SECRET=your_secret_key
Start MongoDB: Ensure your MongoDB instance is running locally or accessible remotely.

Run the Application:

npm start
Access the App: Open your browser and navigate to http://localhost:4000/app.

Usage
Register/Login: Use the registration form to create an account or login if you already have an account.
Add Notes: Fill in the title and details, then click "Add".
Edit/Delete Notes: Click the "Edit" or "Delete" buttons on each note.
Toggle Dark Mode: Click the "Switch to Night Mode" button to change themes.
Technologies Used
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MongoDB
Authentication: Passport.js with Local Strategy
Session Management: express-session

Contributing
Feel free to fork the repository and submit pull requests. For significant changes, please open an issue first to discuss what you would like to change.