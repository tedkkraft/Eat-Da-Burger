
let express = require("express");
let router = express.Router();
let burger = require("../models/burger.js");

// Routes
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObj = {
            burgers: data
        };
        console.log(hbsObj)
        res.render("index", hbsObj)
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var devoured = "id = " + req.params.id;
    console.log("Devoured: " + devoured);

    burger.update({
        devoured: req.body.devoured
    }, devoured, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    var devoured = "id = " + req.params.id;
  
    burger.delete(devoured, function(result) {
      if (result.affectedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;