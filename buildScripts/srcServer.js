import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev'

const app = express();
const port = 3000;
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function (req, res) {

    res.json([{
            "id": 1,
            "firstName": "Bod",
            "lastName": "Smith",
            "email": "bob@gmail.com"
        },
        {
            "id": 2,
            "firstName": "Tammy",
            "lastName": "Tail",
            "email": "tammy@gmail.com"
        }, {
            "id": 3,
            "firstName": "Tina",
            "lastName": "Jackson",
            "email": "tina@gmail.com"
        }
    ]);
});

app.listen(port, function (err) {
    if (err) return console.error(err); //eslint-disable-line no-console

    open('http://localhost:' + port);
});