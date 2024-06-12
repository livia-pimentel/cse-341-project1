const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('Project 1 - CSE 341: Web Services')
})

router.use('/users', require('./users'))
router.use('/contacts', require('./contacts'))


module.exports = router