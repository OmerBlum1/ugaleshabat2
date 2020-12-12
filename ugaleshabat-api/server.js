require('./database');
const express = require('express');

const app = express()

app.get('/', (req,res)=>{
    res.send('this is working')
})

app.listen(3006, ()=> {
    console.log('app is running on port 3006')
})

/*
-->res = this is working
/register --> POST = user 
/signin --> POST = success/fail this is post and not put cuz we wan't details to be sent inside of the body
/findmatch --> PUT 
/approve volunteer --> POST
/add address --> POST
*/