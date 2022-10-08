const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const catagories = new Schema({
  catagory_name: { type: String, required: true },
  catagoryParentID: { type: Object, required: true },
  catagory_form: { type: Number, required: true },
  
},
{ timestamps: true }
);

module.exports = mongoose.model("ERP_catagories", catagories);