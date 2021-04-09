// code for express
const express = require('express');


// calling express, setting port
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// importing routes app
require ('./routes/apiRoutes.js')(app);
require ('./routes/htmlRoutes.js')(app);


// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));


