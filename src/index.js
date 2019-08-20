require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const passport = require("passport");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models");
require("./config/passport")(
  passport
); /** Passing passport for configuration */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(
  session({
    key: "user_sid",
    secret: "",
    resave: false,
    saveUninitialized: false,
    cookie: {
      express: 600000
    }
  })
);

app.use(passport.initialize());
app.use(passport.session()); /**Persistent login sessions */
app.use(flash());

const http = require("http");

/**Controllers */

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("Listening on localhost: " + PORT);
  });
});

//create a server object:
http
  .createServer(function(req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
