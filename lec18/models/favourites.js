const mongoose = require('mongoose');

const favSchema = new mongoose.Schema({
  homeId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Home',
    required: true,
    unique: true
  }
});
    
module.exports = mongoose.model('Favourite',favSchema);

// module.exports = class Favourite {
//   constructor(homeId) {
//     this.homeId = homeId;
//   }
  
//   save() {
//     const db = getdb();
//     return db.collection('Favourite').findOne({homeId:this.homeId}).then(exist => {
//       if(!exist){
//         return db.collection('Favourite').insertOne(this);
//       }
//       return Promise.resolve();
//     })
//   }

//   static getFavourite() {
//     const db = getdb();
//     return db.collection('Favourite').find().toArray();
//   }

//   static delete(id) {
//     const db = getdb();
//     return db.collection('Favourite').deleteOne({homeId:id});
//   }
// }