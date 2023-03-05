const express = require('express');
const path = require('path')
const memebers = require('./Members')
const moment = require('moment')
const app = express();

const logger = (req, res, next )=>  {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
}
// Init Middleware
app.use(logger)
// gets all memebres
app.get('/api/memebers' , (req,res)=>{
res.json(memebers)

})
// set a static user 
app.use(express.static(path.join(__dirname,'Public')))

const port = process.env.PORT || 5000;



app.listen(port, () => console.log(`Server started on port ${port}`));