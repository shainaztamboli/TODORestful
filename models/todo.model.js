/**
 * Created by shainazt on 1/30/2015.
 */
var mongoose = require('mongoose'),
    Schema  = mongoose.Schema;

var todoSchema = new Schema({
    todoText:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false,
        required:true
    }

})

mongoose.model('Todo', todoSchema);