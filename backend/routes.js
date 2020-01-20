const express = require('express');
const multer = require('multer');
const uploadconfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('.//controllers/SpotController');
const DashBoardController = require('./controllers/DashBoardController');

const BookingController = require('./controllers/BookingController');



const routes = express.Router();
const upload = multer(uploadconfig);

routes.post('/sessions', SessionController.store);

routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/spots', SpotController.index);

routes.get('/dashboard', DashBoardController.show);

routes.post('/spots/:id/bookings', BookingController.store);

module.exports = routes;

