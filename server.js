const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;


// 서버관련(DB관련) 정보들은 gitignore 처리를 해서 git에 안올라가게 하는 것이 중요!
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database 
});

connection.connect();

app.get('/api/customers', (req, res) => {
    connection.query(
      "SELECT * FROM CUSTOMER",
      (err, rows, fields) => {
        res.send(rows);
      }
    )
});

app.listen(port, () => console.log(`Listening on port ${port}`));