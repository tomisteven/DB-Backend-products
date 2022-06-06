"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Product = require("../controllers/Product.controller");

var router = (0, _express.Router)(); //rutas de la aplicacion

router.get('/', _Product.getProducts);
router.post('/newproduct', _Product.createProduct);
router["delete"]('/deleteproduct/:id', _Product.deleteProduct);
router.put('/editproduct/:id', _Product.editProduct);
router.get('/getproduct/:id', _Product.getProduct);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=Product.routes.js.map