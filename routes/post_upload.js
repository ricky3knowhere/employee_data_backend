const qs = require('qs')

const postUpload = (req,res) => {
  const file = req.files.upload
  const urlPath = { path : './uploads/' + file.name}
  const encoded = qs.stringify(urlPath, { encode : false})

  file.mv('./' + urlPath.path)
  res.redirect('./upload?' + encoded)
}

module.exports = postUpload