var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const Postschema = new Schema({
  title: {
    type: String,
    requierd: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  like: [
    {
      user: {
       type: Schema.Types.ObjectId,
       ref: "user",
      },
    },
  ],
  author: {
    type: Schema.Types.ObjectId,
    ref: "user",
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
module.exports = mongoose.model("post", Postschema);