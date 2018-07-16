import express from 'express';
import api from './routes/api';
import dataFile from './data/data.json';

const app = express();
// const dataFile = require('./data/data.json');
app.set('port', process.env.PORT || 3000);
app.set('appData', dataFile);
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static('app/public'));
app.use(api.router);

app.listen(app.get('port'), () => console.log(api.serverStart));
