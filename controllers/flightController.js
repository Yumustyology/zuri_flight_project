const { flights } = require("../models/Flight");

// get flights
const getFlights = (req, res) => {
  res.status(200).send({
    flights: flights,
  });
};

// add flights
const addFlight = (req, res) => {
  flights.unshift({
    title: req.body.title,
    time: req.body.time,
    price: req.body.price,
    date: req.body.date,
  });

  res.send({
    added: req.body,
  });
};

// edit flight
// do this using params called id, please input the params in an end user understandable format, 1,2,3,4 
// NOTE please do not start id params from 0

const editFlight = (req, res) => {
  flights[req.query.id - 1] = {
    title: req.body.title,
    time: req.body.time,
    price: req.body.price,
    date: req.body.date,
  };
  res.send({ edited_flight: flights[req.query.id - 1] });
};

// get single flight
// do this using params called id, please input the params in an end user understandable format, 1,2,3,4 
// NOTE please do not start id params from 0

const getSingleFlight = (req, res) => {
  res.send({ flight: flights[req.query.id - 1] });
  console.log(req.query.id);
  console.log(flights[req.query.id - 1] );
};

//   delete flight
// do this using params called id, please input the params in an end user understandable format, 1,2,3,4 
// NOTE please do not start id params from 0
const deleteFlight = (req, res) => {
  let index = req.query.id - 1;
  res.send({ edited_flight: flights[index] });
  flights.splice(index, index);
};

module.exports = {
  getFlights,
  addFlight,
  editFlight,
  getSingleFlight,
  deleteFlight,
};
