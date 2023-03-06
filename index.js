const express = require('express');
const path = require('path')
const app = express();
const logger = require('./Middleware/Logger')

// Init Middleware
//app.use(logger)

//body parser Middleware 
app.use(express.json());
app.use(express.urlencoded({extended:false}))

// set a static user 
app.use(express.static(path.join(__dirname,'Public')))


app.use('/api/memebers', require('./api/memebers'))

const port = process.env.PORT || 5000;



app.listen(port, () => console.log(`Server started on port ${port}`));