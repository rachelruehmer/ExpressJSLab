const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, '../public')));

app.use((req, res, next) => {
    console.log(req.originalUrl);
    next();
});

app.post('/formsubmissions', (req, res) => {
    console.log(req.body.email);
    console.log(req.body.name);
    res.send('Hello from the web server side...');
});



app.listen(3000);