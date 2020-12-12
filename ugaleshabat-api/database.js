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
    console.log('matching table', data);
});
