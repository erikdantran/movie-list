var express = require('express')
var app = express();
var helpers = require('./dbHelpers.js')
var port = 3000;
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '../client/dist')))
app.use(morgan('dev'));
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.sendFile('index.html', {root: path.join(__dirname, '../client/dist')})
// })

app.get('/movies', (req, res) => {
  helpers.get()
    .then((results) => {
      res.json(results);
    })
});

app.post('/movies', (req, res) => {
  helpers.post(req.body)
    .then((results) => {
      res.send('Insert successsful')
    })
});

app.listen(port, () => {
  console.log(`listening on https/localhost:${port}`)
})
