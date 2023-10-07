const router = require("express").Router();
const authController = require("../controllers/auth_controller");

router.get("/whoami", authController.whoami);
router.get(
  "/myprojects",

  authController.myprojects
);

module.exports = router;
