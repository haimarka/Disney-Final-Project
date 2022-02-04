const MongoDB = require("mongodb");
const MongoClient = MongoDB.MongoClient;
const ObjectId = MongoDB.ObjectId;
const MongoUrl = "mongodb://localhost:27017/";
const dbName = "Disney";
const collectionName = "Movies";

    const getMovies = (req, res)=>{
        MongoClient.connect(MongoUrl)
        .then(db=>{
            dbo = db.db(dbName)
            dbo.collection(collectionName).find({}).toArray()
            .then(movies=>{
                res.send(movies).status(200);
                // console.log(movies);
            })
        })
        .catch(err=>{
            console.log('there is a mistake');
            throw err.response
        })
    }

    function getSingleMovie(req, res) {
        MongoClient.connect(MongoUrl).then((db) => {
            const ID = req.params.id;
            dbo = db.db(dbName)
            dbo.collection(collectionName).findOne({ _id: ObjectId(ID) }).then((doc) => {
                if (doc) {
                    res.send(doc).status(200);
                }
                else {
                    res.sendStatus(404)
                }
            })
        })
            .catch((err) => {
                throw err
            })
    }

    function createMovies(req, res) {
        MongoClient.connect(MongoUrl).then((db) => {
            const createMovie = req.body;
            dbo = db.db(dbName);
            dbo.collection(collectionName).insertOne(createMovie).then((newMovie) => {
                res.send(newMovie).status(201);
                console.log(newMovie);
            })
        })
            .catch((err) => {
                console.log('there is a mistake');
                throw err.response
            })
    }

    function deleteMovie(req,res){
        MongoClient.connect(MongoUrl).then((db)=>{
            const ID = {_id:ObjectId(req.params.id)};
            dbo = db.db(dbName)
            dbo.collection(collectionName).deleteOne(ID).then(product=>{
                if(product){
                    return res.send(product).status(200);
                }
                else{
                    return res.sendStatus(404)
                }
            })
        })
        .catch(err=>{
            console.log('there is a mistake');
            throw err.response
        })
    }

    function updateSingleMovie(req, res) {
        MongoClient.connect(MongoUrl).then((db) => {
            const ID = {_id:ObjectId(req.params.id)};
            const update = req.body;
            if (update.name == undefined || update.name.length == 0) {
                return res.sendStatus(400)
            }
            dbo = db.db(dbName)
            dbo.collection(collectionName).updateOne(ID, { $set: update }).then((updateMovie) => {
                if (updateMovie.matchedCount == 1) {
                    res.send(updateMovie).status(200)
                    console.log(updateMovie);
                }
                else {
                    res.sendStatus(404)
                }
            })
        })
            .catch((err) => {
                console.log('there is a mistake');
                throw err.response
            })
    }

    // pull push

    module.exports = {getMovies, createMovies, deleteMovie, updateSingleMovie, getSingleMovie}
