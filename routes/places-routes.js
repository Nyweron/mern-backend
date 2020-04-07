const express = require("express");
const { check } = require("express-validator");

const placesControllers = require("../controllers/places-controllers");

const router = express.Router();

router.get("/:pid", placesControllers.getPlaceById);

router.get("/user/:uid", placesControllers.getPlacesByUserId);

router.post(
  "/",
  [
    check("title").notEmpty(),
    check("descrition").isLength({ min: 5 }),
    check("address").notEmpty(),
  ],
  placesControllers.createPlace
);

router.patch("/:pid", placesControllers.updatePlaceById);

router.delete("/:pid", placesControllers.deletePlace);

module.exports = router;
