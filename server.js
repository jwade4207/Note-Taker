const express = require('express');

const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoute.js');

const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming JSON data
app.use(express.json());

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

//middleware that instructs the server to make certain files readily available
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});