var express = require('express');
var app = express();
var port  = process.env.OPENSHIFT_NODEJS_PORT;
var state = 'f';
app.use('/',express.static(__dirname + '/views'));
app.set('view engine', 'ejs');


app.get('/', function  (req, res) {
	res.render('index.ejs');
});


app.listen(port, process.env.OPENSHIFT_NODEJS_IP);