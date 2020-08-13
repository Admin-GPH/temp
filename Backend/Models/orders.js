const mongo = require("mongoose");

const userSchema = new mongo.Schema({
  order_id: {
    type: String,
    required: true,
  },
  mobile_no: {
    type: Number,
    required: true,
  },
  address: {
    full_address: {
      type: String,
      require: true,
    },
    pincode: {
      type: Number,
      require: true,
    },
    landmark: {
      type: String,
      required: true,
    },
  },
});

module.exports = mongo.model("User", userSchema);
