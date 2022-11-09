const validation = (msg, excuseme, req, res) => {
  (req.session.message = msg), res.redirect(excuseme);
};

//============================exports
module.exports = validation;
