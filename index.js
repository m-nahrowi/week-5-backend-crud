const express = require('express')
var bodyParser = require('body-parser')
const movieController = require("../tikit/controller/movieController")
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: false}))
app.use("/movies", movieController)

app.get('/users', (req, res) => {
  res.send([
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
          }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
        }
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
          "street": "Douglas Extension",
          "suite": "Suite 847",
          "city": "McKenziehaven",
          "zipcode": "59590-4157",
          "geo": {
            "lat": "-68.6102",
            "lng": "-47.0653"
          }
        }
    }
  ])
})

app.post('/users', (req, res) => {

    res.send({
        message: "sukses berjalan"
    })
})


// mysql

var mysql      = require('mysql');
// const movieController = require('./controller/movieController')
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'tictikt001'
});

db.connect((err)=>{
  if(err){
    console.log(err)
  }

  console.log('DB CONNECTED')
})

app.get('/movie', (req, res)=>{
  res.status(200).send({
    message : "sukses"
  })
  db.query('SELECT * FROM movie', (err, result)=>{
    if(err){
      res.send({
        message : "ada error"
      })
    }res.status(200).send({
      message: "get all from movie succses",
      status: 200,
      data: result
    })
    })
  })

  // post

  // app.post('/movie', (req, res)=>{
  //   // res.status(200).send({
  //   //   message : "sukses"
  //   // })
  //   db.query('SELECT * FROM movie', (err, result)=>{
  //     if(err){
  //       res.send({
  //         message : "ada error"
  //       })
  //     } res.status(200).send({
  //       message: "get all from movie succses",
  //       status: 200,
  //       data: result
  //     })
  //     })
  //   })

app.listen((port), () => {
  console.log(`server ok,  listening on port ${port}`)
}) 