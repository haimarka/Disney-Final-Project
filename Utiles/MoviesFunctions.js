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
            console.log('U R Bad');
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
                throw err.response
            })
    }


    module.exports = {getMovies, postMovies}
