const path = require('path');
const fs = require('fs');


module.exports = (app) => {
// setting up routes for HTML
let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'))

app.get('/api/notes', (req, res) => {
  console.log(notes);
  return res.json(notes);
});

app.post('/api/notes', (req, res) => {
   notes.push(req.body);
   fs.writeFileSync('./db/db.json', JSON.stringify(notes));
   res.end("Did it.")

});

};