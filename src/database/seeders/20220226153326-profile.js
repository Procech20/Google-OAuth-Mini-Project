/* eslint-disable no-unused-vars */
module.exports = {
	up: (queryInterface, Sequelize) =>
		queryInterface.bulkInsert(
			'profiles',
			[
				{
					age: 21,
					gender: 'male',
					education: 'high-school graduate',
					address: 'Kigali-Rwanda',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		),

	down: (queryInterface, Sequelize) =>
		queryInterface.bulkInsert('profiles', null, {}),
};
