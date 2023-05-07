import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import router from './router/router';
import cors from 'cors';
import { createNewUser, signIn } from './handlers/user';
// CONSTANTS
const PORT = process.env.PORT || 8080;
// enable modules
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: '*' }));
app.use('/api', router);
// Create user
app.post('/user', createNewUser);
// Sign in
app.post('/signIn', signIn);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
