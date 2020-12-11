const express = require('express');
const knex = require('knex')

const db = knex({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'log in account sql 73',
      database : 'ugaleshabat'
    }
  });

db.select('*').from('matching').then(data => {
    console.log(data);
});

const app = express()

app.get('/', (req,res)=>{
    res.send('this is working')
})

app.listen(3000, ()=> {
    console.log('app is running on port 3000')
})

/*
-->res = this is working
/register --> POST = user 
/signin --> POST = success/fail this is post and not put cuz we wan't details to be sent inside of the body
/findmatch --> PUT 
/approve volunteer --> POST
/add address --> POST
*/