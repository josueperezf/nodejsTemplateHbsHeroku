const express = require('express')
const hbs = require('hbs');
require('dotenv').config();
const app = express()
const port = process.env.PORT;

// la siguiente linea es para hacer publica la carpeta public, con ello se logra que lo que este en esa carpeta se pueda tener acceso incluso sin pasar por el router
app.use(express.static(__dirname +'/public'));
// la siguiete linea es para usar el plugin handlebars con su version hbs  'npm i hbs'
app.set('view engine', 'hbs');

// en la siguiente linea digo que usare los fragmentos de codigos para reusarlos
hbs.registerPartials(__dirname + '/views/partials/', function (err) {});

app.get('/', (req, res) => {
  //res.render('./index.html');
  // res.send('Hello World!')
  res.render('home',{nombre:'josue', titulo:'Curso de Node'});
  // res.end();
})
app.get('/generic', (req, res) => {
  res.render('generic',{nombre:'josue', titulo:'Curso de Node'});
})

app.get('/elements', (req, res) => {
  res.render('elements',{nombre:'josue', titulo:'Curso de Node'});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})