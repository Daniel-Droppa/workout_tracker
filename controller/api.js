var db = require("../models");

module.exports = function(app) {
   
    app.get("/api/workouts", (req, res) => {
      db.Workout.find()
        .then(Workout => {
          res.json(Workout);
        })
        .catch(err => {
          res.json(err);
        });
    });
  
 
    app.post("/api/workouts", (req, res) => {
      db.Workout.create(req.body)
        .then(Workout => {
          res.json(Workout);
        })
        .catch(err => {
          res.json(err);
        });
    });
  
    app.put("/api/workouts/:id", (req, res) => {
      db.Workout.findByIdAndUpdate(
        req.params.id,
        { $push: { exercises: req.body } },
        { runValidator: true, new: true }
      )
        .then(results => res.json(results))
        .catch(err => {
          if (err) throw err;
        });
    });
  
    app.get("/api/workouts/range", (req, res) => {
      db.Workout.find({})
        .limit(7)
        .then(Workout => {
          res.json(Workout);
        })
        .catch(err => {
          res.json(err);
        });
    });
  
    
  };