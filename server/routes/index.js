const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_9FH6KdFrNurBpQ2dnW84tOQv');
const mongoose = require('mongoose');
const keys = require('../../config/keys');
const url = keys.mongoUri;
const Practice = require('../models/practiceModel.js');
const Order = require('../models/orderModel');



mongoose.connect(url, {useNewUrlParser: true}, (err, db) => {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  }
  else {
    console.log('Connection established to', url);
  }
})

router.get('/', (req, res) => {
  res.send('long time no see')
});

router.get('/practice', (req, res) => {
  Practice.find({}).then(eachOne => {
    res.json(eachOne);
  })
})

router.post('/practice', (req, res) => {
  Practice.create({
    name: req.body.name,
    id: req.body.id, 
    color: req.body.color, 
    state: req.body.state
  })
  .then(pract => {
    res.json(pract)
  })
  .catch(err => {
    console.log(err.message)
  })
})

router.get('/order', (req, res) => {
  Order.find({})
  .then(eachOne => {
    res.json(eachOne)
  })
  .catch(err => {
    console.log(err.message)
  })
})



module.exports = router;