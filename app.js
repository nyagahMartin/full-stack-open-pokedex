/* eslint-disable no-undef */
/* eslint-disable no-console */

const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log('server running on port 5000')
})
