const Home = require('../models/home') 
const Favourites = require('../models/favourites'); 

// hostRoute
exports.getAddHome = (req,res,next) => {
  Home.fetchAll().then(homes => {
    res.render('store/home-list',{registeredHomes: homes,pageTitle: 'Add Home to airbnb',currentPage: 'addHome'}); 
  });
}

exports.getBookings = (req,res,next) => {
  res.render('store/booking',{pageTitle: 'My Bookings',currentPage: 'booking'}); 
};

exports.addFavourite = (req, res) => { 
  const homeId = req.body.id;
  Favourites.find({homeId:homeId}).then(existingfav => {
    if(existingfav){
      return res.redirect("/favourites");
    }
    const fav = new Favourites({homeId:homeId});
    return fav.save();
  }).then(() => {
    res.redirect("/favourites");
  }).catch((err) => {
    console.log("Error while adding to Favs",err);
  })
  
}

exports.getFavoriteList = (req, res, next) => {
  Favourites.find().populate('homeId')
    .then((favourites) => {
      const favIds = favourites.map(f => f.homeId);
        res.render("store/favourite", {
          registeredHomes: favHomes,
          pageTitle: "My Favorites",
          currentPage: "favourites"
        });
    }).catch(err => {
      console.log(err);
      res.status(500).send(err.message);
  });
};

exports.deleteFavourite = (req,res,next) => {
  const id = req.params.homeId;
  Favourites.findOneAndDelete({homeId:id}).then(result => {
    console.log(result);
  }).catch(err => console.log(err)).finally(() => {
    res.redirect("/favourites");
  });
}