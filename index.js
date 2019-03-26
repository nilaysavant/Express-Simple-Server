const express = require('express')
const morgan = require('morgan')


const PORT = 8080
const app = express()

app.use(morgan('dev')) // a logger for express

app.get('/', (req, res) => {
    res.send('hello!')
})

app.listen(PORT, () => {
    console.log('Serving on port:', PORT)
})