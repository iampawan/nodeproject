var express = require("express");
var app = express();
var port = process.env.PORT;
var eventRouter = require('./src/routes/eventroutes');
var dbRouter = require('./src/routes/dbRoutes');



app.use(express.static("public"));
app.use(express.static("src/views"));
app.use(express.static('bower_components'));

app.set('views','./src/views');
app.set('view engine','ejs');


app.use('/Events',eventRouter);
app.use('/Db',dbRouter);



app.get('/',function(req,res){
    res.render('index',{ list: ['Pawan','Vijay','Aakash'],
        nav : [{Link : 'Services',Text : 'Services'},
                {Link : 'Portfolio',Text : 'Portfolio'},
                {Link : 'About', Text : 'About'},
                {Link : 'Team', Text : 'Team'},
                {Link : 'Contact', Text : 'Services'},
                {Link : 'Events', Text : 'Events'}]
    });
});

app.get('/routing',function(req,res){
    res.send("Pawan Routing !");
});

app.listen(port,function(err){
   console.log("Server is running on port : " + port);
});