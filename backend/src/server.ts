import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import Game from './Game';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3001", // Porta do frontend
        methods: ["GET", "POST"]
    }
});

const game = new Game();

app.get('/', (req, res) => {
    res.send('Tic-Tac-Toe Server is running');
});

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.emit('gameState', game.getBoard());

    socket.on('makeMove', (position: number) => {
        if (game.makeMove(position)) {
            io.emit('gameState', game.getBoard());
            if (game.getWinner()) {
                io.emit('gameOver', game.getWinner());
            }
        }
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
