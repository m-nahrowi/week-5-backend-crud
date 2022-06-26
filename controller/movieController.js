const Movies =  require('../model/movieModel')

module.exports = {
    // read
    getAllMovies : async (req, res) => {
        try {
            const results = await Movies.get_data(req, res)
            res.status(200).send(results)
        } catch(error){
            res.status(500).send(error)

        }
    },

    // insert
    addNewMovie : async (req, res) => {
        try {
            const results = await Movies.insert_data(req, res)
            res.status(201).send(results)
        } catch(error){
            res.status(400).send(error)

        }
    },

    // update
    updateMovie : async (req, res) => {
        try {
            const results = await Movies.update_data(req, res)
            res.status(201).send(results)
        } catch(error){
            res.status(400).send(error)

        }
    },

    // delete
    deleteMovie : async (req, res) => {
        try {
            const results = await Movies.remove(req, res)
            res.status(201).send(results)
        } catch(error){
            res.status(400).send(error)

        }
    },


}