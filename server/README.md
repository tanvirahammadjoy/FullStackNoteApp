# Note App

Project Structure
note-app/
├── client/
│   ├── public/
│   │   ├── css/
│   │   │   ├── styles.css
│   │   ├── js/
│   │   │   ├── register.js
│   │   │   ├── login.js
│   │   ├── images/
│   │   │   ├── logo.png
│   │   ├── icons/
│   │   │   ├── favicon.ico
│   │   ├── 404.html
│   │   ├── register.html
│   │   ├── login.html
│   ├── index.html
├── server/
│   ├── config/
│   │   ├── database.js
│   │   ├── passport.js
│   ├── controllers/
│   │   ├── authController.js
│   ├── models/
│   │   ├── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── index.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   ├── app.js
│   ├── server.js
├── .env
├── .gitignore
├── package.json
├── README.md

Features
User Authentication
Registration: Allows users to create an account.
Login: Allows users to log in to their account.
Logout: Allows users to log out of their account.
Protected Routes: Ensures that only authenticated users can access certain pages.
Notes Management
Create Notes: Allows users to create new notes.
Read Notes: Allows users to view their notes.
Update Notes: Allows users to edit their existing notes.
Delete Notes: Allows users to delete their notes.
User Interface
Responsive Design: The application is designed to be responsive and accessible on various devices.
Dynamic Note Management: Users can add, edit, delete, and search notes dynamically.
Technologies Used
Frontend
HTML: For structuring the web pages.
CSS: For styling the web pages.
JavaScript: For adding interactivity to the web pages.
Quill Editor: For rich text editing functionality.
Backend
Node.js: For running JavaScript on the server.
Express.js: For building the server and handling HTTP requests.
Passport.js: For user authentication.
bcrypt: For hashing passwords.
Database
PostgreSQL: For storing user data and notes.
Sequelize: As the ORM for interacting with the PostgreSQL database.
Environment Variables
dotenv: For managing environment variables.
File Descriptions
Client Folder
public/css/styles.css: Contains the styles for the application.
public/js/register.js: Handles the registration page functionality.
public/js/login.js: Handles the login page functionality.
public/images/logo.png: Application logo.
public/icons/favicon.ico: Favicon for the application.
public/404.html: Custom 404 error page.
public/register.html: Registration page.
public/login.html: Login page.
index.html: Main application page.
Server Folder
config/database.js: Configures the connection to the PostgreSQL database.
config/passport.js: Configures Passport.js for authentication.
controllers/authController.js: Contains the logic for registering, logging in, and logging out users.
models/User.js: Defines the User model for Sequelize.
routes/authRoutes.js: Defines the routes for authentication (register, login, logout).
routes/index.js: Defines the main application routes and serves static files.
middleware/authMiddleware.js: Contains middleware for protecting routes.
app.js: Initializes the Express application and sets up middleware.
server.js: Starts the server.
Root Folder
.env: Contains environment variables.
.gitignore: Specifies files and folders to be ignored by Git.
package.json: Lists project dependencies and scripts.
README.md: Project documentation (this file).
What We Learned
Setting Up a Node.js Project: How to initialize and structure a Node.js project.
User Authentication: Implementing registration, login, and logout functionality using Passport.js and bcrypt.
Frontend and Backend Integration: Connecting the frontend and backend to create a full-stack application.
Database Management: Using PostgreSQL and Sequelize for database operations.
Middleware Usage: Creating and applying middleware for route protection.
Error Handling: Implementing custom error pages and handling errors gracefully.
Future Enhancements
Note Sharing: Allow users to share notes with others.
Tagging and Categorization: Enable users to tag and categorize their notes for better organization.
Rich Text Formatting: Enhance the note editor with more formatting options.
User Profile Management: Add functionality for users to manage their profiles and settings.
Mobile Optimization: Further optimize the application for mobile devices.
Conclusion
This project provided a comprehensive learning experience in full-stack web development. By building this note-taking application, we gained hands-on experience in user authentication, frontend-backend integration, database management, and responsive design. The structured approach and use of modern technologies ensured a robust and scalable application.
