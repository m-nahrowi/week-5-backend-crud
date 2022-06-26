const { request } = require("express");
const { post } = require("../routes");

module.exports = {
    insertMovie: (id, title) => {
        
    }

    // get

    get_data: (req, res) => {
        return new Promise((resolve, reject) => {
            const { tittle = '', director = '' } = req.query;
            const sql = `SELECT * FROM movie ${tittle ? `WHERE tittle Like '%s{tittle}%'` : tittle && director ? `WHERE tittle LIKE '%s{tittle}%' AND director LIKE '${director}%'` : ''} ORDER BY relaese_date DESC`
            
            db.query(sql, (err, results) => {
                if (err) {
                    reject({message : "ada error"})
                }

                resolve ({
                    message: "get all from movies succses",
                    status: 200,
                    data: results
                })
            })
        })
    },

    // post insert
    insert_data: (req, res) => {
        return new Promise((resolve, reject) => {
            // const { tittle = '', director = '' } = req.query;
            // const sql = `SELECT * FROM movie ${tittle ? `WHERE tittle Like '%s{tittle}%'` : tittle && director ? `WHERE tittle LIKE '%s{tittle}%' AND director LIKE '${director}%'` : ''} ORDER BY relaese_date DESC`
            // var sql = "INSERT INTO movie (name, address) VALUES ('Company Inc', 'Highway 37')";
            // let id = req.body.id
            let tittle = req.body.tittle
            let cover = req.body.cover
            let relaese_date = req.body.relaese_date
            let director = req.body.director
            let description = req.body.description
            let cast = req.body.cast
            let categories = req.body.categories
            var sql =  `INSERT INTO movie(id, tittle, cover, relaese_date, director, description, casts, categories)
 VALUES (${tittle},${cover},${relaese_date},${director},${description}, ${cast}, ${categories})`
            db.query(sql, (err, results) => {
                if (err) {
                    reject({message : "ada error"})
                }

                resolve ({
                    message: "post update succses insert new data",
                    status: 200,
                    data: results
                })
            })
        })
    },

    // update

    update_data: (req, res) => {
        return new Promise((resolve, reject) => {
            const { tittle = '', director = '' } = req.query;
            const sql = `SELECT * FROM movie ${tittle ? `WHERE tittle Like '%s{tittle}%'` : tittle && director ? `WHERE tittle LIKE '%s{tittle}%' AND director LIKE '${director}%'` : ''} ORDER BY relaese_date DESC`
            
            db.query(sql, (err, results) => {
                if (err) {
                    reject({message : "ada error"})
                }

                resolve ({
                    message: "get all from movies succses",
                    status: 200,
                    data: results
                })
            })
        })
    },

    // fetch

    fetch: (req, res) => {
        return new Promise((resolve, reject) => {
            const { tittle = '', director = '' } = req.query;
            const sql = `SELECT * FROM movie ${tittle ? `WHERE tittle Like '%s{tittle}%'` : tittle && director ? `WHERE tittle LIKE '%s{tittle}%' AND director LIKE '${director}%'` : ''} ORDER BY relaese_date DESC`
            
            db.query(sql, (err, results) => {
                if (err) {
                    reject({message : "ada error"})
                }

                resolve ({
                    message: "get all from movies succses",
                    status: 200,
                    data: results
                })
            })
        })
    },

    // delete

    remove: (req, res) => {
        return new Promise((resolve, reject) => {
            const { tittle = '', director = '' } = req.query;
            const sql = `SELECT * FROM movie ${tittle ? `WHERE tittle Like '%s{tittle}%'` : tittle && director ? `WHERE tittle LIKE '%s{tittle}%' AND director LIKE '${director}%'` : ''} ORDER BY relaese_date DESC`
            
            db.query(sql, (err, results) => {
                if (err) {
                    reject({message : "ada error"})
                }

                resolve ({
                    message: "get all from movies succses",
                    status: 200,
                    data: results
                })
            })
        })
    }




}