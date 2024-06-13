const router = require('express').Router()

router.use('/', require('./swagger'))

router.get('/', (req, res) => {
    //#swagger.tags=['Project 1 - CSE 341: Web Services']
    res.send('Project 1 - CSE 341: Web Services')
})

router.use('/users', require('./users'))
router.use('/contacts', require('./contacts'))



module.exports = router