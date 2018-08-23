var db = require("../models");

module.exports = function (app) {
	app.get("/admin", function (req, res) {

		db.Plant.findAll({}).then(function (plant) {
			if(plant[0]) {
				res.render("admin", { plant: plant, headPlant: plant[0].dataValues});
			} else {
				res.render("admin", { plant: plant});
			}
		});
	});

	app.get("/admin/plant/:id", function (req, res) {

		db.Plant.findAll({
			where: {
				id: parseInt(req.params.id)
			}
		}).then(function (data) {
			res.send(data[0]);
		});
	});

	app.post("/admin/plant/create", function (req, res) {
		db.Plant.create(req.body).then(function (data) {
			res.json(data);
		});
	});

	app.delete("/admin/delete/:id", function (req, res) {
		db.Plant.destroy({
			where: {
				id: parseInt(req.params.id)
			}
		});
	});

	app.put("/admin/edit/:id", function (req, res) {

		db.Plant.update(req.body, {
			where: {
				id: req.params.id
			}
		});
	});
};