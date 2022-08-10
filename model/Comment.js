var mongoose = require("mongoose")
const Post = require("./Post")
var Schema = mongoose.Schema

var CommentSchema = new Schema({
    post:{
        type: Schema.Types.ObjectId,
        ref : "Posts",
    },
    comment : {
        type : String,
        required : true,
    },
    reply: {
        type : String,
    },
     author:{
        type: Schema.Types.ObjectId,
        ref : "user",
    },
    commenter: {
        type: Schema.Types.ObjectId,
        ref : "user",
    },
    created: {
        type: Date,
        default: Date.now(),
    },
    updated: {
        type: Date,
        default: Date.now(),
      },
    });
    module.exports = mongoose.model("Comments", CommentSchema);