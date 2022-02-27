/* eslint-disable no-console */
/* eslint-disable consistent-return */
import db from '../database/models/index';

const { Profile } = db;

class ProfileController {
	static async completeProfile(req, res) {
		try {
			// console.log(req.body, '===========');
			if (!req.body)
				return res.send({
					message: 'can not create a profile of empty fields',
				});
			const profileCreated = await Profile.create(req.body);
			res.send({
				message: 'profile has been created successfully',
				data: profileCreated,
			});
		} catch (err) {
			res.send({ message: 'something went wrong', err });
			console.log(err);
		}
	}
}

export default ProfileController;
