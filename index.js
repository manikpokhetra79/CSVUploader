const express = require('express');
const port = 8000;

const app = express();

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
