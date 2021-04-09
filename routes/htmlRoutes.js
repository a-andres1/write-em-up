const path = require('path');
const fs = require('fs');


module.exports = (app) => {
// setting up routes for HTML
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

};



