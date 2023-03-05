const express = require('express');
const path = require('path')
const memebers = require('./Members')
const app = express();
const logger = require('./Middleware/Logger')

// Init Middleware
app.use(logger)
// gets all memebres
app.get('/api/memebers' , (req,res)=>{
res.json(memebers)
// Getting a single Memeber : 
app.get('/api/memebers/:id', (req,res)=>{
    res.json(memebers.filter(memeber => memeber.id === parseInt( req.params.id)))
})
})
// set a static user 
app.use(express.static(path.join(__dirname,'Public')))

const port = process.env.PORT || 5000;



app.listen(port, () => console.log(`Server started on port ${port}`));