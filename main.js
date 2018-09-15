const shell = require('shelljs');

const express = require('express');
const bodyparser = require('body-parser');
const fs = require('file-system');

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));
app.set('view engine','ejs');

var total = 1000;
var disabled = '';

var li = [];
fs.readFile('one.cpp','utf8',function(err,data){
  if(err){
    console.log(err);
  }
  else{
    li = data.split('\n');
    console.log(li);
  }
});

app.get('/',function(req, res){
    res.render('pages/index',{list:li,total:total,disabled:disabled});
});

app.post('/',function(req,res){
  var a = req.body.input;
  console.log(a);
  fs.writeFile('./sample.txt',a, function(err) {
    if(err)
      console.log(err);
    else{
      shell.exec('./one.out < sample.txt > routput.txt');
      shell.exec('./two.out < sample.txt > woutput.txt');
      var ans = shell.exec('diff routput.txt woutput.txt');
      if(ans.stdout == ''){
        total = total - 50;
        res.render('pages/index',{list:li,total:total,disabled:disabled});
      }
      else{
        total = total + 100;
        disabled = 'disabled';
        res.render('pages/index',{list:li,total:total,disabled:disabled});
      }
    }
  }); 
});

app.listen(8080, () => console.log(`Express server running on port 4000`));