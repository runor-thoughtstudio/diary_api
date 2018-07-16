'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _api = require('./routes/api');

var _api2 = _interopRequireDefault(_api);

var _data = require('./data/data.json');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
// const dataFile = require('./data/data.json');
app.set('port', process.env.PORT || 3000);
app.set('appData', _data2.default);
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static('app/public'));
app.use(_api2.default.router);

app.listen(app.get('port'), function () {
  return console.log(_api2.default.serverStart);
});
//# sourceMappingURL=app.js.map
