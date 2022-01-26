var express = require('express');
var bodyParser = require('body-parser')
var app = express();
alert("Hello World")
app 		.use(bodyParser.urlencoded({extended: false}))
		.use(bodyParser.json())
    		.use((req,res,next)=>{
	    		console.log(req.method+" "+ req.path +" - "+ req.ip);
			next();
		})
		.use('/public',express.static(__dirname + '/src/css'))
		.get('/',(req, res)=> {
      			res.sendFile(__dirname +'/src/html/index.html');
	  	})
		/*.get('/json',(req,res)=>{
			res.json(
				{"message": process.env.MESSAGE_STYLE!=="uppercase"?"Hello json":"HELLO JSON"}
				)
		})
		.get('/now',
		(req,res,next)=>{
			req.time=new Date().toString()
			next()
			},
		(req,res)=>{
				res.json({
					time:req.time
				})
			})
		.get('/:word/echo',(req,res)=>{
			res.json({
				echo: req.params.word
				})
		})
		.get('/name',(req,res)=>{
			res.json({
				name:req.query.first +" "+ req.query.last
			})
		})
		.post('/name',(req,res)=>{
			res.json({
				name:req.body.first +" "+ req.body.last
			})
		})*/
 module.exports = app;