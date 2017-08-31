'use strict';

let express = require('express');
let app = express();

let rusty = require('./native');

app.get('/', (req, res) => {
	res.send(rust.hello());
});
