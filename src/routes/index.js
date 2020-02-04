const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/register', (req, res) => {
    req.flash('message', 'now you are registered');
    //req.flash('user', req.body);
    res.redirect('/profile');
});

router.get('/profile', (req, res) => {
    const message = req.flash('message')[0];
    res.render('profile', {
        message
    });
})

module.exports = router;
