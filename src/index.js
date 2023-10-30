const express = require("express");
const app = express();
const morgan = require("morgan");
const engine = require("express-handlebars");
const path = require("path");

const db = require('./config/db/pos_phones');

db.connect();

const port = 3000;

const route = require("./routes/mainRoute");

app.use(express.static(path.join(__dirname, "public")));

//HTTP logger
app.use(morgan("combined"));

//Setup for template engine
app.engine(
  ".hbs",
  engine.engine({
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources","views"));
app.set("view options", {layout: 'noheaderfooter'})

//Route
route(app);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
