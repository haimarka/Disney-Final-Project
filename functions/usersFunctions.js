const MongoDB = require("mongodb");
const MongoClient = MongoDB.MongoClient;
const ObjectId = MongoDB.ObjectId;
const MongoUrl = "mongodb://localhost:27017/";
const dbName = "Disney";
const collectionName = "Users"; 

    const getUsers = (req, res)=>{
        MongoClient.connect(MongoUrl)
        .then(db=>{
            dbo = db.db(dbName)
            dbo.collection(collectionName).find({}).toArray()
            .then(users=>{
                res.send(users).status(200);
                // console.log(users);
            })
        })
        .catch(err=>{
            console.log('not working');
            throw err.response
        }) 
    }

    function createUser(req, res) {
        MongoClient.connect(MongoUrl).then((db) => {
            const createUser = req.body;
            dbo = db.db(dbName);
            dbo.collection(collectionName).insertOne(createUser).then((newUser) => {
                res.send(newUser).status(201);
                // console.log(newUser);
            })
        })
            .catch((err) => {
                console.log('not working');
                throw err.response
            })
    }

    function deleteUser(req,res){
        MongoClient.connect(MongoUrl).then((db)=>{
            const ID = {_id:ObjectId(req.params.id)};
            dbo = db.db(dbName)
            dbo.collection(collectionName).deleteOne(ID).then(user=>{
                if(user){
                    return res.send(user).status(200);
                }
                else{
                    return res.sendStatus(404)
                }
            })
        })
        .catch(err=>{
            console.log('not working');
            throw err.response
        })
    }

    function updateSingleUser(req, res) {
        MongoClient.connect(MongoUrl).then((db) => { 
            const ID = {_id:ObjectId(req.params.id)};
            const update = req.body;
            // if (update.name == undefined || update.name.length == 0) {
            //     return res.sendStatus(400)
            // }  
            dbo = db.db(dbName)
            dbo.collection(collectionName).updateOne(ID, { $push: update })
            .then((updateUser) => {
                // if (updateUser.matchedCount == 1) {
                    res.send(updateUser).status(200)
                    // console.log(updateUser);
                // } 
                // else {
                //     res.sendStatus(404)
                // }
            })
        })
            .catch((err) => {
                console.log('not working');
                throw err.response
            })
    }

    const getUserCart = (req, res)=>{
        MongoClient.connect(MongoUrl)
        .then(db=>{
            dbo = db.db(dbName)
            dbo.collection(collectionName).find({}).toArray()
            .then(usersCart=>{
                res.send(usersCart).status(200);
                // console.log(usersCart);
            })
        })
        .catch(err=>{
            console.log('not working');
            throw err.response
        }) 
    }

    function getSingleUser(req, res) {
        MongoClient.connect(MongoUrl).then((db) => {
            const ID = req.params.id;
            dbo = db.db(dbName)
            dbo.collection(collectionName).findOne({ _id: ObjectId(ID) }).then((user) => {
                if (user) {
                    res.send(user).status(200);
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

    function deleteProductFromCart(req,res){
        MongoClient.connect(MongoUrl).then((db)=>{
            const ID = {_id:ObjectId(req.params.id)};
            dbo = db.db(dbName)
            dbo.collection(collectionName).deleteOne(ID).then(product=>{
               return res.send(product).status(200);
            })
        })
        .catch(err=>{
            console.log('not working');
            throw err.response
        })
    }

      function addProductToCart(req, res) {
          console.log(req.params.id);
        MongoClient.connect(MongoUrl).then((db) => {
            const ID = {email:req.params.id};
            const update = req.body;
            dbo = db.db(dbName)
            dbo.collection(collectionName).findOneAndUpdate(ID, { $push: {cart:update} })
            .then((addProduct) => {
                res.send(addProduct).status(200);
                console.log(addProduct);
            })
        })
            .catch((err) => {
                console.log('not working');
                throw err.response
            })
    }

    function removeProductFromCart(req, res) {
        MongoClient.connect(MongoUrl).then((db) => {
            const ID = {_id:ObjectId(req.params)};
            const update = req.body;
            dbo = db.db(dbName)
            dbo.collection(collectionName).findOneAndUpdate(ID, { $pull: {cart:update} })
            .then((removeProduct) => {
                res.send(removeProduct).status(200);
            })
        })
            .catch((err) => {
                console.log('not working');
                throw err.response
            })
    }

    


    module.exports = {getUsers, createUser, deleteUser, updateSingleUser,
         getUserCart, addProductToCart, deleteProductFromCart,
         getSingleUser, removeProductFromCart}