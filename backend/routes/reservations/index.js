const express = require('express');
const Reservation = require('../../models/Hotel/Reservation');
const Guest = require('../../models/Hotel/Guest');
const Room = require('../../models/Hotel/Room');
const router = express.Router();

// Get all reservations
router.get('/', async (req, res) => {
  const reservations = await Reservation.find().populate('guest').populate('room');
  res.json(reservations);
});

// Create a new reservation
router.post('/', async (req, res) => {
  const reservationData = req.body;
  const guest = await Guest.findById(reservationData.guest);
  const room = await Room.findById(reservationData.room);
  const newReservation = new Reservation({ ...reservationData, guest, room });
  await newReservation.save();
  res.status(201).json(newReservation);
});

// Delete a reservation
router.delete('/:id', async (req, res) => {
  await Reservation.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
