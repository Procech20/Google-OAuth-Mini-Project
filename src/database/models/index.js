/* eslint-disable import/no-dynamic-require */
// "use strict";

import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import envsConfig from '../config/config';

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = envsConfig[env];
const db = {};

let sequelize;
if (config.url) {
	sequelize = new Sequelize(config.url, config);
} else {
	sequelize = new Sequelize(
		config.database,
		config.username,
		config.password,
		config,
	);
}

fs.readdirSync(__dirname)
	.filter(
		file =>
			file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js',
	)
	.forEach(file => {
		// eslint-disable-next-line import/no-dynamic-require
		// eslint-disable-next-line global-require
		const model = require(path.join(__dirname, file))(
			sequelize,
			Sequelize.DataTypes,
		);
		db[model.name] = model;
	});

Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
