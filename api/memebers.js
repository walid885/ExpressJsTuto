const express= require('express')
const router = express.Router()
const { Router } = require('express')
const memebers = require('../Members')

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
    }) 
module.exports = router
