const form_create = (req,res) => {
  const errorMessage = req.session.errorMessage
  const oldValue = req.session.oldValue
  const data = {
    errorMessage,
    oldValue
  }

  req.session.errorMessage = undefined
  req.session.oldValue   = undefined

  res.render('form_create',data)
}

module.exports = form_create