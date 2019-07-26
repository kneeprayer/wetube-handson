"use strict";

var _passport = _interopRequireDefault(require("passport"));

var _passportGithub = _interopRequireDefault(require("passport-github"));

var _passportFacebook = _interopRequireDefault(require("passport-facebook"));

var _User = _interopRequireDefault(require("./models/User"));

var _userController = require("./controllers/userController");

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_passport["default"].use(_User["default"].createStrategy());

_passport["default"].use(new _passportGithub["default"]({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.PRODUCTION ? "".concat(process.env.PASSPORT_GITHUB_CALLBACK_URL, "/").concat(_routes["default"].githubCallback) : "http://localhost:4000".concat(_routes["default"].githubCallback)
}, _userController.githubLoginCallback));

_passport["default"].use(new _passportFacebook["default"]({
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL: "https://quiet-cat-12.localtunnel.me".concat(_routes["default"].facebookCallback),
  profileFields: ["id", "displayName", "photos", "email"],
  scope: ["public_profile", "email"]
}, _userController.facebookLoginCallback));

_passport["default"].serializeUser(_User["default"].serializeUser());

_passport["default"].deserializeUser(_User["default"].deserializeUser());