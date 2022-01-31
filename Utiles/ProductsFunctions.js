const MongoDB = require("mongodb"),
    MongoClient = MongoDB.MongoClient,
    // ObjectId = MongoDB.ObjectId,
    MongoUrl = "mongodb://localhost:27017/",
    dbName = "Disney",
    collectionName = "Products";

    const getProductsArray = (req, res)=>{
        MongoClient.connect(MongoUrl)
        .then(db=>{
            dbo = db.db(dbName)
            dbo.collection(collectionName).find({}).toArray()
            .then(products=>{
                res.send(products).status(200);
                console.log(products);
            })
        })
        .catch(err=>{
            console.log('U R Bad');
            throw err.res
        })
    }

    function createProdactToArray(req, res) {
        MongoClient.connect(MongoUrl).then((db) => {
            const createDoc = {
                "id": 0,
                "name": "mickey mouse0",
                "price": 20,
                "quantity": 0,
                "img": "https://upload.wikimedia.org/wikipedia/he/0/07/Donald_Duck1.gif",
                "added": false,
                "message": ""
            };
            dbo = db.db(dbName)
            dbo.collection(collectionName).insertOne(createDoc).then((doc) => {
                res.send(doc).status(201);
                console.log(doc);
            })
        })
            .catch((err) => {
                throw err
            })
    }


    module.exports = {getProductsArray, createProdactToArray}
