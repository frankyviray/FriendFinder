var friendsList = require("../data/friends.js")


function apiRoutes(app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.get("/api", function (req, res) {
        return res.json(friendsList)
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;


        var bestFriend;
        var highScore = 1000;

        for (let i = 0; i < friendsList.length; i++) {
            var sum = 0;
            console.log(highScore)
            for (let j = 0; j < friendsList[i].scores.length; j++) {
                var difference = Math.abs(friendsList[i].scores[j] - parseInt(newFriend.scores[j]));
                sum += difference;

            }
            if (sum < highScore) {
                highScore = sum;
                bestFriend = friendsList[i];
            }
        }

        friendsList.push(newFriend);
        res.json(bestFriend);


    });
}

module.exports = apiRoutes;