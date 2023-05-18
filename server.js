const express = require('express');
const cors = require('cors');
import colors from "colors";

const mongoose = require('mongoose');
const dotenv = require('dotenv')


const app = express();
dotenv.config();
//const PORT = 5000;

app.use(cors());
app.use(express.json());
console.log("user route");


// Connect to MongoDB
mongoose.connect('mongodb+srv://shahzaibshakeelcheema:aplha001@lmsschool.32o4kql.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define routes
// ...

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Example app listening on port ${process.env.NODE_ENV} http://localhost:5000`
      .yellow.bold
  )
);