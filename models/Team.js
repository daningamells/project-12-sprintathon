
var keystone = require('keystone');
var Types = keystone.Field.Types;

var Team = new keystone.List('Team', {
  autokey: { path: 'slug', from: 'team1_url', unique: true },
});

Team.add({
  team1_url: { type: String, required: false},
});


Team.register();
