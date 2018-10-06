const express = require('express');
const bodyparser = require('body-parser');
var assert = require('assert');
const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));
app.set('view engine','ejs');

var total = 1000;
var disabled = '';
var flag = 1;
var disabled2 = '';
var flag2 = 1;

app.get('/',(req,res) => {
  res.render('pages/index',{total:total,disabled:disabled});
});


//  SLOT 1 PROBLEM 1 LANGUAGE 1 =====>

app.get('/lang1/1',function(req, res){
  res.render('pages/lang1_1',{total:total,disabled:disabled});
});

app.post('/lang1/1',function(req,res){
  var validate = 0;
  var user_input = req.body.input;
  var li = user_input.split(' ');
  //console.log(li);
  var hour = parseInt(li[0],10);
  var inc = parseInt(li[1],10);
  console.log(hour,li.length);
  try{
    assert(hour>0 && hour<13);
    assert(li.length==2);
  }catch(e){
    validate = 1;
  }finally{
    wrong = (hour+inc)%12;
    right = (hour+inc)%12;
    if(right==0)
    {
      right=12;
    }
    console.log(right, wrong, validate);
    if(wrong==right || validate == 1){
      total = total - 10;
      res.render('pages/lang1_1',{ total:total,disabled:disabled});
    }
    else if(flag == 1){
      total = total + 100;
      flag = 0;
      disabled = 'disabled';
      res.render('pages/lang1_1',{ total:total,disabled:disabled});
      
    }
  }
});

// SLOT 1 PROBLEM 2 LANGUAGE 1 =======>

app.get('/lang1/2',function(req, res){
  res.render('pages/lang1_2',{total:total,disabled:disabled2});
});

app.post('/lang1/2',function(req,res){
  var validate = 0;
  var user_input = req.body.input;
  //console.log(li);
  var m = parseInt(user_input);
  try{
    assert(user_input.split().length==1);
    assert(m>0);
  }catch(e){
    validate = 1;
  }finally{
    if(m<=7)
    {
      if(m%3==0 || m%7==0)
      wrong="yes";
      else
      wrong="no";
    }
    else
    {
      if(m%3==0 || m%3==1 || m%3==2)
      wrong="yes";
      else
      wrong="no";
    }
    right="no";
    for(var i=0;i<=100;i+=3)
    {
      if(m-i>=0)
      {
        if((m-i)%7==0)
        {
          right="yes";
          break;
        }
      }
    }
    console.log(wrong+' '+right);
    
    if(wrong==right || validate == 1){
      total = total - 10;
      res.render('pages/lang1_2',{ total:total,disabled:disabled2});
    }
    else if(flag2 == 1){
      total = total + 100;
      flag2 = 0;
      disabled2 = 'disabled';
      res.render('pages/lang1_2',{ total:total,disabled:disabled2});
    }
  }
});

// SLOT 1 PROBLEM 1 LANGUAGE 2 ==============>

app.get('/lang2/1',function(req, res){
  res.render('pages/lang2_1',{total:total,disabled:disabled});
});

app.post('/lang2/1',function(req,res){
  var validate = 0;
  var user_input = req.body.input;
  var li = user_input.split(' ');
  //console.log(li);
  var hour = parseInt(li[0],10);
  var inc = parseInt(li[1],10);
  console.log(hour,li.length);
  try{
    assert(hour>0 && hour<13);
    assert(li.length==2);
  }catch(e){
    validate = 1;
  }finally{
    wrong = (hour+inc)%12;
    right = (hour+inc)%12;
    if(right==0)
    {
      right=12;
    }
    console.log(right, wrong, validate);
    if(wrong==right || validate == 1){
      total = total - 10;
      res.render('pages/lang2_1',{ total:total,disabled:disabled});
    }
    else if(flag == 1){
      total = total + 100;
      flag = 0;
      disabled = 'disabled';
      res.render('pages/lang2_1',{ total:total,disabled:disabled});
      
    }
  }
});

