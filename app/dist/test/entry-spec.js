'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _nock = require('nock');

var _nock2 = _interopRequireDefault(_nock);

var _tools = require('../lib/tools');

var _tools2 = _interopRequireDefault(_tools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import api from '../routes/api';

var expect = _chai2.default.expect;


describe('printEntries()', function () {
	before(function () {
		var str = 'awesomedkjndk';
		(0, _nock2.default)('https://4e70c2de.ngrok.io').get('/api/v1/entries').reply(200, '[{ title: 6, description: ' + str + ' }]');
	});
	it('should show all entries', function (done) {
		var url = 'https://4e70c2de.ngrok.io/api/v1/entries';
		_tools2.default.showEntries(url, function (body) {
			expect(body).to.be.a('string');
			done();
		});
	}).timeout(10000);
});
//# sourceMappingURL=entry-spec.js.map
