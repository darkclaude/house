var express = require('express');
var app = express();
var port = 80;
var state = 'f';
app.use('/',express.static(__dirname + '/views'));
app.set('view engine', 'ejs');


app.get('/', function  (req, res) {
	res.render('index.ejs');
});

app.post('/control/on', function(req, res){
state = 'o';
res.send("ok");
});

app.post('/control/off', function(req, res){
state='f';
res.send("ok");
});

app.get('/arduino', function(req, res){
res.send(state);
req.params.s = "enable";
console.log("Arduino is GeTting me oo! ");
});
console.log("Listening on "+port);
app.listen(port);