const mongoose = require("mongoose");

const invSchema = mongoose.Schema({
  userID: String,
  itemID: Number,
  nome: String,
  desc: String,
  tipo: String,
})

module.exports = mongoose.model("inv", invSchema);
