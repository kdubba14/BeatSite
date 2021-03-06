const express = require('express');
const keys = require('../config/keys');
const stripe = require('stripe')(keys.secret);
const next = require('next');
const bodyParser = require('body-parser');
const axios = require('axios');


const port = process.env.PORT || 7000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()





app.prepare().then(() => {
    const server = express()

    server.set('views', __dirname + '/pages');
    server.set('view engine', 'jsx');
    server.engine('jsx', require('express-react-views').createEngine());

    server.use(bodyParser.urlencoded({extended: false}))
    server.use(bodyParser.json())


    server.get('/login/:id', (req, res) => {
      res.send('we started kinda')
    })
    
    server.get('*', (req, res) => {
      return handle(req,res)
    })

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`)
    })
  
    server.post('/api/mailer', (req, res) => {
      const outputHtml = `
        <p>You have a new contact request from your site!</p>
        <h3>Contact Details</h3>
        <ul>
          <li>Name: ${req.body.name}</li>
          <li>Email: ${req.body.email}</li>
          <li>Subject: ${req.body.subject}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
      `;

      let url = "https://api.sendinblue.com/v3/smtp/email";
      

      let mailOptions = {
        "headers": {
          "Content-Type": "application/json",
          "api-key": keys.contactKey
        }
      }

      let body = JSON.stringify({ 
        tags: [ 'test' ],
        sender: { email: keys.siteEmail },
        htmlContent: outputHtml,
        subject: 'NEW CONTACT REQUEST',
        replyTo: { 
          email: req.body.email, 
          name: req.body.name },
        to: [ { 
          email: keys.swagEmail, 
          name: 'Kyle' } ] 
      })

      axios.post(url, body, mailOptions) 
        .then(response => {
          res.send(response.data)
        })
        .catch((err) => {
          res.status(400).send(err.data)
        })
      
    })

    

    server.post('/api/order', (req, res) => {
      const amount = req.body.totPrice;
      const items = req.body.cart;
    
      const desc = items.map((item) => {
        return (` | ${item.song.title} w/ ${item.type.name} License | `)
      })
    
      stripe.customers.create({
        email: req.body.stripeToken.email, 
        source: req.body.stripeToken.id
      })
      .then((customer) => stripe.charges.create({
        amount,
        description: "Beats by Swaghetti: "+desc, 
        currency: "USD", 
        customer: customer.id, 
      }))
      .then((charge) => {res.status(200).send(charge)})
      .catch(err => {res.status(400).send(err)})

      
      
      const outputHtml = `
        <p>You have a new order on your site!</p>
        <h2>Contact & Beat Details</h3>
        <h4>Email: ${req.body.stripeToken.email}</h4>
        <h4>Beats w/ Licenses:</h4>
        <p>${desc}</p>
        </ul>
        
      `;


      let url = "https://api.sendinblue.com/v3/smtp/email";

      let mailOptions = {
        "headers": {
          "Content-Type": "application/json",
          "api-key": keys.contactKey
        }
      }

      let body = JSON.stringify({ 
        tags: [ 'test' ],
        sender: { email: keys.siteEmail },
        htmlContent: outputHtml,
        subject: 'NEW ORDER: SEND BEAT!',
        replyTo: { 
          email: req.body.stripeToken.email,  
          name: "Artist" },
        to: [ { 
          email: keys.swagEmail, 
          name: 'Trevor' }  , 
          {
            email: keys.adminEmail, 
            name: "Divici Services"
          }]
      })

      axios.post(url, body, mailOptions)
        .then(response => console.log("Reminder message sent!"))
        .catch(err => console.log(err.message))
      
      
      
      
    })
  
  })

  
  
  