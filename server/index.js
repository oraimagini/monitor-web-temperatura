// server
const http = require('http');
const express = require('express');

// configuration
const app = express();
const server = http.createServer(app);

// configuration socketio
const io = require('socket.io')(server);

//io.on('connection', () => { 
//   console.log('conection socketio')
//});

// data public
app.use(express.static(__dirname + '/public'));
// init server
server.listen(3000, "127.0.0.1", function () {
   console.log('server listening on port', 3000)
})

// serialport biblioteca para conectar con arduino
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

// Puerto, revisar estos datos en arduino-ide 
const port = new SerialPort({ path: '/dev/ttyACM0', baudRate: 9600 });

//var dataArduino;

// formato de información por consola 
const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

parser.on('data', function (data){
   console.log(data)
   // configuration io
   io.emit('temp', data);
})
