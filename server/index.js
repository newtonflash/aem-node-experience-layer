import express from 'express';
import config from '../config.js';
import fs from 'fs';
import https from 'https';

let app = express();
app.use(express.json({limit: '50mb'}));
app.use(require('./routes/'));
app.use(express.static('local/static/'));

app.use(function(req, res, next) {
    next(res.set(404).send('Page not found'));
});

/*https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, app).listen(config.APP_SERVER_PORT_NO, () => console.log('AERN experience layer started at port:', config.APP_SERVER_PORT_NO));*/
app.listen(config.APP_SERVER_PORT_NO, () => console.log('AERN experience layer started at port:', config.APP_SERVER_PORT_NO));

export default app;

