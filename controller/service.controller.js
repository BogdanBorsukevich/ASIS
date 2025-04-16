const Service = require('../model/service.model');

exports.findAll = function(req, res) {
    Service.findAll(function(err, services) {
        if (err) res.send(err);
        res.send(services);
    });
};

exports.create = function(req, res) {
    const newService = new Service(req.body);

    if (Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required fields' });
    } else {
        Service.create(newService, function(err, service) {
            if (err) res.send(err);
            res.json({ error: false, message: 'Service created', data: service });
        });
    }
};

exports.findById = function(req, res) {
    Service.findById(req.params.id, function(err, service) {
        if (err) res.send(err);
        res.json(service);
    });
};

exports.update = function(req, res) {
    if (Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required fields' });
    } else {
        Service.update(req.params.id, new Service(req.body), function(err, service) {
            if (err) res.send(err);
            res.json({ error: false, message: 'Service successfully updated' });
        });
    }
};

exports.delete = function(req, res) {
    Service.delete(req.params.id, function(err, service) {
        if (err) res.send(err);
        res.json({ error: false, message: 'Service successfully deleted' });
    });
};
