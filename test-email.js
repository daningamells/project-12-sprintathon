// test-email.js
var Email = require('keystone-email');

new Email('test-email.pug', {
  transport: 'mailgun',
}).send({}, {
  apiKey: '56fb6dbdc5c0ffa928ed7aa14bd4300b-060550c6-a9ce59bf',
  domain: 'sandbox1f7d6f200bf54993956c8f77a7ea4c02.mailgun.org',
  to: 'dan_ingamells@hotmail.co.uk',
  from: {
    name: 'Your Site',
    email: 'hello@yoursite.com',
  },
  subject: 'Your first KeystoneJS email',
}, function (err, result) {
  if (err) {
    console.error('🤕 Mailgun test failed with error:\n', err);
  } else {
    console.log('📬 Successfully sent Mailgun test with result:\n', result);
  }
});
