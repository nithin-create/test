const express = require('express')
const router = express.Router()

const Alien = require('../models/al')

router.get('/', async(req,res) => {
    try{
            const all = await Alien.find()
            res.json(all)
    }catch(err){
        res.send('Error' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
            const a2 = await Alien.findById(req.params.id)
            res.json(a2)
    }catch(err){
        res.send('Error' + err)
    }
})

router.post('/', async(req,res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try{
        const a1 = await alien.save()
        res.json(a1)
    }catch(err){
        res.send('Error => ' + err)
    }
})

router.patch('/:id',async(req,res) => {
    try{
        const aa = await Alien.findById(req.params.id)
        aa.sub = req.body.sub
        const a3 = await aa.save()
        res.json(a3)
    }catch(err){
        req.send('Error')
    }
})

module.exports = router