const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').create( { extname: '.hbs'});
const app = express();
const port = 3000;

//HTTP logger
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));

//Template engine
app.engine('hbs', handlebars.engine)
app.set('view engine', 'hbs');
app.set("views",path.join(__dirname, 'resources/views'));

console.log(__dirname);

app.get('/', (req, res) => {
  res.render('home');
})


app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})