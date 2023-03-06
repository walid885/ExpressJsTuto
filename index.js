const express = require('express');
const path = require('path')
const app = express();
const logger = require('./Middleware/Logger')
const exphbs = require('express-handlebars');
const engine = require ('express-handlebars')


// Init Middleware
//app.use(logger)

// handlebars middleware
app.engine('handelbars',exphbs.engine({defaultLayout:'main'}))
app.set('view engine', 'handlebars');

//body parser Middleware 
app.use(express.json());
app.use(express.urlencoded({extended:false}))


// set a static user 
app.use(express.static(path.join(__dirname,'Public')))

//Homepage route

app.get('/', (req,res) => res.render('index'))





app.use('/api/memebers', require('./api/memebers'))

const port = process.env.PORT || 5000;



app.listen(port, () => console.log(`Server started on port ${port}`));