const upload = (req,res) => {
  res.render('form_upload',{ path: req.query.path })
}

module.exports = upload