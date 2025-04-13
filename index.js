const express = require('express');
const bodyParser = require('body-parser');

const PORT = 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.static("."));

app.get('/', (req, res) => {
    res.status(200).json("Сервер працює");
});

const buildingRoutes = require('./router/building.routes');
app.use('/api/buildings', buildingRoutes);

app.listen(PORT, () => console.log("SERVER START!!!"));


var connection = require('./config/config.bd');