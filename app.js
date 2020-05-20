const express = require('express');
const http = require('http');
const path = require('path');
 const app = express();
// Routes
app.use(express.static(__dirname + '/dist/'));

// app.get('/ui', (req, res) => res.sendfile(path.join(__dirname)));

app.get('/server',(req,res)=> res.send("iTech Node Server is running Now"));

// Listen
var port = process.env.PORT || 8000;
app.listen(port);
console.log('Listening on localhost:'+ port);



// const app = express();

// const port = process.env.PORT || 3001;

// app.use(express.static(__dirname + '/dist/my-app-name'));

// app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

// const server = http.createServer(app);

// server.listen(port, () => console.log(`App running on: http://localhost:${port}`));
