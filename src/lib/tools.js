import https from 'https';

module.exports = {
	showEntries(url, callback) {
		https.get(url, (res) => {
			let body = '';
			res.setEncoding('UTF-8');
			res.on('data', (chunk) => {
				body += chunk;
			});
			res.on('end', () => callback(body));
		});
	},
};
