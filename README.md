# My Auth Project

This project is a user authentication system built with Node.js and MySQL, designed to manage user roles, specifically focusing on an "administrator" role.

## Project Structure

```
my-auth-project
├── src
│   ├── config
│   │   └── db.config.js          # Database configuration settings
│   ├── controllers
│   │   └── auth.controller.js     # Handles user authentication
│   ├── middlewares
│   │   └── auth.middleware.js      # Middleware for authentication and role validation
│   ├── models
│   │   └── user.model.js          # User data model
│   ├── routes
│   │   └── auth.routes.js         # Authentication routes
│   ├── app.js                     # Entry point of the application
│   └── utils
│       └── password.util.js       # Password utility functions
├── package.json                   # npm configuration file
├── .env                           # Environment variables
└── README.md                      # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd my-auth-project
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your database connection details:
   ```
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   JWT_SECRET=your_jwt_secret
   ```

## Usage

1. Start the application:
   ```
   npm start
   ```

2. The server will run on `http://localhost:3000`.

## API Endpoints

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Log in an existing user.

## Contributing

Feel free to submit issues or pull requests for improvements and bug fixes.

## License

This project is licensed under the MIT License.