const mongoose = require("mongoose");

const dataMSchema = mongoose.Schema({
  nome: String,
  userID: String,
  lb: String,
  dinheiro: Number,
  banco: Number,
  data: Number,
  robData: Number,
})

module.exports = mongoose.model("DataM", dataMSchema);