const upload = (req,res) => {
  console.log('fm:'+ req.session.uploadPath)
  delete req.session.uploadPath
  res.render('form_upload',{ path: req.query.path })
}

module.exports = upload