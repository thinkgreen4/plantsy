module.exports = function (sequelize, DataTypes) {
	var Plant = sequelize.define("Plant", {

		name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				len: [1, 140]
			}
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		instructions: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				len: [1]
			}
		}
	});
	return Plant;
};