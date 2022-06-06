"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProducts = exports.getProduct = exports.editProduct = exports.deleteProduct = exports.createProduct = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Product = _interopRequireDefault(require("../models/Product.js"));

var _cloudinary = require("../cloudinary.js");

var _fsExtra = _interopRequireDefault(require("fs-extra"));

//importamos base de datos
var createProduct = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$files, _req$body, name, description, price, newProduct, result;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, name = _req$body.name, description = _req$body.description, price = _req$body.price;
            newProduct = new _Product["default"]({
              name: name,
              description: description,
              price: price
            }); //ver objeto con null y undefined

            console.log(req.files);

            if (!((_req$files = req.files) !== null && _req$files !== void 0 && _req$files.image)) {
              _context.next = 11;
              break;
            }

            _context.next = 7;
            return (0, _cloudinary.uploadImage)(req.files.image.tempFilePath);

          case 7:
            result = _context.sent;
            newProduct.image = {
              public_id: result.public_id,
              secure_url: result.secure_url
            };
            _context.next = 11;
            return _fsExtra["default"].unlink(req.files.image.tempFilePath);

          case 11:
            _context.next = 13;
            return newProduct.save();

          case 13:
            //ir a pagina de productos
            res.redirect('http://localhost:3000');
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 16]]);
  }));

  return function createProduct(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createProduct = createProduct;

var getProducts = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var product;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Product["default"].find();

          case 3:
            product = _context2.sent;
            res.json(product);
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getProducts(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getProducts = getProducts;

var getProduct = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, product;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _Product["default"].findById(id);

          case 4:
            product = _context3.sent;
            res.json(product);
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function getProduct(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getProduct = getProduct;

var deleteProduct = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, product;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _Product["default"].findById(id);

          case 4:
            product = _context4.sent;
            _context4.next = 7;
            return (0, _cloudinary.deleteImagen)(product.image.public_id);

          case 7:
            _context4.next = 9;
            return product.remove();

          case 9:
            res.json({
              message: 'product deleted'
            });
            _context4.next = 15;
            break;

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 12]]);
  }));

  return function deleteProduct(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteProduct = deleteProduct;

var editProduct = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, _req$body2, name, description, price, product;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, description = _req$body2.description, price = _req$body2.price;
            _context5.next = 5;
            return _Product["default"].findById(id);

          case 5:
            product = _context5.sent;
            product.name = name;
            product.description = description;
            product.price = price;
            _context5.next = 11;
            return product.save();

          case 11:
            res.json({
              message: 'product Saved'
            });
            _context5.next = 17;
            break;

          case 14:
            _context5.prev = 14;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);

          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 14]]);
  }));

  return function editProduct(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.editProduct = editProduct;
//# sourceMappingURL=Product.controller.js.map