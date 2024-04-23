
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const keycloak = require('#middlewares/keycloak'); // Keycloak

const port = process.env.PORT;

// Routes
const offerRoute = require('#routes/offer.router');
const userRoute = require('#routes/user.router');



const errorHandler = (error, req, res, next) => {
  const status = error.status || 422;
  res.status(status).send(error.message);
}

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(keycloak.middleware());
app.use(cors());



app.use('/api', userRoute);
app.use('/api', offerRoute);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});