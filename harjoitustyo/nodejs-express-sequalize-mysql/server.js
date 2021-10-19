//importataan express ja cors moduliit
//luodaan express-app ja lisätään body-parser ja cors middlewares käyttämällä app.use()-metodia
//asetetaan orgin
//määritelllään get-route
//kunnellaan porttia 8080

const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
  origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//kutsutaan sync()- metodia
const db = require('./app/models');
db.sequelize.sync();

//kehitysvaiheessa
db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and re-sync db.');
});

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to tanja´s application.' });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
