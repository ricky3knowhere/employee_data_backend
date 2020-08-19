const by_name = (req,res) => {
  res.render(
    'user_name',
    {
      name: req.params.name
    })
}

const by_id = (req,res) => {
  res.render(
    'user_id',
    {
      name: req.paramid
    })
}

module.exports = {
  by_name
}