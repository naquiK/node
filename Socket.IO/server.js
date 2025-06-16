const express = require('express');
const http = require('http');

const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

const users = new Set();
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);
    
    // Add user to the set
    socket.on('join', (username) => {
        users.add(username);

        socket.username = username; // Store username in socket object

        // Notify all clients about the new user
        io.emit("userJoined", username);
        
        io.emit('userList', Array.from(users));
    });

    //handle incoming messages
    socket.on('chatMessage' , (message)=>{
        // Broadcast the message to all clients
        io.emit('chatMessage', message);
    } )
    //handle user disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
        
        // Remove user from the set
        users.forEach((user) => {
            if (user === socket.username) {
                users.delete(user);
                io.emit('userLeft', user);

                io.emit('userList', Array.from(users));
            }
        });
        
        io.emit('userList', Array.from(users));
    });
});
  
server.listen(3000, () => {
    console.log('Socket.IO server is running on port 3000');
} 
); 