const Home = require('../models/home')  

// hostRoute
exports.getAddHome = (req,res,next) => {
  Home.fetchAll(homes => {
    res.render('store/home-list',{registeredHomes: homes,pageTitle: 'Add Home to airbnb',currentPage: 'addHome'}); 
  });
}

exports.editHome = (req,res,next) => {
  const homeId = req.params.homeId;
  Home.fetchAll(registeredHomes => {
    const neededHome = registeredHomes.find(h => h.id === homeId);
    if(!neededHome){
      console.log("Home Not Found");
      res.redirect("/");
    }
    else res.render('host/editHome',{home: neededHome, pageTitle: "EditHome" ,currentPage: "EditHome"});
  });
}

exports.saveUpdatedHome = (req,res,next) => {
  const homeId = req.params.homeId;
  const {houseName, description, price, location, rating, photoURL} = req.body;
  
  Home.fetchAll(registeredHomes => {
    const index = registeredHomes.findIndex(h => h.id === homeId);

    if(index==-1) {
      return res.redirect("/");
    }
    registeredHomes[index] = {...registeredHomes[index],houseName, description, price, location, rating, photoURL};
    
    Home.saveAll(registeredHomes);
  });
  res.redirect("/");
}

exports.deleteHome = (req,res,next) => {
  const id = req.params.homeId;
  Home.delete(id);
  res.redirect("/");
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