const express = require("express");
const router = express.Router();

const {
    catagories,
    getCatagory,
} = require("../controllers/catagories.controller");

router.post("/", catagories);
router.get("/", getCatagory);

module.exports = router;