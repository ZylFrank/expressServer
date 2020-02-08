const express = require('express');

const app = express();
app.use(require('cors')());
app.use(express.json());

app.use('/uploads', express.static(__dirname + '/uploads'))

require('./plugins/db')(app);
require('./routes/admin')(app);


app.post('/test', (req, res) => {
  console.log(req.body);
  res.send('ok');
});


app.listen('3001', () => {
  console.log('this server running on 3001 port')
})