const route = require('express').Router()

route.get('/', (req, res) => {
    res.status(200).send('Welcome BadgesMd')
})

module.exports = route;