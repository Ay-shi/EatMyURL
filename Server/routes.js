const router = require("express").Router();
const URL_SHORTNER = require("./controller/url");

router.get("/api/testing", URL_SHORTNER.testing);

module.exports = router;
