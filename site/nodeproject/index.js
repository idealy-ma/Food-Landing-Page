const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser');

var acceuilRoute = require('./routes/acceuil.routes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/acceuil', acceuilRoute);

app.listen(3000);