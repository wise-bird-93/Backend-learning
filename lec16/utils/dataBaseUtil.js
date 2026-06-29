const mongo = require("mongodb");
require('dotenv').config();

const mongoClient = mongo.MongoClient;
const mongoURL = "mongodb+srv://chatappuser:yuvi1290@cluster0.jsv13mb.mongodb.net/?appName=Cluster0";

let _db;

const mongoConnect = (callback) => {
  mongoClient.connect(process.env.mongoURL).then(client => {
    console.log(client);
    callback();
    _db = client.db("airbnb");
  }).catch(err => console.log(err));
}

const getdb = () => {
  if(!_db){
    throw new Error('Mongo not connected');
  }
  return _db;
} 

exports.getdb = getdb;
exports.mongoConnect = mongoConnect;