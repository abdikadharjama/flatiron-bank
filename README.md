Bank Transactions App
Overview
This React application allows users to view, add, and filter their recent bank transactions. It's built with React hooks, demonstrating the use of state and effect to manage data and UI rendering dynamically.

Features
View Transactions: Users can see a table listing all their transactions.
Add Transactions: Users can add new transactions through a form. New transactions are displayed in the table immediately.
Filter Transactions: Users can filter transactions based on the description by typing into the search bar.
Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Node.js
npm or yarn
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/Abdikadharjama/bank-transactions-app.git
cd bank-transactions-app
Install the dependencies:
bash
Copy code
npm install
# or
yarn install
Start the JSON server to mock the backend:
bash
Copy code
json-server --watch db.json 
Run the application:
bash
Copy code
npm start
# or
yarn start
Visit http://localhost:5173  to view the app.

Usage
After starting the app, you can view all transactions loaded from the db.json file. Add new transactions using the form at the top of the page. Filter existing transactions using the search bar.

Contributing
Contributions are welcome! Please feel free to submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE.md file for details.

Acknowledgments
React documentation for guidance on React hooks.
JSON Server for providing a simple backend solution.

Author:Abdikadhar Jama