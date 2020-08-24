const upload = (req,res) => {
  res.render('form_upload',{ path: req.session.uploadPath })
  req.session.uploadPath = undefined
}

module.exports = upload