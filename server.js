const express = require('express');
const app = express();

app.set('view engine', 'jade');

// middleware to static resources
app.use(express.static('public'));

// handle get requests from browser
app.get('/greetings', function(req, res){
    res.render('index', {title: 'This is a nodejs diocane', message: 'dio fa cacare tantissimo'});
})

// handle parametric url
app.get('/greetings/:name', function(req, res){
    let userName = req.params.name;
    res.render('index', {title: 'This is a nodejs diocane', message: `${userName} fa cacare tantissimo`});
})

app.listen(3000, '192.168.1.148', function(){
    console.log('Server is listening on port 3000');
})