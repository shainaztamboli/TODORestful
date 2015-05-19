/**
 * Created by shainazt on 3/30/2015.
 */
var mongoose = require('mongoose'),
    Schema  = mongoose.Schema;

var imageSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        data: Buffer,
        contentType: String
    }

})

mongoose.model('Image', imageSchema);