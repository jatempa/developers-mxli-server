import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import router from './routes/router';
import cors from 'cors';
// CONSTANTS
const PORT = process.env.PORT || 8080;
// enable modules
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});