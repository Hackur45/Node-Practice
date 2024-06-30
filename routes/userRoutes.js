const bodyParser = require('body-parser');
const express = require('express')
const router = express.Router()
const {users} = require('../Models/user')
const db = require('../signup/db')

router.use(bodyParser.json());


router.post('/',async (req,res)=>{
    try{
        const data = req.body;
        const newUser = new users(data);
    
        const response = await newUser.save();
        console.log('Data saved')
        res.status(200).json(response)
    }catch(err){
        console.log('Error Occured',err);
        res.status(500).json(err);
    }
})

router.get('/',async(req,res)=>{
    try{
        const data =  await users.find()
        res.status(200).send(data)
    }catch(err){
        console.log('Data not found');
        res.status(404).send(err);
    }
})


router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType
        const response = await users.find({profession:workType})

        response.forEach(user=>{
            console.log(`Name : ${user.name} \t Profession :${user.profession}`)
        })

        for(let i=0;i<response.length;i++){
            console.log(`User ${i+1}`)
            console.log(`Name : ${response[i].name} \nProfession : ${response[i].profession}`)
        }
        res.status(200).json(response)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal server error' })
    }
})

//To uppdate data we can use PUT , to update we must know what to update and refering to what

router.put('/:id',async (req,res)=>{
    try{
        const userId = req.params.id
        const updateUserData = req.body

        const response = await users.findByIdAndUpdate(userId,updateUserData,{
            new : true,
            runValidators:true
        })

        if(!response){
            return res.status(400).json({error:`User not found`})
        }
        console.log('Data Updated')
        res.status(200).send('Data updated')
    }catch(err){
        res.send({error:`Internal error can't save data`})
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const userId = req.params.id
        const response = await users.findByIdAndDelete(userId)
        if(!response){
            return res.status(404).json({error:`Record not found`})
        }

        console.log(`data deleted`)
        res.status(200).json({message:`data deleted`});
    }catch(err){
        console.log({error:`Internal server error`})
        res.status(500).json({error:`Internal server error`})
    }
})

module.exports = router