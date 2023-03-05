const express = require('express');
const path = require('path')

const memebres = [
    {
        id:1,
        name:'John Doe',
        email:'John@gmail.com',
        status:'active'

    },
    {
        id:2,
        name:'John2Doe',
        email:'John2@gmail.com',
        status:'active'

    },
    {
        id:3,
        name:'John3Doe',
        email:'John3@gmail.com',
        status:'active'

    },
    {
        id:4,
        name:'John4Doe',
        email:'John4@gmail.com',
        status:'active'

    },
    {
        id:5,
        name:'John5Doe',
        email:'John5@gmail.com',
        status:'active'

    },
    

]
const app = express();
// gets all memebres
app.get('/api/memebers' , (req,res)=>{
res.json(memebres)

})
// set a static user 
app.use(express.static(path.join(__dirname,'Public')))

const port = process.env.PORT || 5000;



app.listen(port, () => console.log(`Server started on port ${port}`));