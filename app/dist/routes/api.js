'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
router.use(_bodyParser2.default.json());
router.use(_bodyParser2.default.urlencoded({ extended: false }));
var datastructure = { entries: [], users: [] };

router.get('/api/v1/entries', function (req, res) {
	res.json(datastructure.entries);
});
router.get('/api/v1/entries/:id', function (req, res) {
	if (datastructure.entries === undefined || datastructure.entries[req.params.id] === undefined) {
		res.status(404).json({ error: 'This entry does not exist' });
	} else {
		var entry = datastructure.entries[req.params.id];
		res.json(entry);
	}
});
router.post('/api/v1/entries', function (req, res) {
	if (req.body.title && req.body.description) {
		datastructure.entries.push(req.body);
		res.status(201).json({ message: 'The entry has been created' });
	}
	res.status(400).json({ message: 'Invalid request' });
});
router.put('/api/v1/entries/:id', function (req, res) {
	if (!req.body.title || !req.body.description) {
		res.status(400).json({ message: 'Invalid request' });
	}
	if (datastructure.entries === undefined || datastructure.entries[req.params.id] === undefined) {
		res.status(404).json({ error: 'This entry does not exist' });
	}
	datastructure.entries[req.params.id].title = req.body.title;
	datastructure.entries[req.params.id].description = req.body.description;
	res.status(200).json({ message: 'This entry has been updated' });
});
router.delete('/api/v1/entries/:id', function (req, res) {
	return res.json('Delete an entry');
});

var serverStart = 'the server has started';
module.exports = {
	router: router,
	serverStart: serverStart
};
//# sourceMappingURL=api.js.map
