module.exports = {
    getAllHouses: (req, res) => {
        let db = req.app.get('db');
        db.getAllHouses()
            .then(houses => {
                res.status(200).send(houses);
                console.log(`All houses have been loaded`);
            })
            .catch(err => {
                res.status(500).send('There was an error in loading the houses', err);
                console.log(`There was an error in loading the houses: ${err}`);
            });
        },

    addHouse: (req, res) => {
        let {name, address, city, state, zipcode, img, mortgage, rent} = req.body;
        let db = req.app.get('db');
        db.addHouse([name, address, city, state, zipcode, img, mortgage, rent])
            .then(house => {
                res.status(200).send(house);
                console.log(`${name} house has been added.`);
            })
            .catch( err => {
                res.status(500).send(`There was an error in adding ${name} house: ${err}`);
                console.log(`There was an error in adding ${name} house.`);
            })
    },

    deleteHouse: (req, res) => {
        let {id} = req.params;
        let db = req.app.get('db');
        db.deleteHouse(id)
            .then(res.status(200).send(`House with id ${id} has been deleted.`))
            .catch(err => res.status(500).send(`There was an error in deleting house with id ${id}: ${err}`));
    }
}