// SLOT 1 PROBLEM 2 LANGUAGE 2 ================>

app.get('/lang2/2',function(req, res){
  res.render('pages/lang2_2',{total:total,disabled:disabled2});
});

app.post('/lang2/2',function(req,res){
  var validate = 0;
  var user_input = req.body.input;
  //console.log(li);
  var m = parseInt(user_input);
  try{
    assert(user_input.split().length==1);
    assert(m>0);
  }catch(e){
    validate = 1;
  }finally{
    if(m<=7)
    {
      if(m%3==0 || m%7==0)
      wrong="yes";
      else
      wrong="no";
    }
    else
    {
      if(m%3==0 || m%3==1 || m%3==2)
      wrong="yes";
      else
      wrong="no";
    }
    right="no";
    for(var i=0;i<=100;i+=3)
    {
      if(m-i>=0)
      {
        if((m-i)%7==0)
        {
          right="yes";
          break;
        }
      }
    }
    console.log(wrong+' '+right);
    
    if(wrong==right || validate == 1){
      total = total - 10;
      res.render('pages/lang2_2',{ total:total,disabled:disabled2});
    }
    else if(flag2 == 1){
      total = total + 100;
      flag2 = 0;
      disabled2 = 'disabled';
      res.render('pages/lang2_2',{ total:total,disabled:disabled2});
    }
  }
});


// SLOT 1 PROBLEM 1 LANGUAGE 3 =======================>

app.get('/lang3/1',function(req, res){
  res.render('pages/lang3_1',{total:total,disabled:disabled});
});

app.post('/lang3/1',function(req,res){
  var validate = 0;
  var user_input = req.body.input;
  var li = user_input.split(' ');
  //console.log(li);
  var hour = parseInt(li[0],10);
  var inc = parseInt(li[1],10);
  console.log(hour,li.length);
  try{
    assert(hour>0 && hour<13);
    assert(li.length==2);
  }catch(e){
    validate = 1;
  }finally{
    wrong = (hour+inc)%12;
    right = (hour+inc)%12;
    if(right==0)
    {
      right=12;
    }
    console.log(right, wrong, validate);
    if(wrong==right || validate == 1){
      total = total - 10;
      res.render('pages/lang3_1',{ total:total,disabled:disabled});
    }
    else if(flag == 1){
      total = total + 100;
      flag = 0;
      disabled = 'disabled';
      res.render('pages/lang3_1',{ total:total,disabled:disabled});
      
    }
  }
});

// SLOT 1 PROBLEM 2 LANGUAGE 3 ====================>

app.get('/lang3/2',function(req, res){
  res.render('pages/lang3_2',{total:total,disabled:disabled2});
});

app.post('/lang3/2',function(req,res){
  var validate = 0;
  var user_input = req.body.input;
  //console.log(li);
  var m = parseInt(user_input);
  try{
    assert(user_input.split().length==1);
    assert(m>0);
  }catch(e){
    validate = 1;
  }finally{
    if(m<=7)
    {
      if(m%3==0 || m%7==0)
      wrong="yes";
      else
      wrong="no";
    }
    else
    {
      if(m%3==0 || m%3==1 || m%3==2)
      wrong="yes";
      else
      wrong="no";
    }
    right="no";
    for(var i=0;i<=100;i+=3)
    {
      if(m-i>=0)
      {
        if((m-i)%7==0)
        {
          right="yes";
          break;
        }
      }
    }
    console.log(wrong+' '+right);
    
    if(wrong==right || validate == 1){
      total = total - 10;
      res.render('pages/lang3_2',{ total:total,disabled:disabled2});
    }
    else if(flag2 == 1){
      total = total + 100;
      flag2 = 0;
      disabled2 = 'disabled';
      res.render('pages/lang3_2',{ total:total,disabled:disabled2});
    }
  }
});

var port = process.env.PORT || 3000;

app.listen(8080, () => console.log(`Express server running on port Port ENV.`));