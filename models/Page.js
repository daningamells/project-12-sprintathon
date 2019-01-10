var keystone = require('keystone');
var Types = keystone.Field.Types;

var Page = new keystone.List('Page', {
  autokey: { path: 'slug', from: 'title', unique: true },
  map: { name: 'title' },
  defaultSort: '-createdAt'
});

Page.add({
  title: { type: String, required: true},
  state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
  header: {
    heading: { type: Types.Html, wysiwyg: true, height: 100 },
  },
  ready: {
    heading: { type: Types.Html, wysiwyg: true, height: 100 },
    description: { type: Types.Html, wysiwyg: false, height: 200 },
    runners: { type: String },
    teams: { type: String },
    raised: { type: String },
    description2: { type: Types.Html, wysiwyg: false, height: 200 }
  },
  action:{
    video1: { type: String },
    video2: { type: String },
    video3: { type: String },
    video4: { type: String },
    video5: { type: String },
    video6: { type: String },
  },
  involved:{
    header: { type: String },
    description1: { type: String },
    date: { type: Types.Html, wysiwyg: true, height: 100 },
    location: { type: Types.Html, wysiwyg: true, height: 100 },
    description2: { type: Types.Html, wysiwyg: true, height: 100 },
  },
  beat:{
    header: { type: Types.Html, wysiwyg: true, height: 100 },
  },
  who:{
    header: { type: String },
    description: { type: Types.Html, wysiwyg: false, height: 200 },
    image: { type: Types.CloudinaryImage }
  },
  where:{
    header: { type: String },

    image1: { type: Types.CloudinaryImage },
    amount1: { type: String },
    description1: { type: Types.Html, wysiwyg: false, height: 200 },

    image2: { type: Types.CloudinaryImage },
    amount2: { type: String },
    description2: { type: Types.Html, wysiwyg: false, height: 200 },

    image3: { type: Types.CloudinaryImage },
    amount3: { type: String },
    description3: { type: Types.Html, wysiwyg: false, height: 200 },


    image4: { type: Types.CloudinaryImage },
    amount4: { type: String },
    description4: { type: Types.Html, wysiwyg: false, height: 200 },

  },
  rival:{
    team1: { type: String },
    team2: { type: String },
  },
  faq:{
    question1: { type: String },
    answer1: { type: String },
    question2: { type: String },
    answer2: { type: String },
    question3: { type: String },
    answer3: { type: String },
    question4: { type: String },
    answer4: { type: String },
    question5: { type: String },
    answer5: { type: String },
  }
});

Page.defaultColumns = 'title, state|20%, author, publishedAt|15%';

Page.register();
