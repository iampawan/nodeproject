var express = require("express");
var eventRouter = express.Router();
var mongodb = require("mongodb").MongoClient;

eventRouter.route('/')
            .get(function(req,res){
                var url = 'mongodb://localhost:27017/eventApp';
                mongodb.connect(url,function(err,db){
                var collection = db.collection('events');
                collection.find({}).toArray(function(err,results){
                    res.render('events',{ list: ['Pawan E','Vijay','Aakash'],
                                nav : [{Link : 'Services',Text : 'Services'},
                                {Link : 'Portfolio',Text : 'Portfolio'},
                                {Link : 'About',Text : 'About'},
                                {Link : 'Team',Text : 'Team'},
                                {Link : 'Contact',Text : 'Services'},
                                {Link : 'Events',Text : 'Events'}],
                    events : results 
                });
            });
         });
            });
            
eventRouter.route('/:id')
            .get(function(req,res){
                var id = req.params.id;
               res.render('event',{ list: ['Pawan E','Vijay','Aakash'],
        nav : [{Link : 'Services',Text : 'Services'},
                {Link : 'Portfolio',Text : 'Portfolio'},
                {Link : 'About',Text : 'About'},
                {Link : 'Team',Text : 'Team'},
                {Link : 'Contact',Text : 'Services'},
                {Link : 'Events',Text : 'Events'}],
        events : eventsData[id]
               });
            });
            
module.exports = eventRouter;