const express = require('express');
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const app = express();

// set up view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//use express layouts
app.use(expressLayouts);

//use assets folder
app.use(express.static('assets'));

//make the uploads path avail to browser
app.use('/uploads/files/csv', express.static(__dirname + '/uploads/files/csv'));

//extract style and script from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// homepage route
app.use('/', require('./routes'));
// start server
app.listen(port, (error) => {
  if (error) {
    console.log('Express Server Error');
    return;
  }
  console.log(`Successfully connected to express Server at port ${port}`);
});
