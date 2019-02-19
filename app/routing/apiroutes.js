
var friendsData = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
      });
    

    app.post('/api/friends', function(req, res) {
      // Capture the user input object
      var surveyData = req.body;
      // console.log('userInput = ' + JSON.stringify(userInput));
  
      var surveyResponses = surveyData.scores;
      // console.log('userResponses = ' + userResponses);
  
      // Compute best friend match
      var matchName = '';
      var matchImage = '';
      var totalDifference = 10000; 
  
      // Examine all existing friends in the list
      for (var i = 0; i < friendArray.length; i++) {
        // console.log('friend = ' + JSON.stringify(friends[i]));
  
        // Compute differenes for each question
        var diff = 0;
        for (var j = 0; j < surveyResponses.length; j++) {
          diff += Math.abs(friendArray[i].scores[j] - surveyResponses[j]);
        }
        // console.log('diff = ' + diff);
  
        // If lowest difference, record the friend match
        if (diff < totalDifference) {
          // console.log('Closest match found = ' + diff);
          // console.log('Friend name = ' + friends[i].name);
          // console.log('Friend image = ' + friends[i].photo);
  
          totalDifference = diff;
          matchName = friendArray[i].name;
          matchImage = friendArray[i].photo;
        }
      }
  
      // Add new user
      friendArray.push(surveyData);

    });
  };
  