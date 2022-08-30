const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
require('dotenv/config');

app.use(cors());

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(morgan('tiny'));
const loan = require('./controllers/loan.controller');
app.use('/api/loan', loan);

app.listen(process.env.PORT, () => {
    console.log(`Server running in port ${process.env.PORT}`);
});
