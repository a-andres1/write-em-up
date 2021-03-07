// code for express
const express = require('express');
const path = require('path');

// calling express, setting port
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setting up routes

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/notes.html'));
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/index.html'));
  });




// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));


