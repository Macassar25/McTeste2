const express = require('express');
const http=  require ('http');
const socketIo = require("socket.io");
const path = require ('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server)

app.use(express.static(__dirname));

const routes= require('./routes');
const { disconnect } = require('process');
app.use('/api', routes);

app.get('/', (re, res)=> {
    res.sendFile(path.join(__dirname), 'index.html')
});

io.on('connection', (socket) => {
    console.log('usuario conectado');

    socket.on('mensagem', (msg) => {
        console.log('mensagem recebida: ', msg);
        io.emit('mensagem' , msg);

    })
    socket.on('disconect', () => {
        console.log('Usuario disconectado');

    } )
})

const PORT = process.env.PORT // 3000;
server.listen(PORT,) () => {
    console.timeLog('servidor rodando na potra ${Port}');
}