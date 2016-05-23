var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ItemSchema = new Schema({
    title: String,
    author: String,
    content: String

});

module.exports =  mongoose.model("Item", ItemSchema);
