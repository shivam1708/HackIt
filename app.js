const express = require('express');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));
app.set('view engine','ejs');

var total = 1000;
var disabled = '';
var flag = 1;

var li = ['code here'];

app.get('/',function(req, res){
    res.render('pages/index',{list:li,total:total,disabled:disabled});
});

app.post('/',function(req,res){
  var b = req.body.input;
  console.log(a);
  var a = parseInt(b,10);

  wrong = a*a*a;
  right = Math.abs(a*a*a);

  if(wrong==right){
    total = total - 50;
    res.render('pages/index',{list:li,total:total,disabled:disabled});
  }
  else if(flag == 1){
    total = total + 100;
    flag = 0;
    disabled = 'disabled';
    res.render('pages/index',{list:li,total:total,disabled:disabled});
  }
});

var port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Express server running on port Port ENV.`));