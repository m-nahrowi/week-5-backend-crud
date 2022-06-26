const express = require('express');
const movieModel= require('../model/movieModel');

const router = express.Router()

// router.get('/movies', (req, res) =>{
//     console.log("succses dari movies")
// })

// // movie

router.get('/', (req, res) => {
    movieModel.insert_data(req, res)
}) // read
// router.post('/movies', movieModel.insert_data) // cretae
// router.patch('/movies:id', movieController.updateMovie()) // udate
// // router.put('/movies:id')
// router.delete('/movies:id', movieController.deleteMovie())


 module.exports = router