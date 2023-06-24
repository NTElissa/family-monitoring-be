"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.connectDB = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
var _swaggerThemes = require("swagger-themes");
var _expressSession = _interopRequireDefault(require("express-session"));
var _index = _interopRequireWildcard(require("./database/models/index"));
var _routes = _interopRequireDefault(require("./routes"));
var _index2 = _interopRequireDefault(require("../docs/index"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import passport from 'passport';

const app = (0, _express.default)();
app.use(_express.default.json());
app.use((0, _cookieParser.default)());
app.use((0, _cors.default)());
_dotenv.default.config();
app.get('/', (req, res) => {
  res.status(200).send(`<h1 style='text-align: center; color: #CCD6F6; margin-top: 20vh; background: #4700b8; padding: 150px;'>Welcome to Parental control Proj apis</h1>`);
});

//database connection
const connectDB = async () => {
  try {
    // await sequelize.sync({ force: true });
    await _index.sequelize.sync();
    console.log('🟢 Database connection established successfully');
  } catch (err) {
    console.log(`Database connection failed: ${err}`);
    process.exit(1);
  }
};

// Swagger Docs Dark-Mode setup
exports.connectDB = connectDB;
const theme = new _swaggerThemes.SwaggerTheme('v3');
const options = {
  explorer: true,
  customCss: theme.getBuffer('dark')
};
app.use('/api-docs', _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(_index2.default, options));
app.use('/api/v1', _routes.default);
var _default = app;
exports.default = _default;