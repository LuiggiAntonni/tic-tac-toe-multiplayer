import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3001", // Porta do frontend
        methods: ["GET", "POST"]
    }
});

app.get('/', (req, res) => {
    res.send('Tic-Tac-Toe Server is running');
});

io.on('connection', (socket) => {
    console.log('A user connected');
    socket.emit('welcome', 'Hello from the server backend');
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
