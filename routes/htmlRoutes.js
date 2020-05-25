const router = require("express").Router();
var path = require("path");


module.exports = function(app) {

        router.get("/", function(req, res) {
            res.sendFile(path.join(__dirname, "../public/index.html"), {title:"Fitness Tracker"});
      });
  
         router.get("/exercise", function(req, res) {
            res.sendFile(path.join(__dirname, "../public/exercise.html"), {title:"Fitness Tracker"});
        });
  
         router.get("/stats", function(req, res) {
            res.sendFile(path.join(__dirname, "../public/stats.html"), {title:"Fitness Tracker"});
     });
    
}

module.exports = router;