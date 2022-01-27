var express = require('express');
var bodyParser = require('body-parser')
var app = express();

console.log("Hello Express")
app 		.use(bodyParser.urlencoded({extended: false}))
		.use(bodyParser.json())
    		.use((req,res,next)=>{
	    		console.log(req.method+" "+ req.path +" - "+ req.ip);
			next();
		})
		.use('/css',express.static(__dirname + '/src/css'))
		.get('/',(req, res)=> {
      			res.sendFile(__dirname +'/index.html');
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
const listener = app.listen(process.env.PORT || 3030, function () {
  console.log("Node.js listening on port " + listener.address().port);
});
 module.exports = app;