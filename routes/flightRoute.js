const express = require("express");

const router = express.Router();
const {
  getFlights,
  addFlight,
  editFlight,
  getSingleFlight,
  deleteFlight,
} = require("../controllers/flightController");

router.get("/", getFlights);
router.post("/addFlights", addFlight);
router.post("/editFlight", editFlight);
router.get("/getSingleFlight", getSingleFlight);
router.post("/deleteFlight", deleteFlight);

module.exports = router;
