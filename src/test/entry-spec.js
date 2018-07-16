import chai from 'chai';
import nock from 'nock';
import tools from '../lib/tools';
// import api from '../routes/api';

const { expect } = chai;

describe('printEntries()', () => {
	before(() => {
		const str = 'awesome';
		nock('https://4e70c2de.ngrok.io').get('/api/v1/entries').reply(200, `[{ title: 1, description: ${str} }]`);
	});
	it('should show all entries', (done) => {
		const url = 'https://4e70c2de.ngrok.io/api/v1/entries';
		tools.showEntries(url, (body) => {
			expect(body).to.be.a('string');
			done();
		});
	}).timeout(10000);
});
