"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _ProductRoutes = _interopRequireDefault(require("./routes/Product.routes.js"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _expressFileupload = _interopRequireDefault(require("express-fileupload"));

require("./database.js");

_dotenv["default"].config();

var app = (0, _express["default"])(); //midlewares

app.use(_express["default"].json());
app.use((0, _cors["default"])());
app.use((0, _expressFileupload["default"])({
  useTempFiles: true,
  tempFileDir: './uploads'
})); //rutas de la aplicacion

app.use("/api/products", _ProductRoutes["default"]); //base de datos

app.listen(process.env.port, function () {
  console.log('Server started on port', process.env.PORT);
});
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=index.js.map