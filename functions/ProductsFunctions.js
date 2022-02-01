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
            console.log('there is a mistake');
            throw err.res
        })
    }

    function createProdactToArray(req, res) {
        MongoClient.connect(MongoUrl).then((db) => {
            // const createDoc = {
            //     "id": 0,
            //     "name": "mickey mouse0",
            //     "price": 20,
            //     "quantity": 0,
            //     "img": "https://upload.wikimedia.org/wikipedia/he/0/07/Donald_Duck1.gif",
            //     "added": false,
            //     "message": ""
            // };
            const createDoc = req.body;
            dbo = db.db(dbName)
            dbo.collection(collectionName).insertOne(createDoc).then((doc) => {
                res.send(doc).status(201);
                console.log(doc);
            })
        })
            .catch((err) => {
                console.log('there is a mistake');
                throw err
            })
    }

    function deleteProduct(req,res){
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


    module.exports = {getProductsArray, createProdactToArray, deleteProduct}
