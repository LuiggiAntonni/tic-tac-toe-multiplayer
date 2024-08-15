# **Tic-Tac-Toe Multiplayer**

## **Description**
Welcome to Tic-Tac-Toe Multiplayer! This is a classic Tic-Tac-Toe game developed as a portfolio project. The game allows two players to connect and play in real-time using modern frontend and backend technologies. The project was developed with a focus on simplicity and the use of popular frameworks, demonstrating full-stack web development skills.

## **Technologies Used**

### **Frontend**
- **React.js**: Library for building dynamic, component-based user interfaces.
- **Styled-components**: Library for styling React components using CSS-in-JS.
- **TypeScript**: Language that adds static typing to JavaScript, improving code safety and maintainability.

### **Backend**
- **Node.js**: Runtime environment for building the server layer.
- **Express.js**: Minimalist framework for creating routes and managing the server.
- **Socket.IO**: Library for real-time communication between client and server.
- **TypeScript**: Static typing in the backend for consistency with the frontend.

### **Database** (Optional)
- **Firebase Realtime Database**: Real-time database for storing game state and scores.

### **DevOps**
- **Docker**: Containerization of the application to facilitate distribution and deployment.
- **ESLint**: Tool to ensure code quality and consistency.
- **Prettier**: Tool for automatic code formatting.

## **Installation and Setup**

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/tic-tac-toe-multiplayer.git
    ```

2. Navigate to the project directory:
    ```bash
    cd tic-tac-toe-multiplayer
    ```

3. Install backend dependencies:
    ```bash
    cd backend
    npm install
    ```

4. Install frontend dependencies:
    ```bash
    cd ../frontend
    npm install
    ```

5. Run the backend:
    ```bash
    cd ../backend
    npm start
    ```

6. Run the frontend:
    ```bash
    cd ../frontend
    npm start
    ```

7. Access the game in your browser:
    ```
    http://localhost:3000
    ```

## **How to Play**

- The game follows the traditional Tic-Tac-Toe rules.
- Each player must connect to the game and choose a grid to place their symbol (X or O).
- The goal is to align three symbols horizontally, vertically, or diagonally.
- The player who aligns three symbols first wins, or the game ends in a draw if the grid is filled without a winner.

## **File Structure**

- `backend/`: Contains the Node.js server code and game routes.
- `frontend/`: Contains the React.js code for the user interface.
- `Dockerfile`: Configuration for Docker containerization.
- `.eslintrc.js`: ESLint configuration for code quality.
- `prettier.config.js`: Prettier configuration for code formatting.

## **Roadmap**

- Implement a scoring system and leaderboard using Firebase.
- Add support for more players and different game modes.
- Enhance the user interface with animations and transitions.

## **License**

This project is licensed under the MIT License. See the `LICENSE` file for more details.
