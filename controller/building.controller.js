const Building = require('../model/building.model');

exports.findAll = function (req, res) {
  Building.findAll(function (err, buildings) {
    if (err) res.send(err);
    res.send(buildings);
  });
};

exports.create = function (req, res) {
  const newBuilding = new Building(req.body);

  if (Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required fields' });
  } else {
    Building.create(newBuilding, function (err, building) {
      if (err) res.send(err);
      res.json({ error: false, message: 'Building created', data: building });
    });
  }
};

exports.findById = function (req, res) {
  Building.findById(req.params.id, function (err, building) {
    if (err) res.send(err);
    res.json(building);
  });
};

exports.update = function (req, res) {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required fields' });
  } else {
    Building.update(req.params.id, new Building(req.body), function (err, building) {
      if (err) res.send(err);
      res.json({ error: false, message: 'Building successfully updated' });
    });
  }
};

exports.delete = function (req, res) {
  Building.delete(req.params.id, function (err, building) {
    if (err) res.send(err);
    res.json({ error: false, message: 'Building successfully deleted' });
  });
};
