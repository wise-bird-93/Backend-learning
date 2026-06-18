const Home = require('../models/home')  

// hostRoute
exports.getAddHome = (req,res,next) => {
  Home.fetchAll(homes => {
    res.render('store/home-list',{registeredHomes: homes,pageTitle: 'Add Home to airbnb',currentPage: 'addHome'}); 
  });
}

exports.getBookings = (req,res,next) => {
  res.render('store/booking',{pageTitle: 'My Bookings',currentPage: 'booking'}); 
};

const favouriteHomes = [];
exports.addFavourite = (req, res) => {
  console.log("homeId:", req.body.homeId);  
  Home.addFavourite(req.body.homeId, () => {
      res.redirect("/");
    })
}
exports.getFavoriteList = (req,res,next) => {
  Home.fetchFavourites(favourites => {
    res.render('store/favourite',{registeredHomes:favourites, pageTitle: 'My Favorites',currentPage: 'favourites'}); 
  })
  
};