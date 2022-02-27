module.exports = {
	up: (queryInterface, Sequelize) =>
		queryInterface.bulkInsert(
			'users',
			[
				{
					googleId: '117441858220452511772',
					givenName: 'Prophete',
					familyName: 'ISINGIZWE',
					email: 'isingizwepro01@gmail.com',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		),

	down: (queryInterface, Sequelize) =>
		queryInterface.bulkInsert('users', null, {}),
};
