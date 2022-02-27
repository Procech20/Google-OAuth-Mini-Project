import express from 'express';
import { authenticate } from 'passport';
import userLogin from '../controller/user';
import { completeProfile } from '../controller/profile';
import '../middleware/auth';
import userLogin from '../controller/user';

const { getAllUsers, userGoogleLogin } = userLogin;
// const Routers = express().routes;
const app = express();
app.get('/', (req, res) => {
	res.send('<a href="/auth/google">Authenticate with google</a>');
});

app.post('/complete-profile', completeProfile);

app.get('/users', getAllUsers);
app.get(
	'/auth/google',
	authenticate('google', { scope: ['profile', 'email'] }),
);

app.get(
	'/google/callback',
	authenticate('google', {
		successRedirect: '/protected',
		failureRedirect: '/auth/failure',
	}),
);

app.get('/auth/failure', (req, res) => {
	res.send('something went wrong....');
});

app.get('/protected', userGoogleLogin);
