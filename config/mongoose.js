const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/csv_uploader_db');

const uri = process.env.CSV_URI;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to Atlas database ');
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'ERROR CONNECTING TO DATABASE...'));
db.once('open', () => {
  console.log('Successfully connected to database');
});
module.exports = db;
