const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const router = require('./router/routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
