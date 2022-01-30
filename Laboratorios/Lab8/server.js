// Dependencias
var express = require("express");
var path = require("path");

// Express
var app = express();
var PORT = process.env.PORT || 3000;

// Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Arreglos
var tables = [
  {
    customerName: "Ro",
    phoneNumber: "5512345678",
    customerEmail: "elro@mail.com",
  },
  {
    customerName: "Juan",
    phoneNumber: "5509876543",
    customerEmail: "juan@mail.com",
  },
  {
    customerName: "Alfredo",
    phoneNumber: "5564758634",
    customerEmail: "fred@mail.com",
  },
  {
    customerName: "Luisa",
    phoneNumber: "5582034516",
    customerEmail: "luisa@mail.com",
  },
];

var waitlist = [];

// Rutas principales
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});
app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// Get Mesas
app.get("/api/tables", function (req, res) {
  return res.json(tables);
});

// Get Waitlist
app.get("/api/waitlist", function (req, res) {
  return res.json(waitlist);
});

// Post Mesas
app.post("/api/tables", function (req, res) {
  var newTable = req.body;
  console.log(tables.length);
  if (tables.length < 5) {
    tables.push(newTable);
  } else {
    waitlist.push(newTable);
  }
  res.json(newTable);
});

// Post Waitlist
app.post("/api/waitlist", function (req, res) {
  console.log("post waitlist");
});

// Clear Mesas
app.post("/api/clear", function (req, res) {
  tables = [];
  waitlist = [];
  return res.json(tables);
});

// Listen
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
