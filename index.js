const express = require('express');
const bodyParser = require('body-parser');
const buildingRoutes = require('./router/building.routes');
const serviceRoutes = require('./router/service.routes');
const residentRoutes = require('./router/resident.routes');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Головна сторінка з меню
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // Повертає HTML файл з меню
});

app.use('/api/buildings', buildingRoutes);

app.use('/api/services', serviceRoutes);

app.use('/api/residents', residentRoutes);

app.listen(PORT, () => {
  console.log("SERVER START!!!");
});
