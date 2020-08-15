const mongo = require("mongoose");

const userSchema = new mongo.Schema({
  order_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

module.exports = mongo.model("Orders", userSchema);
