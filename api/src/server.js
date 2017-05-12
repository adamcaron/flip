const express = require('express')
const app = express()
const port = process.env.PORT || 8085
const router = express.Router()
router.get('/', function(req, res) {
  res.json({ message: 'It\'s working' })
})
app.use('/api/', router)
app.listen(port)
console.log('Server running on port ' + port)
