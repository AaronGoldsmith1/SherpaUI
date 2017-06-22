const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs-extra');
const cors = require('cors');
const osHomedir = require('os-homedir')



app.use(cors())

app.use(express.static(path.join(__dirname, './')))

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

//add images?
app.get('/data', function(req, res) {
  console.log('get')
  res.sendFile(osHomedir() + '/Library/Application Support/Sherpa-UI/dataconfig.json')
})

app.post('/data', function(req, res) {
  console.log(req.body)
})


app.put('/data/update', function(req, res) {
  fs.readFile(osHomedir() + '/Library/Application Support/Sherpa-UI/dataconfig.json', function(err, data) {
    console.log(data)
  })

  console.log('lets update')

  res.json(res)
})


app.listen(8080, function() {
  console.log('listening on 8080');
});
