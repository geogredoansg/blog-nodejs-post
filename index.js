const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const db = require("./database");

require('dotenv').config();

const port = process.env.PORT || 4000;

// we will create these todoRoutes in the future
const postRoutes = require("./routes/Post.route");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('common'));
app.use("/api", postRoutes);

// health check ALB
app.get('/health-check', (request, res) => { res.status(200).end("")})

app.listen(port, () => {
  console.log(`
  ==============================================
  =                                            =
  =               Post Module                  =                      
  =   Listening to http://localhost:${port}    =
  =                                            =
  ==============================================
`)
});
