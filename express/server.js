const express = require('express');
const app = express();


// MIDDLEWARE
// PARSE JSON PAYLOAD
app.use(express.json())

// PARSE PAYLOAD ON CLIENT SIDE FORMS
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('<h1> yo yo</h1>')
})

app.get('/api/superheroes/:id', (req, res) =>{
    const foundHere = superheroes.filter((hero) =>
        hero.id == parseInt(req.params.id)
    )
    res.json({ data: foundHere});
});


app.post('/api/superheroes', (req,res) =>{
    res.json({msg: `Creating a Hero: ${req.body.name}`})
})
app.get('/api/superheroes/:id', (req,res) =>{
    console.log(`getting a hero ${req.params.id}`)
    
    res.json(
        {hero: superheroes[req.params.id]})
    
})

app.put('/api/superheroes/:id', (req,res) =>{
    res.json({msg: `updating a Hero: ${req.params.id}`})
})

app.delete('/api/superheroes/:id', (req,res) =>{
    res.json({msg: `deleting a Hero: ${req.params.id}`})
})

app.listen(5000,() => console.log('Listening on port 5000'));