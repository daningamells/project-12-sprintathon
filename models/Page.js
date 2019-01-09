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
  image: { type: Types.CloudinaryImage },
  content: {
    brief: { type: Types.Html, wysiwyg: true, height: 150 },
    extended: { type: Types.Html, wysiwyg: true, height: 400 },
  },
});

Page.defaultColumns = 'title, state|20%, author, publishedAt|15%';

Page.register();
