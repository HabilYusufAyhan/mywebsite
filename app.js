const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
//session işlemleri için gereken paket

const passport = require("passport");

//template engine ayarları
const ejs = require("ejs");

const path = require("path");

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./src/views"));

//db baglantısı

//session ve flash message

//flah mesajların middleware olarak kullanılmasını sagladık

//routerlar include edilir
const authRouter = require("./src/routers/auth_router");

//formdan gelen değerlerin okunabilmesi için
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    title: "Habil Yusuf Ayhan",
  });
});

app.use("/", authRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server ${process.env.PORT} portundan ayaklandı`);
});
