const express = require('express')
const app = express()
var path = require('path')
app.use('/js', express.static('js'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')))

app.listen(8000, () => console.log('Funcionou?'))