# Code Quest Arcade
Code Quest Arcade is an 80s-themed trivia game designed to review basic JavaScript concepts in a fun and unique way. I created it as my Capstone Project for Code:You.
Players enter their name and begin with a brief prologue outlining their quest. They then answer 10 basic JavaScript questions presented in a neon arcade-style game environment.
When a player answers correctly, their answer glows pink and the word “Tubular!” congratulates them. When they answer incorrectly, their answer glows purple and the message “Oh SNAP, better luck next time!” encourages them to keep going.
As the player progresses through the game, the green lights at the top of the game board change with each question. An 80s-themed quote at the bottom of the game board also changes as the player progresses.
Scores are tracked through a backend database and displayed on the high-score page.
I wanted this project to be fun to build and play while giving me an opportunity to practice full-stack development. I used my love of neon arcade designs as inspiration and practiced connecting a JavaScript frontend to a Node.js/Express backend and SQLite database.
How the Score System Works
The project includes a small API that allows the game to communicate with the server.
## The basic flow is:
When the game ends, the frontend sends the player's name and score to the Express server. The server then uses an INSERT SQL statement to add the score to the database.
When the high-score page loads, the frontend asks the server for the scores. The server uses a SELECT statement to retrieve the scores, sorts them from highest to lowest, and returns the top 5 scores to the frontend.
The scores are stored in a small SQLite database file called scores.db. You can think of the database as a small digital spreadsheet that is stored as a file on the server.
The database.js file handles the SQLite database connection, while server.js handles the API routes that communicate with the database.
## Features
80s/90s arcade-style JavaScript quiz game
JavaScript trivia questions
10-question game
One attempt per question
Instant answer feedback
Live score tracking
Top 5 high scores
Player name saved with localStorage
Scores stored in a SQLite database
Random 80s-themed quotes
Neon arcade animations and visual effects
Frontend communicates with a Node.js/Express backend
## Technologies Used
**Frontend**
HTML5 — 5 pages: index.html, createaccount.html, prologue.html, game.html, score.html
CSS3 — Custom properties (:root variables), Flexbox, CSS Grid, animations, media queries, clamp(), gradients, and layered box-shadow effects for the neon arcade design
JavaScript — async/await, fetch, localStorage, DOM manipulation, event listeners, and array methods
**Backend**
Node.js — JavaScript runtime used to run the server
Express.js — Web framework used for routing and serving the application
Database
SQLite — File-based relational database used to store scores
SQL — Used to create the database table and insert and retrieve scores
sqlite3 — Node.js package used to connect the application to SQLite
## Tools & Workflow
npm — Package and dependency management
Git — Version control
GitHub — Repository and project hosting
Git Bash — Terminal used for Git and Node.js commands
## How the Application Works

The frontend communicates with the Express server using two API endpoints:
GET /scores — Retrieves the top 5 scores from the SQLite database.
POST /scores — Sends a player's name and score to the server so it can be stored in the database.

The application separates the frontend, backend, and database.
The browser handles the game and user interaction. The Express server handles requests from the frontend, and SQLite stores the scores.

The project uses fetch(), Promises, and async/await to load data and communicate with the server without stopping the rest of the webpage from running.
## How to Run This Project
Requirements
Node.js
npm (included with Node.js)
VS Code or another code editor
Installation
Clone the repository and open the project folder in VS Code.
Open the terminal in the project folder and install the project dependencies:
npm install

Start the server:
node server.js

The terminal should display:
Welcome back to 1980

Open your browser and go to:
http://localhost:1980

When the server runs for the first time, it automatically creates the SQLite database file:
scores.db

No manual database setup is required.
## How to Play
Enter your name on the start screen.
Read the prologue.
Answer 10 multiple-choice JavaScript trivia questions.
Receive instant feedback after each answer.
Watch your score update as you progress.
View your final score.
Check the top 5 scores on the leaderboard.

###### Author
Built by Heather Lawson for the Code:You Web Development with JavaScript Capstone Project.

