const express = require("express");
const router = express.Router();
const excelController = require("../controllers/userDetails.controller");
const upload = require("../middlewares/upload");


// router.post("/upload", upload.single("file"), excelController.upload);
router.post("/upload", upload.single("file"), excelController.upload);




module.exports = router;
