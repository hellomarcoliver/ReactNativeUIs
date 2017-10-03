const admin = require('firebase-admin');
const twilio = require('./twilio');

module.exports = function(req, res) {
  if (!req.body.phone) {
    return res.status(422).send({ error: 'You must provide a phone number' });
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, '');

  admin.auth().getUser(phone)
    .then(userRecord => {
      const code = Math.floor((Math.random() * 8999 + 1000));

      twilio.messages.create({
        body: 'Your code is ' + code,
        to: '+' + phone,
        from: '+15005550006' // the official twilio test acc. number
      }, (err) => {
        if (err) { return res.status(422).send(err); }

        admin.database().ref('users/' + phone)
          .update({ code: code, codeValid: true }, () => {
            res.send({ success: true });
          });
      })
    })
    .catch((err) => {
      res.status(422).send({ error: err });
    });
}

// old code from MO
// const admin = require('firebase-admin');
// const twilio = require('./twilio');
//
// module.exports = function(req, res) {
//   if (!req.body.phone) {
//     return res.status(422).send({ error: 'Please provide a valid phone number.' });
//   }
//   const phone = String(req.body.phone).replace(/[^\d]/g, "");
//
//   // find a specific user that's tight to a specific number
//   // note: an asynchronys req, so need to chain on... and return a promise
//   admin.auth().getUser(phone)
//   .then(userRecord => {
//     const code = Math.floor((Math.random() * 8999 + 1000))
//
//     // text user
//     twilio.messages.create({
//       body: 'Your code is ' + code,
//       to: '+' + phone,
//       from: '15005550006'
//     }, (err) => {
//       if (err) { return res.status(422).send(err); }
//
//       // create new collection in our database with entry: phone
//       // in order to store codes and stuff
//       admin.database().ref('users/' + phone)
//       .update({ code: code, codeValid: true }, () => {
//         res.send({ success: true });
//       });
//     })
//   })
//   // in production for 'err' use: res.status(422).send({ error: 'Some text ...' })
//   // just easier to debug
//   .catch((err) => {
//     res.status(422).send({ error: err });
//   })
// }
