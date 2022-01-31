const MongoDB = require("mongodb"),
    MongoClient = MongoDB.MongoClient,
    // ObjectId = MongoDB.ObjectId,
    MongoUrl = "mongodb://localhost:27017/",
    dbName = "Disney",
    collectionName = "ContectUs";

    const getMessages = (req, res)=>{
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

    function postMessages(req, res) {
        MongoClient.connect(MongoUrl).then((db) => {
            const createMessage = req.body;
            dbo = db.db(dbName);
            dbo.collection(collectionName).insertOne(createMessage).then((newMessage) => {
                if (newMessage) {
                    res.send(newMessage).status(201);
                    console.log(newMessage);
                    db.close()
                }
            })
        })
            .catch((err) => {
                throw err.response
            })
    }


    module.exports = {getMessages, postMessages}
