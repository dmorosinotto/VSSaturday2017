const express = require('express')
const app = express()
const path = require('path');

var basedir = path.resolve(path.relative(process.cwd(), __dirname) , './public');
console.log('Serving files from ', basedir);
app.use(express.static( basedir ));

app.get('/', function (req, res) {
    var data = 'Hello World!';
    res.send(data);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});