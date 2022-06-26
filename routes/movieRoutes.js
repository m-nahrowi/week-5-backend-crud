const express = require('express')
const {getAllMovies, addNewMovies, updateMovies, deleteMovies} = require('../controller/moviesController')
const movieModel = require('../model/movieModel')
const router = express.Router()

router.get('/', (req, res) => {
    let id = req.body.id
    movieModel.insertMovie(id, title, totlele)
})
router.post('/', addNewMovies)
router.patch('/:id', updateMovies)
router.delete('/:id', deleteMovies)

module.exports = router