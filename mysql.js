var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'dedi',
  password : 'dedi271287',
  database : 'aurum'
});

connection.connect()

connection.query('SELECT * FROM `sdn-access` WHERE ID=1 ', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].ID)
})

connection.end()

