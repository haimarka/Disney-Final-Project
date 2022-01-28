const MongoDB = require("mongodb"),
    MongoClient = MongoDB.MongoClient,
    // ObjectId = MongoDB.ObjectId,
    MongoUrl = "mongodb://localhost:27017/",
    dbName = "Disney",
    collectionName = "Products";

    const getProductsArray = ()=>{
        MongoClient.connect(MongoUrl)
        .then(db=>{
            dbo = db.db(dbName)
            dbo.collection(collectionName).find({}).toArray()
            .then(products=>{
                console.log("jj");
                res.send(products).status(200);
            })
        })
        .catch(err=>{
            console.log('hi');
            throw err.response
        })
    }


    module.exports = {getProductsArray}
