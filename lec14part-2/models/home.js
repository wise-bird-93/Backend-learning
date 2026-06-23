const fs = require('fs');
const path = require('path');
const routePath = require('../utils/pathUtil');

const homeDataPath = path.join(routePath, 'data', 'homes.json');

module.exports = class Home {

    constructor(houseName, description, price, location, rating, photoURL) {
        this.id = Date.now().toString();
        this.houseName = houseName;
        this.description = description;
        this.price = price;
        this.location = location;
        this.rating = rating;
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

    static saveAll(registeredHomes) {
        fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), err => console.log(err));
    }

    static delete(homeId) {
        Home.fetchAll(homes => {
            const home = homes.filter(h => h.id != homeId);
            Home.saveAll(home);
        });
    }  
}