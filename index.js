const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const db = require("./database");


const port = 4000;

// we will create these todoRoutes in the future
const postRoutes = require("./routes/Post.route");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use("/api", postRoutes);

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
