const express = require("express");
const cors = require("cors");

const app = express();
const contactsRouter = require("./app/routes/contact.route");//Đăng ký route với express app  contact.route.js

app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactsRouter);//Đăng ký route với express app  contact.route.js

app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application." });
});

module.exports = app;