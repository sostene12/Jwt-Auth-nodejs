const express = require("express");
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");

const app = express();

// middleware
app.use(express.static("public"));
app.use(express.json());

// view engine
app.set("view engine", "ejs");

const port = 3000;

// database connection
const dbURI =
  "mongodb+srv://sostene:CaGUc402jkLlf1LJ@cluster0.tvlir.mongodb.net/jwtAuth-node?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => {
    app.listen(port);
    console.log("app is listening on port " + port);
  })
  .catch((err) => console.log(err));

// routes
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", (req, res) => res.render("smoothies"));
app.use(authRoutes);
