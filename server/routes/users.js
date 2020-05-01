const express = require("express");
const router = express.Router();
const usersModel = require("../models/users");
const bcrypt = require("bcrypt");

/* GET home page. */
router.get("/", function (req, res) {
  res.sendStatus(200);
});

router.get("/login", async function (req, res) {
  const resultData = await usersModel.userLogin();
  res.json(resultData).status(200);
});

router.post("/login", async function (req, res) {
  const { username, password } = req.body;

  const user = new usersModel(null, null, username, password);

  const loginResponse = await user.userLogin();
  if (!!loginResponse.isValid) {
    req.session.is_logged_in = loginResponse.isValid;
    req.session.user_id = loginResponse.id;
    req.session.name = loginResponse.username;
  res.json(loginResponse).status(200);
  } else {
    res.send('Please try again')
  }
});

router.get("/signup", async (req, res) => {
  const resultData = await usersModel.newUser();
  res.json(resultData).status(200);
});

router.post("/signup", async (req, res) => {
  const { username, email } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);


  const user = new usersModel(null, email, username, hash);
  user.newUser().then(() => {
    res.sendStatus(200);
  });
});

router.get("/logout", async (req, res) => {
  req.session.destroy();
});

module.exports = router;
