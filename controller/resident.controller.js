const Resident = require('../model/resident.model');

exports.findAll = function(req, res) {
    Resident.findAll(function(err, residents) {
        if (err) res.send(err);
        res.send(residents);
    });
};

exports.create = function(req, res) {
    const newResident = new Resident(req.body);

    if (Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required fields' });
    } else {
        Resident.create(newResident, function(err, resident) {
            if (err) res.send(err);
            res.json({ error: false, message: 'Resident created', data: resident });
        });
    }
};

exports.findById = function(req, res) {
    Resident.findById(req.params.id, function(err, resident) {
        if (err) res.send(err);
        res.json(resident);
    });
};

exports.update = function(req, res) {
    if (Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required fields' });
    } else {
        Resident.update(req.params.id, new Resident(req.body), function(err, resident) {
            if (err) res.send(err);
            res.json({ error: false, message: 'Resident successfully updated' });
        });
    }
};

exports.delete = function(req, res) {
    Resident.delete(req.params.id, function(err, resident) {
        if (err) res.send(err);
        res.json({ error: false, message: 'Resident successfully deleted' });
    });
};
