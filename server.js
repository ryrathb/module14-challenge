const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;



const sess = {
    secret: "secret",
    cookie: {},
    resave: false,
    saveUninitialized: true
}

app.use(session(sess));

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/views/layout/main.handlebars'))
);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});