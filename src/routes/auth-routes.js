import { Router } from 'express';
import passport from 'passport';

const router = Router();

router.post(
  '/local',
  passport.authenticate('local', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/profile');
  }
);

// router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

// router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
//   res.redirect('/profile');
// });

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
