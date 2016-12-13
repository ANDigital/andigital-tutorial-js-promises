module.exports = function(playerId, teamId, done) {
    var team_id;
    var player_id;

    try {
        team_id = mongoose.Types.ObjectId(teamId);
        player_id = mongoose.Types.ObjectId(playerId);
    } catch (e) {
        return done(false);
    }

    Team.update({
            _id: team_id
        }, {
            $pull: {
                players: player_id
            }
        }, {
            upsert: false
        })
        .exec(function(err, status) {
            if (err) {
                console.log('Error: failed to remove player from room');
                return done(false);
            } else {
                return done(status);
            }
        });
};