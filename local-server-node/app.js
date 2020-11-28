var express = require('express')
var path = require('path')
var app = express()
var fs = require("fs")

app.get('/', (req, res)=>{
    res.send('Hello world');
});

app.get('/img', function (req, res, next) {
    res.sendFile(path.join(__dirname, 'public/2.png'));
})

app.get('/report', function (req, res, next) {
    res.sendFile(path.join(__dirname, 'public/gj.pdf'));
})
app.get('/air', function (req, res, next) {
    res.sendFile(path.join(__dirname, 'public/lenveo.mp4'));
})

app.get('/files',function (req, res) {
   var path1 = path.join(__dirname, 'public/Files.json');
   var data = fs.readFileSync(path1);
   var response = JSON.parse(data);
   res.end(JSON.stringify(response));
})
app.listen(7000, ()=>{
    console.log('Server is running at http://localhost:7000')
})