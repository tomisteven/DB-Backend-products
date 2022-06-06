"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

_mongoose["default"].connect(process.env.MONGODB, {
  useNewUrlParser: true
}).then(function () {
  console.log('Connected to MongoDB');
})["catch"](function (err) {
  console.log(err);
});
//# sourceMappingURL=database.js.map