const db = require("../utils/dataBaseUtil");
const {getdb} = require("../utils/dataBaseUtil");
    
module.exports = class Favourite {
  constructor(homeId) {
    this.homeId = homeId;
  }
  
  save() {
    const db = getdb();
    return db.collection('Favourite').findOne({homeId:this.homeId}).then(exist => {
      if(!exist){
        return db.collection('Favourite').insertOne(this);
      }
      return Promise.resolve();
    })
  }

  static getFavourite() {
    const db = getdb();
    return db.collection('Favourite').find().toArray();
  }

  static delete(id) {
    const db = getdb();
    return db.collection('Favourite').deleteOne({homeId:id});
  }
}