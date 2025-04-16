const db = require('../config/config.bd');

const Service = function(service) {
    this.Service_id = service.Service_id;
    this.Service_name = service.Service_name;
    this.Description = service.Description;
    this.Price = service.Price;
};

Service.findAll = function(result) {
    db.query("SELECT * FROM service", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Service.findById = function(id, result) {
    db.query("SELECT * FROM service WHERE Service_id = ?", [id], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res[0]);
        }
    });
};

Service.create = function(newService, result) {
    db.query("INSERT INTO service SET ?", newService, function(err, res) {
        if (err) {
            result(err, null);
        } else {
            result(null, { Service_id: res.insertId, ...newService });
        }
    });
};

Service.update = function(id, service, result) {
    db.query(
        "UPDATE service SET Service_name = ?, Description = ?, Price = ? WHERE Service_id = ?",
        [service.Service_name, service.Description, service.Price, id],
        function(err, res) {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        }
    );
};

Service.delete = function(id, result) {
    db.query("DELETE FROM service WHERE Service_id = ?", [id], function(err, res) {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

module.exports = Service;
