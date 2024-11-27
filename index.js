const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/fullName', (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let fullName = firstName + ' ' + lastName;
  res.send('My Name is ' + fullName);
});

//  ->  /fullname?firstName=sandeep&lastName=Lamture

app.get('/address', (req, res) => {
  let street = req.query.street;
  let city = req.query.city;
  let state = req.query.state;
  let fullAddress = street + ', ' + city + ', ' + state;
  res.send(fullAddress);
});

// ->  /address?street=123+Main+St&city=springfield&state=IL

app.get('/total-time', (req, res) => {
  let time1 = parseFloat(req.query.time1);
  let time2 = parseFloat(req.query.time2);
  let time3 = parseFloat(req.query.time3);
  let finalTime = time1 + time2 + time3;
  res.send('Final time is ' + finalTime);
});

// ->  /total-time?time1=5&time2=10&time3=15

app.get('/interest-earned', (req, res) => {
  let principal = parseFloat(req.query.principal);
  let rate = parseFloat(req.query.rate);
  let time = parseFloat(req.query.time);
  let earnedInterest = (principal * rate * time) / 100;
  res.send('Earned interest is ' + earnedInterest);
});

// ->   /interest-earned?principal=1000&rate=5&time=2

app.get('/check-number', (req, res) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number >= 0) {
    result = 'the Number is Positive';
  } else {
    result = 'the Number is negative';
  }
  res.send(result);
});

// ->  /check-number?number=10

app.get('/check-traffic', (req, res) => {
  let likes = parseFloat(req.query.likes);
  let result;
  if (likes < 100) {
    result = 'Low';
  } else if (likes < 500) {
    result = 'Medium';
  } else {
    result = 'High';
  }
  res.send('Engagement level is ' + result);
});

//  ->  /check-traffic?likes=100

function greetMessage(username) {
  return 'Hello, ' + username;
}

app.get('/greet', (req, res) => {
  let username = req.query.username;
  res.send(greetMessage(username));
});

//  ->  /greet?username=Sandy
function checkedPass(password) {
  let result;
  if (password.length > 15) {
    result = 'Strong';
  } else {
    result = 'Weak';
  }
  return 'Password Is ' + result;
}

app.get('/check-password', (req, res) => {
  let password = req.query.password;
  let result;
  res.send(checkedPass(password));
});

// => /check-password?password=veryStrongPassword0312

function calFinalPrice(price, discount, tax) {
  let discountedPrice = price - price * (discount / 100);
  let finalPrice = discountedPrice + discountedPrice * (tax / 100);
  return finalPrice.toString();
}

app.get('/final-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);
  res.send(calFinalPrice(price, discount, tax));
});

//  ->  /final-price?price=100&discount=10&tax=5
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
