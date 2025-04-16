const db = require('./../config/config.bd');

const Building = function (building) {
  this.Building_id = building.Building_id;
  this.Address = building.Address;
  this.Number_of_apartments = building.Number_of_apartments;
  this.Construction_year = building.Construction_year;
};

Building.findAll = function (result) {
  db.query("SELECT * FROM building", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Building.findById = function (id, result) {
  db.query("SELECT * FROM building WHERE Building_id = ?", id, function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res[0]);
    }
  });
};

Building.create = function (newBuilding, result) {
  db.query("INSERT INTO building SET ?", newBuilding, function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, { Building_id: res.insertId, ...newBuilding });
    }
  });
};

Building.update = function (id, building, result) {
  db.query(
    "UPDATE building SET Address = ?, Number_of_apartments = ?, Construction_year = ? WHERE Building_id = ?",
    [building.Address, building.Number_of_apartments, building.Construction_year, id],
    function (err, res) {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Building.delete = function (id, result) {
  db.query("DELETE FROM building WHERE Building_id = ?", [id], function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = Building;