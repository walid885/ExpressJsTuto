const express= require('express')
const router = express.Router()
const { Router } = require('express')
const memebers = require('../Members')
const uuid = require('uuid')
// gets all memebres
router.get('/' , (req,res)=>{
    res.json(memebers)
     
    })
    
    // Getting a single Memeber : 
    router.get('/:id', (req,res)=>{
        const found = memebers.some(memeber => memeber.id === parseInt(req.params.id))
        if (found){
            res.json(memebers.filter(memeber => memeber.id === parseInt( req.params.id)))
    
        }else{
            res.status(400).json({ msg:`No members with the id ${req.params.id}`});
        }
    });
// creating a memeber 
router.post('/', (req,res)=>{
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status:'active'
    }

    if(! newMember.name || !newMember.email){
       return res.status(400).json({msg:'Please include a name and email'})
    }
    memebers.push(newMember);
    res.json(memebers)
});


// Update memeber 
router.put('/:id', (req,res)=>{
    const found = memebers.some(memeber => memeber.id === parseInt(req.params.id))
    if (found){
        const updateMember = req.body;
        memebers.forEach( memeber => {
            if(memeber.id === parseInt(req.params.id)){
                memeber.name = updateMember.name ? updateMember.name : memeber.name; 
                memeber.email = updateMember.email ? updateMember.email : memeber.email ; 
            
            res.json({msg:'Member Updated',memeber})
            
            }
        });
    }else{
        res.status(400).json({ msg:`No members with the id ${req.params.id}`});
    }
});
module.exports = router
