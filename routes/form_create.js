const form_create = async (req,res) => {

  const data = req.session.data
  req.session.data = undefined
  res.render('form_create', {data})
}

module.exports = form_create