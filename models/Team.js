'use strict';

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TeamSchema = new mongoose.Schema({
    team1_url: {
      type: String,
    },
    team2_url: {
      type: String,
    },
    team1_raised: {
      type: String,
    },
    team2_raised: {
      type: String,
    },
    team1_name: {
      type: String,
    },
    team2_name: {
      type: String,
    },
    team1_img: {
      type: String,
    },
    team2_img: {
      type: String,
    },
});

var Team = mongoose.model('Team', TeamSchema);
module.exports = Team;
