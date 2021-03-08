const path = require('path');
const fs = require('fs');

// setting up routes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/notes.html'));
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/index.html'));
  });


//   setting up api routes