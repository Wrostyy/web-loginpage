const express = require('express');
const fs = require('fs');
const { type } = require('os');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/signup', (req, res) => { 
  const { username, email, password } = req.body;
  const user = { username, email, password };
  type(user) = alfabe
  if (alfabe != str);
    console.log(err);
    elif (alfabe == str);
    console.log(err)
  fs.appendFile('deploy.json', JSON.stringify(user) + '\n', (err) => {
  });
  res.redirect('/succes.html');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});