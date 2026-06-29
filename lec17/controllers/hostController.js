const Home = require('../models/home')  

// hostRoute
exports.getAddHome = (req,res,next) => {
  Home.find().then(homes => {
    res.render('store/home-list',{registeredHomes: homes,pageTitle: 'Add Home to airbnb',currentPage: 'addHome'}); 
  });
}

exports.editHome = (req,res,next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId).then(home => {

    if(!home){
      console.log("Home Not Found");
      return res.redirect("/");
    }
    else {
      res.render('host/editHome',{home: home, pageTitle: "EditHome" ,currentPage: "EditHome"}); 
    }  
  }).catch(err => console.log(err));
  
}

exports.saveUpdatedHome = (req,res,next) => {
  const homeId = req.params.homeId;
  const {houseName, description, price, location, rating, photoURL} = req.body;

  Home.findById(homeId).then((home) => {
    home.houseName = houseName;
    home.description = description;
    home.price = price;
    home.location = location;
    home.rating = rating;
    home.photoURL = photoURL;

    home.save().then(result => {
      console.log("Home Updated", result);
      res.redirect("/");
    }).catch(err => console.log(err));
  })
}

exports.deleteHome = (req,res,next) => {
  const id = req.params.homeId;
  Home.findByIdAndDelete(id).then(() => {
    res.redirect("/");
  }).catch(err => {
    console.log(err);
    res.redirect("/");
  });
}

exports.postHome = (req,res,next) => {
  console.log(req.body);
  const {houseName, description, price, location, rating, photoURL} = req.body;

  const home = new Home({houseName, description, price, location, rating, photoURL});

  home.save().then(() => {
    console.log("Home saved Successfully");
  });

  res.render('host/homeAdded',{pageTitle: 'Home added successfully',currentPage: 'HomeAdded'});
}

//userRoute
exports.viewHomes = (req,res,next) => {
  Home.find().then(registeredHomes => {
    res.render('host/home',{registeredHomes: registeredHomes, pageTitle: 'airbnb home', currentPage: 'Home'});
  });
  
}

exports.getHomeDetails = (req,res,next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId).then(homes => {
      if (!homes) {
        console.log("Home Not Found");
        return res.redirect("/");
      }
      else {
        res.render('host/home-details',{home: homes, pageTitle: homes.houseName, currentPage: 'HomeDetail'});
      }
    }).catch(err => console.log(err));

}