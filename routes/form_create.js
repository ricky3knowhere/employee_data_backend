const form_create = async (req,res) => {
  const errorMessage = await req.session.errorMessage
  const oldValue = await req.session.oldValue
  const data = {
    errorMessage,
    oldValue
  }

  req.session.errorMessage = undefined
  req.session.oldValue   = undefined

  res.render('form_create',data)
}

module.exports = form_create