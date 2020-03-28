export default (req, res) => { setTimeout(() => {
  res.status(200).json({
    fortune: Math.floor(Math.random() * 100)
  }) 
}, 500)
}