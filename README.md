
# REACT JS, NODE JS Login and Registration Challenge

This is a full-stack JavaScript application that allows users to register and login to view a pre-existing page of your choice. Upon registration, users are required to supply a username, email address, and password. The application uses MongoDB, Express.js, JWT, and React.js to implement its functionality.

## Features

- User registration with validation for username, email, and password.
- User login with JWT authentication.
- Middleware implemented in Express.js to ensure usernames do not contain inappropriate words.
- Frontend implemented with React.js, featuring components for registration, login, and displaying a pre-existing page.
- Route handling in Express.js for registration, login, and fetching the pre-existing page.

## Technologies Used

- **MongoDB**: NoSQL database used to store user data.
- **Express.js**: Node.js web application framework used for the server-side implementation.
- **JWT (JSON Web Tokens)**: Used for user authentication.
- **React.js**: JavaScript library used for building user interfaces.
- **Node.js**: JavaScript runtime used for the server-side implementation.

## Installation

1. Clone the repository:

    ```
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```
    cd javascript-login-registration-challenge
    ```

3. Install dependencies for both the server and client:

    ```
    npm install
    cd client
    npm install
    ```

4. Set up environment variables:

    - Create a `.env` file in the root directory.
    - Define the following environment variables:

    ```
    PORT=3000
    MONGODB_URI=<your-mongodb-uri>
    JWT_SECRET=<your-jwt-secret>
    ```

5. Run the application:

    ```
    npm run dev
    ```

6. Access the application at `http://localhost:3000` in your browser.

## Usage

- Register: Fill in the registration form with a username, email, and password. Click on the "Register" button to create a new account.
- Login: Fill in the login form with your username and password. Click on the "Login" button to authenticate and access the pre-existing page.

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues for any improvements or suggestions.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
