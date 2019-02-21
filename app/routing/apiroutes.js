
var friendsData = require("../data/friends.js");
var express = require("express");


var app = express();

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
      });
    };

    app.post("/api/friends", function (req, res) {
      friendsData.push(req.body);
      //surveyData is the user that filled out the survey
     var surveyData = req.body;

    //   // compute best match from scores
      

    //   for(var i = 0; i < surveyData.scores.length; i++) {
    //     parseInt(surveyData.scores[i]);
        
    //   }

    //  var newMatchIndex = 0;
    //  var newMatchDifference = 40;

    //  for(var i = 0; i < friendsData.length; i++) {
    //    var totalDifference = 0;

    //    for(var j = 0; j < friendsData[i].scores.length; j++) {
    //      var differenceScore = Math.abs(friendsData[i].scores[j] - surveyData.scores[j]);

    //      totalDifference += differenceScore;
    //    }

    //    if(totalDifference < newMatchDifference) {
    //      newMatchIndex = i;
    //      newMatchDifference = totalDifference;
    //    }
    //  }
    // var newMatch = [];

    //  newMatch = friendsData[newMatchIndex];

    //  friendsData.push(surveyData);

     res.json(surveyData);

    });

  