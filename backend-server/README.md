# Backend Server for Simple Form Submission

This project is a backend server application built with Node.js and Express, designed to handle simple form submissions and interact with a MySQL database.

## Project Structure

```
backend-server
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers           # Contains controllers for handling requests
│   │   └── formController.js # Controller for form submissions
│   ├── models                # Contains models for database interaction
│   │   └── userModel.js      # User model for MySQL database
│   ├── routes                # Contains route definitions
│   │   └── formRoutes.js     # Routes for form submission and retrieval
│   └── config                # Configuration files
│       └── database.js       # Database connection configuration
├── package.json              # NPM package configuration
├── .env                      # Environment variables for the project
└── README.md                 # Project documentation
```

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd backend-server
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Configure the database**:
   Create a `.env` file in the root directory and add your MySQL database connection details:
   ```
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   ```

4. **Run the application**:
   ```
   npm start
   ```

## Usage Guidelines

- The server will listen for form submissions at the defined routes.
- Use tools like Postman or cURL to test the form submission endpoints.
- Ensure that your MySQL server is running and accessible with the provided credentials.

## License

This project is licensed under the MIT License.