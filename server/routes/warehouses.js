const express = require("express");
const router = express.Router();
const app = express();

router.get("/", (req, res) => {
  console.log(res);
});
module.exports = router;
