const Home = require('../models/home')  

// hostRoute
exports.getAddHome = (req,res,next) => {
  Home.fetchAll(homes => {
    res.render('store/home-list',{registeredHomes: homes,pageTitle: 'Add Home to airbnb',currentPage: 'addHome'}); 
  });
}


exports.postHome = (req,res,next) => {
  console.log(req.body);
  const {houseName, description, price, location, rating, photoURL} = req.body;
  const home = new Home(houseName, description, price, location, rating, photoURL);
  home.save();

  res.render('host/homeAdded',{pageTitle: 'Home added successfully',currentPage: 'HomeAdded'});
}

//userRoute
exports.viewHomes = (req,res,next) => {
  Home.fetchAll(registeredHomes => {
    res.render('host/home',{registeredHomes: registeredHomes, pageTitle: 'airbnb home', currentPage: 'Home'});
  });
  
}

exports.getHomeDetails = (req,res,next) => {
  const homeId = req.params.homeId;

  Home.fetchAll(registeredHomes => {
    const selectedHome = registeredHomes.find(home => home.id === homeId);
    if (!selectedHome) {
      console.log("Home Not Found");
      res.redirect("/");
    }
    else {
      res.render('host/home-details',{home: selectedHome, pageTitle: selectedHome.houseName, currentPage: 'HomeDetail'});
    }
  });
}