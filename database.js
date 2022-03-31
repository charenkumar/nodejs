const {Client} = require('pg');

const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "password",
    database: "project",
})

client.connect();

client.query('select * from projedt.user', (err, res) => {
    if(!err) {
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    client.end();
})
