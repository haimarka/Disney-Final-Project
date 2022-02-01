const MongoDB = require("mongodb"),
    MongoClient = MongoDB.MongoClient,
    // ObjectId = MongoDB.ObjectId,
    MongoUrl = "mongodb://localhost:27017/",
    dbName = "Disney",
    collectionName = "Movies";

    const getMovies = (req, res)=>{
        MongoClient.connect(MongoUrl)
        .then(db=>{
            dbo = db.db(dbName)
            dbo.collection(collectionName).find({}).toArray()
            .then(messages=>{
                res.send(messages).status(200);
                console.log(messages);
            })
        })
        .catch(err=>{
            console.log('there is a mistake');
            throw err.response
        })
    }

    function postMovies(req, res) {
        MongoClient.connect(MongoUrl).then((db) => {
            const createMessage = req.body;
            dbo = db.db(dbName);
            dbo.collection(collectionName).insertOne(createMessage).then((newMessage) => {
                res.send(newMessage).status(201);
                console.log(newMessage);
            })
        })
            .catch((err) => {
                console.log('there is a mistake');
                throw err.response
            })
    }

    function deleteMovie(req,res){
        MongoClient.connect(MongoUrl).then((db)=>{
            const id = {_id:ObjectId(req.params.id)}; // change the id to mongo id so he cen read it
            dbo = db.db(dbName)
            dbo.collection(collectionName).deleteOne(id).then(product=>{
               return res.send(product).status(200);
            })
        })
        .catch(err=>{
            console.log('there is a mistake');
            throw err.response
        })
    }


    module.exports = {getMovies, postMovies, deleteMovie}
