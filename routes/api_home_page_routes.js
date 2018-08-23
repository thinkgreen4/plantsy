var db = require("../models");

module.exports = function(app) {
	app.get("/", function(req, res) {
		db.Plant.findAll({}).then(function (plant) {
			if(plant[0]) {
				res.render("home", { plant: plant, headPlant: plant[0].dataValues});
			} else {
				res.render("home", { plant: plant});
			}
		});
	});
	
	app.get("/plant/:id", function(req, res) {
		var id = parseInt(req.params.id);
		var headPlant;
		db.Plant.findById(id).then(project => {
			console.log(project.dataValues);
			headPlant = project.dataValues;
		}).then(function() {
			db.Plant.findAll({}).then(function(plants) {
				res.render("home", {plant: plants, headPlant: headPlant})
			});
		});

	});
};
	