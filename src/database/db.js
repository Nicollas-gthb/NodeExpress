const mysql = require('mysql2');

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'c@tolic@',
  database: 'nodenickdb',
  port: '3306'
});

db.connect(err => {
    if (err) throw err;
    console.log(" [success] Conectado no banco");
});


module.exports = db