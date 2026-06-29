const mongoose = require("mongoose");
const favourites = require("./favourites");

const model = new mongoose.Schema({
    houseName: {type: String, required:true},
    description: String,
    price: {type: String, required:true},
    location: {type: String, required:true},
    rating: {type: Number, required:true},
    photoURL: String
})

model.pre('findOneAndDelete', async function(next) {
    const homeId = this.getQuery()._id;
    await favourites.deleteMany({homeId:homeId});
    
});

module.exports = mongoose.model('Home', model);
// module.exports = class Home {
//     constructor(houseName, description, price, location, rating, photoURL) {
//         this.houseName = houseName;
//         this.description = description;
//         this.price = price;
//         this.location = location;
//         this.rating = rating;
//         this.photoURL = photoURL;
//     }
//     save() {            
//     }
//     static fetchAll() {       
//     }
//     static findById(homeId){       
//     }
//     static delete(homeId) {
//     }  
// }