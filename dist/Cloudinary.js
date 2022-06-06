"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _cloudinary = require("cloudinary");

_cloudinary.v2.config({
  cloud_name: 'tomcloud-0101',
  api_key: '431637382912813',
  api_secret: 'acVevcKCosz9uNNUe5ib02UGe-k',
  secure: true
});

var uploadImage = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(filePath) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _cloudinary.v2.uploader.upload(filePath, {
              folder: 'aenima',
              use_filename: true
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function uploadImage(_x) {
    return _ref.apply(this, arguments);
  };
}();

var deleteImagen = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(publicId) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _cloudinary.v2.uploader.destroy(publicId);

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function deleteImagen(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

module.exports = {
  uploadImage: uploadImage,
  deleteImagen: deleteImagen
};
//# sourceMappingURL=Cloudinary.js.map