const express = require('express');
const app = express();
const port = 3030;
const path = require('path')
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html')))


app.use(express.static('public'))

app.listen(port, () => console.log('Server running in http://localhost:' + port))