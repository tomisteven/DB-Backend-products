"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var Product = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    secure_url: String,
    public_id: String
  },
  price: {
    type: Number,
    required: true
  }
});

var _default = (0, _mongoose.model)('Product', Product);

exports["default"] = _default;
//# sourceMappingURL=Product.js.map