// test if we have phone and code
module.export = function(req, res) {
  if (!req.body.phone || !req.body.code) {
    return res.status(422).send({ error: 'Please provide phone number and the code we sent you.' })
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, "");
  const code = parseInt(code); // conert string in integer
}
