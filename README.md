** Monito web de temperaturas, arduino/node **

*arduino*
- Copiar el código de la carpeta ds18b20 en aruduino-ide
- Instalar las dependencias necesarias (oneWire y dallastemperature) 
- Revisar y compilar el codigo en en arduino-ide
- Revisar las temperatura en la sección "monitor de serie"

https://programarfacil.com/blog/arduino-blog/ds18b20-sensor-temperatura-arduino/

*node*
- Ingresar a capeta server
- $ npm install
   - DEPENDENCIAS: 
   - npm i serialport
   - npm i express
   - npm i socket.io
- $ node index.js

Listo! :)

*configuración*

// web socket-io 
https://www.npmjs.com/package/socket.io

// /server/index.js
// EXPRESS + SOCKET.IO
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// OPTIONAL 
// io.on('connection', socket => {
//  socket.emit('request', /* … */); // emit an event to the socket
//  io.emit('broadcast', /* … */); // emit an event to all connected sockets
//  socket.on('reply', () => { /* … */ }); // listen to the event
//});

server.listen(3000);

// EMIT DATA WITH SERIALPORT-SOCKET.IO 

parser.on('data', function(data){
   console.log(data);
   io.emit('temp, data');
})


// ./public/index.html

<canvas id="myChart" width="600" height="400"></canvas>

// CDN chart
<script src="https://cdn.jsdelivr.net/npm/chart.js@3.8.0/dist/chart.min.js"></script>

<script src="/socket.io/socket.io.js"> </script>       
<script src="main.js"> </script>

// ./public/main.js
// init socket.io
const socket = io();
socket.on('temp', function(data) {
   console.log(data)
// agregar logica para chart-js
})








