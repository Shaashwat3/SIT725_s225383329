const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

let votes = {
    JavaScript: 0,
    Python: 0,
    Java: 0
};

io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.emit('updateVotes', votes);

    socket.on('vote', (language) => {
        if (votes[language] !== undefined) {
            votes[language]++;
        }

        io.emit('updateVotes', votes);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});