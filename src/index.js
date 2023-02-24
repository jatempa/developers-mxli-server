const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const { getProfiles } = require('./controllers/profileController.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  getProfiles(req, res);
});

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
