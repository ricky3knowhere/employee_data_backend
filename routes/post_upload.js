const postUpload = (req,res) => {
  const file = req.files.upload
  const urlPath = '/uploads/' + file.name

  file.mv('.' + urlPath)
  req.session.uploadPath = urlPath
  res.redirect('/upload')
}

module.exports = postUpload