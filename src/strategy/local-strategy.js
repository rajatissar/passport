import passport from 'passport';
import { Strategy } from 'passport-local';

import sample_data from '../sample-data';

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  done(null, 'user');
});

passport.use(
  new Strategy((username, password, done) => {
    const user = sample_data.filter(
      (user) => user.username === username && user.password === password
    );
    if (user.length) {
      done(null, { id: 1 });
    } else {
      done(null, null, false);
    }
  })
);
