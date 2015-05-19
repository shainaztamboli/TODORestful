/**
 * Created by shainazt on 1/30/2015.
 */
var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function(){
    console.log(config.db);
    var db = mongoose.connect(config.db, function(err){
            if(err){
                console.log("Not Able to connect to MongoDB");
                console.log(err);
            }
    });
    require('../models/todo.model');
    require('../models/image.model');
    return db;
}
