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
