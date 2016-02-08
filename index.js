const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));
app.use('/progressive-css/', require('./demos/progressive-css'));

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
