    const db = require("../utils/dataBaseUtil");
    const {getdb} = require("../utils/dataBaseUtil");
    const {ObjectId} = require('mongodb');

    module.exports = class Home {

        constructor(houseName, description, price, location, rating, photoURL) {
            this.houseName = houseName;
            this.description = description;
            this.price = price;
            this.location = location;
            this.rating = rating;
            this.photoURL = photoURL;
        }

        save() {
            const db = getdb();
            if(this._id){
                const fields = {houseName: this.houseName,
            description: this.description,
            price: this.price,
        location : this.location,
        rating : this.rating,
        photoURL : this.photoURL,}
            return db.collection('homes').updateOne({_id: new ObjectId(this._id)}, {$set: fields});
        }
        else {
            return db.collection('homes').insertOne(this);
        }    
    }

    static fetchAll() {
        const db = getdb();
        return db.collection('homes').find().toArray();
    }

    static findById(homeId){
        const db = getdb();
        return db.collection('homes').findOne({_id:new ObjectId(homeId)});
    }

    static delete(homeId) {
        const db = getdb();
        return db.collection('homes').deleteOne({_id:new ObjectId(homeId)});
    }  

    
}