'use strict';

var _https = require('https');

var _https2 = _interopRequireDefault(_https);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	showEntries: function showEntries(url, callback) {
		_https2.default.get(url, function (res) {
			var body = '';
			res.setEncoding('UTF-8');
			res.on('data', function (chunk) {
				body += chunk;
			});
			res.on('end', function () {
				return callback(body);
			});
		});
	}
};
//# sourceMappingURL=tools.js.map
