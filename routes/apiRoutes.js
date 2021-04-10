const path = require('path');
const fs = require('fs');


module.exports = (app) => {
// setting up routes for HTML
let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

app.get('/api/notes', (req, res) => {
  console.log(notes);
  return res.json(notes);
});

app.post('/api/notes', (req, res) => {
  let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
  const newNote = {title, text, id};
  const array = [].concat(JSON.stringify(newNote)); 
  notes.push(req.body);
   fs.writeFileSync('./db/db.json');
   res.end("Did it.")

});

};