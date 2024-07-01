const express = require('express')
const app = new express();
app.use(express.json())


app.get('/',(req,res)=>{
    res.send("Hello this is the new root port!");
})

app.listen(3000,()=>{
    console.log("App is listining to port 3000");
})

app.post('/items',(req,res)=>{
    const data = req.body;

    if(data.name && data.age){
        const name = data.name
        const age = data.age
        res.send(`Username : ${name} \n Age : ${age}`)
    }else{
        res.send("Data was not properly sent")
    }

})