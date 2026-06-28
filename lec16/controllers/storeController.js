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
  const fav = new Favourites(homeId);
  fav.save().then(result => {
    console.log(result);
  }).catch(err => console.log(err)).finally(() => {
    res.redirect("/favourites");
  });
}

exports.getFavoriteList = (req, res, next) => {
  Favourites.getFavourite()
    .then(favourites => {
      const favIds = favourites.map(f => f.homeId);

      return Home.fetchAll().then(homes => {
        const favHomes = homes.filter(home =>
          favIds.includes(home._id.toString())
        );

        res.render("store/favourite", {
          registeredHomes: favHomes,
          pageTitle: "My Favorites",
          currentPage: "favourites"
        });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err.message);
    });
};

exports.deleteFavourite = (req,res,next) => {
  const id = req.params.homeId;
  Favourites.delete(id).then(result => {
    console.log(result);
  }).catch(err => console.log(err)).finally(() => {
    res.redirect("/favourites");
  });
}