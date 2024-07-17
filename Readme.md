# playTube

playTube is a comprehensive backend project designed to create a video hosting platform similar to YouTube. This project utilizes modern technologies and follows standard practices to ensure security, scalability, and maintainability.

## Features

- User Authentication (Signup, Login, Logout)
- Video Uploading
- Video Streaming
- Like and Dislike Videos
- Comment on Videos
- Reply to Comments
- Subscribe and Unsubscribe to Channels
- JWT-based Authentication
- Access and Refresh Tokens
- Secure Password Storage with bcrypt

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- bcrypt

## Installation

To get a local copy up and running, follow these simple steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/dhaneshkumarTech/playTube.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd playTube
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

5. **Start the development server:**

   ```bash
   npm run dev
   ```

## Usage

1. **Signup:** Create a new user account.
2. **Login:** Authenticate with your credentials to receive access and refresh tokens.
3. **Upload Video:** Upload videos to the platform.
4. **Stream Video:** Watch videos uploaded by others.
5. **Like/Dislike:** Interact with videos by liking or disliking them.
6. **Comment/Reply:** Engage with other users through comments and replies.
7. **Subscribe/Unsubscribe:** Follow your favorite channels.
