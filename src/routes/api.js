import express from 'express';
import bodyParser from 'body-parser';

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
const datastructure = { entries: [], users: [] };

router.get('/api/v1/entries', (req, res) => {
	res.json(datastructure.entries);
});
router.get('/api/v1/entries/:id', (req, res) => {
	if (datastructure.entries === undefined || datastructure.entries[req.params.id] === undefined) {
		res.status(404).json({ error: 'This entry does not exist' });
	} else {
		const entry = datastructure.entries[req.params.id];
		res.json(entry);
	}
});
router.post('/api/v1/entries', (req, res) => {
	if (req.body.title && req.body.description) {
		datastructure.entries.push(req.body);
		res.status(201).json({ message: 'The entry has been created' });
	}
	res.status(400).json({ message: 'Invalid request' });
});
router.put('/api/v1/entries/:id', (req, res) => {
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
router.delete('/api/v1/entries/:id', (req, res) => res.json('Delete an entry'));

const serverStart = 'the server has started';
module.exports = {
	router,
	serverStart,
};
