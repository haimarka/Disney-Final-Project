const MongoDB = require("mongodb");
const MongoClient = MongoDB.MongoClient;
const ObjectId = MongoDB.ObjectId;
const MongoUrl = "mongodb://localhost:27017/";
const dbName = "Disney";
const collectionName = "Products";

    const getProducts = (req, res)=>{
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

    function getSingleProduct(req, res) {
        MongoClient.connect(MongoUrl).then((db) => {
            const ID = {_id:ObjectId(req.params.id)};
            dbo = db.db(dbName)
            dbo.collection(collectionName).findOne(ID).then((doc) => {
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

    function createProdacts(req, res) {
        MongoClient.connect(MongoUrl).then((db) => {
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
            const ID = {_id:ObjectId(req.params.id)};
            dbo = db.db(dbName)
            dbo.collection(collectionName).deleteOne(ID).then(product=>{
               return res.send(product).status(200);
            })
        })
        .catch(err=>{
            console.log('there is a mistake');
            throw err.response
        })
    }

    function updateSingleProduct(req, res) {
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


    module.exports = {getProducts, createProdacts, deleteProduct, getSingleProduct, updateSingleProduct}
