const shell = require('shelljs');

const express = require('express');
const bodyparser = require('body-parser');
const fs = require('file-system');

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs');

var total = 1000;
var disabled = 'textarea1';
var flag = 1;
var green = "#009900";
var red = "#C00000";
var blue = "#0f0f23";

var li = [];
fs.readFile('./text/one.cpp', 'utf8', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    li = data.split('\n');
    //console.log(li);
  }
});

app.get('/', function (req, res) {
  res.render('pages/index', {
    list: li,
    total: total,
    disabled: disabled,
    bg: blue
  });
});

app.post('/', function (req, res) {
  var a = req.body.input;
  console.log(a);
  fs.writeFile('./text/sample.txt', a, function (err) {
    if (err)
      console.log(err);
    else {
      shell.exec('./text/one.out < ./text/sample.txt > ./text/routput.txt');
      shell.exec('./text/two.out < ./text/sample.txt > ./text/woutput.txt');
      var ans = shell.exec('diff ./text/routput.txt ./text/woutput.txt');
      if (ans.stdout == '') {
        total = total - 50;

        res.render('pages/index', {
          list: li,
          total: total,
          disabled: disabled,
          bg: blue
        });
      } else if (flag == 1) {
        total = total + 100;
        flag = 0;
        disabled = 'disabled';
        res.render('pages/index', {
          list: li,
          total: total,
          disabled: disabled,
          bg: green
        });
      }
    }
  });
});

app.listen(8080, () => console.log(`Express server running on port 8080`));