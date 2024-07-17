const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// route for sign-in
app.get("/signin", (req, res) => {
  res.sendFile(path.join(__dirname, "public/layouts", "sign-in.html"));
});

// route for sign-up
app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "public/layouts", "sign-up.html"));
});

// route for learn
app.get("/learn", (req, res) => {
  res.sendFile(path.join(__dirname, "public/layouts", "learn.html"));
});

// route for dictionary
app.get("/dictionary", (req, res) => {
  res.sendFile(path.join(__dirname, "public/layouts", "dictionary.html"));
});

// route for basic
app.get("/basics", (req, res) => {
  res.sendFile(path.join(__dirname, "public/layouts", "basics.html"));
});

// route for numbers
app.get("/numbers", (req, res) => {
  res.sendFile(path.join(__dirname, "public/layouts", "numbers.html"));
});

// route for alphabets
app.get("/alphabets", (req, res) => {
  res.sendFile(path.join(__dirname, "public/layouts", "alphabets.html"));
});

// route for aboutme
app.get("/aboutme", (req, res) => {
  res.sendFile(path.join(__dirname, "public/layouts", "aboutme.html"));
});

// route for aboutus
app.get("/aboutus", (req, res) => {
  res.sendFile(path.join(__dirname, "public/layouts", "aboutus.html"));
});

// route for signofthemoment
app.get("/signofthemoment", (req, res) => {
  res.sendFile(path.join(__dirname, "public/layouts", "signofthemoment.html"));
});

// route for learnyourname
app.get("/learnyourname", (req, res) => {
  res.sendFile(path.join(__dirname, "public/layouts", "myname.html"));
});

// route for setting
app.get("/setting", (req, res) => {
  res.sendFile(path.join(__dirname, "public/layouts", "setting.html"));
});

// route for finger-spell
app.get("/fingerspell", (req, res) => {
  res.sendFile(path.join(__dirname, "public/layouts", "finger-spell.html"));
});

// route for courses
app.get("/test", (req, res) => {
  res.sendFile(path.join(__dirname, "public/layouts", "test.html"));
});

// route for basic ASL Test
app.get("/basic", (req, res) => {
  res.sendFile(path.join(__dirname, "public/layouts", "basic.html"));
});

// route for intermediate ASL Test
app.get("/intermediate", (req, res) => {
  res.sendFile(path.join(__dirname, "public/layouts", "intermediate.html"));
});

// route for advance ASL Test
app.get("/advance", (req, res) => {
  res.sendFile(path.join(__dirname, "public/layouts", "advance.html"));
});

// route for history
app.get("/history", (req, res) => {
  res.sendFile(path.join(__dirname, "public/layouts", "history.html"));
});

// route for unauthorized
app.get("/unauthorized", (req, res) => {
  res.sendFile(path.join(__dirname, "public/layouts", "401.html"));
});

// route for alreadydone
app.get("/alreadydone", (req, res) => {
  res.sendFile(path.join(__dirname, "public/layouts", "409.html"));
});

// route for certificates
app.get("/certificates", (req, res) => {
  res.sendFile(path.join(__dirname, "public/layouts", "certificates.html"));
});

// route for contentbasic
app.get("/contentbasic", (req, res) => {
  res.sendFile(path.join(__dirname, "public/layouts", "content-basic.html"));
});

// route for contentintermediate
app.get("/contentintermediate", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public/layouts", "content-intermediate.html")
  );
});

// route for contentadvance
app.get("/contentadvance", (req, res) => {
  res.sendFile(path.join(__dirname, "public/layouts", "content-advance.html"));
});

// route for DashBoard
app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "public/layouts", "/dashboard.html"));
});

// Add a catch-all route for invalid routes
app.get("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public/layouts", "404.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
