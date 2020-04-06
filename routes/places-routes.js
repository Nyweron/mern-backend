const express = require("express");

const placesControllers = require('../controllers/places-controllers');

const router = express.Router();

router.get("/:pid",placesControllers.getPlaceById);

router.get("/user/:uid", placesControllers.getPlaceByUserId);

router.post('/', placesControllers.createPlace);

router.patch('/:pid', placesControllers.updatePlaceById);

router.delete('/:pid', placesControllers.deletePlace);

module.exports = router;
