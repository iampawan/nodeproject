var express = require("express");
var dbRouter = express.Router();
var mongodb = require("mongodb").MongoClient;

var eventsData = [{time : '10 Feb 2017',title : 'Event 1', body: 'This is Event 1 Dudes'},
                {time : '15 Feb 2017',title : 'Event 2',body: 'This is Event 2 Dudes'},
                {time : '22 Feb 2017',title : 'Event 4',body: 'This is Event 4 Dudes'},
                {time : '15 Feb 2017',title : 'Event 5',body: 'This is Event 5 Dudes'}];

dbRouter.route('/AddEventData')
        .get(function(req,res){
         
         var url = 'mongodb://localhost:27017/eventApp';
         mongodb.connect(url,function(err,db){
            var collection = db.collection('events');
            collection.insertMany(eventsData,function(err,results){
               res.send(results);
               db.close();
            });
         });
         
         
         
        });

module.exports = dbRouter;