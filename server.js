const express = require('express');
const cors = require("cors");
const app = express();
const task = require('./routes/task');
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use('/',task);
app.get('/',(req,res)=>{
    res.send('welcome');
})
    var port = process.env.PORT || 4000;

      var server = app.listen(port, function(){
        console.log('Listening on port ' + port);
      
  
    });