import { Router } from 'express';

const router = Router();

router.get('/', auth_check, (req, res) => {
  res.render('home', { user: req.user });
});

function auth_check(req, res, next) {
  if (!req.user) {
    res.redirect('/');
  } else {
    next();
  }
}

module.exports = router;
