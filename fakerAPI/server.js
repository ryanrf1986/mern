const express = require('express');
const app = express();
const { faker } = require('@faker-js/faker');
const Company = require('./Companies')
const User = require('./Users')


// MIDDLEWARE
// PARSE JSON PAYLOAD
app.use(express.json())

// PARSE PAYLOAD ON CLIENT SIDE FORMS
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('<h1>yo</h1>')
})

app.get('/api/users/new', (req,res) =>{
    console.log(`Creating new user`)
    
    res.json(new User())
    })

app.get('/api/companies/new', (req,res) =>{
    console.log(`Creating new company`)
        
    res.json(new Companies())
    })

app.get('/api/users/companies/new', (req,res) =>{
    console.log(`getting new company and user`)
            
    res.json({users: new Users(), companies: new Companies()})
    })




app.listen(5000,() => console.log('Listening on port 5000'));