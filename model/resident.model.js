const db = require('../config/config.bd');

const Resident = function(resident) {
    this.Resident_id = resident.Resident_id;
    this.Resident_name = resident.Resident_name;
    this.Resident_address = resident.Resident_address;
    this.Phone = resident.Phone;
    this.Email = resident.Email;
};

Resident.findAll = function(result) {
    db.query("SELECT * FROM resident", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Resident.findById = function(id, result) {
    db.query("SELECT * FROM resident WHERE Resident_id = ?", [id], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res[0]);
        }
    });
};

Resident.create = function(newResident, result) {
    db.query("INSERT INTO resident SET ?", newResident, function(err, res) {
        if (err) {
            result(err, null);
        } else {
            result(null, { Resident_id: res.insertId, ...newResident });
        }
    });
};

Resident.update = function(id, resident, result) {
    db.query(
        "UPDATE resident SET Resident_name = ?, Resident_address = ?, Phone = ?, Email = ? WHERE Resident_id = ?",
        [resident.Resident_name, resident.Resident_address, resident.Phone, resident.Email, id],
        function(err, res) {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        }
    );
};

Resident.delete = function(id, result) {
    db.query("DELETE FROM resident WHERE Resident_id = ?", [id], function(err, res) {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

module.exports = Resident;
