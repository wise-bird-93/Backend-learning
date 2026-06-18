const fs = require('fs');
const path = require('path');
const routePath = require('../utils/pathUtil');

const homeDataPath = path.join(routePath, 'data', 'homes.json');
const favouriteDataPath = path.join(routePath, 'data', 'favourites.json');

module.exports = class Home {

    constructor(houseName, price, location, rating, photoURL) {
        this.id = Date.now().toString();
        this.houseName = houseName;
        this.price = price;
        this.rating = rating;
        this.location = location;
        this.photoURL = photoURL;
    }

    save() {

        Home.fetchAll(registeredHomes => {

            registeredHomes.push(this);

            fs.writeFile(
                homeDataPath,
                JSON.stringify(registeredHomes),
                err => console.log(err)
            );

        });

    }

    static fetchAll(callback) {

        fs.readFile(homeDataPath, (err, data) => {

            if (!err)
                callback(JSON.parse(data));
            else
                callback([]);

        });

    }

    static fetchFavourites(callback) {

        fs.readFile(favouriteDataPath, (err, data) => {

            if (!err)
                callback(JSON.parse(data));
            else
                callback([]);

        });

    }

    static addFavourite(homeId, callback){

    Home.fetchAll(homes=>{
        console.log(homes);
        const home = homes.find(h=>h.id==homeId);

        Home.fetchFavourites(favourites=>{

            favourites.push(home);

            fs.writeFile(
                favouriteDataPath,
                JSON.stringify(favourites),
                err=>{

                    console.log(err);

                    callback();

                }
            );

        });

    });

}

}