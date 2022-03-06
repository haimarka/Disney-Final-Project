const MongoDB = require("mongodb");
const MongoClient = MongoDB.MongoClient;
const ObjectId = MongoDB.ObjectId;
const MongoUrl = "mongodb://localhost:27017/";
// 'mongodb+srv://haimarka:13696377@cluster0.x00du.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const dbName = "Disney";
const collectionName = "ContactUs"; 

    const getMessages = (req, res)=>{
        MongoClient.connect(MongoUrl)
        .then(db=>{
            dbo = db.db(dbName)
            dbo.collection(collectionName).find({}).toArray()
            .then(messages=>{
                res.send(messages).status(200);
                // console.log(messages);
            })
        })
        .catch(err=>{
            console.log('there is a mistake');
            throw err.response
        })
    }

    

function createMessages(req, res) {
    MongoClient.connect(MongoUrl).then((db) => {
        const createMessage = req.body;
        dbo = db.db(dbName);
        dbo.collection(collectionName).insertOne(createMessage).then(newMessage => {
            // db.close();
            return res.send(newMessage).status(201); 
            })
        })
        .catch((err) => {
            console.log('there is a mistake');
            console.error(err);
        })
}

function deleteMessages(req,res){
    MongoClient.connect(MongoUrl).then((db)=>{
        const id = {_id:ObjectId(req.params.id)}; // change the id to mongo id so he cen read it
        dbo = db.db(dbName)
        dbo.collection(collectionName).deleteOne(id).then(message=>{
           return res.send(message).status(200);
        })
    })
    .catch(err=>{
        throw err.response
    })
} 


    module.exports = {getMessages, createMessages, deleteMessages}
