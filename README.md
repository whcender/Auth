# Node.js Authentication Project

This is a simple authentication project in Node.js that is designed to help understand the logic behind it. The project utilizes bcrypt for password hashing and mongoose for data storage. 

## Getting Started

To get started, clone this repository to your local machine and install the necessary dependencies using `npm install`. Then, create a `.env` file in the root directory with the following environment variables:

```ENV
DB_CONNECT=<your_mongoDB_URI>
JWT_SECRET=<your_jwt_secret>
```

Once you have set up the environment variables, run the project using `npm start`. This will start the server and allow you to use the authentication endpoints.

## Endpoints

The project includes the following endpoints:

- `/api/user/register` - Used to register a new user
- `/api/user/login` - Used to login an existing user

Both endpoints expect a JSON payload in the request body with the following format:

```javascript
{
"email": "<user_email>",
"password": "<user_password>"
}
```

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- Bcrypt

## Future Updates

In the future, this project will be updated to include Redux for state management. 

## Contributing

If you have any suggestions for improvement or would like to contribute to the project, feel free to submit a pull request.
