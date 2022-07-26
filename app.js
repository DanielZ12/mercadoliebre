const express = require('express');
const app = express();
const port = 3030;
const path = require('path')


app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html')))
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'views', 'register.html')))
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'views', 'login.html')))


app.use(express.static('public'))

app.listen(port, () => console.log('Server running in http://localhost:' + port))