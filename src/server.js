import express from 'express';
import body_parser from 'body-parser';
import cookie_session from 'cookie-session';
import passport from 'passport';

import auth_routes from './routes/auth-routes';
import profile_routes from './routes/profile-routes';
import './strategy/local-strategy';

const start_server = () => {
  const PORT = process.env.PORT || 4000;
  const app = express();
  app.use(body_parser.json());
  app.use(body_parser.urlencoded({ extended: true }));
  app.set('view engine', 'ejs');
  app.use(
    cookie_session({
      maxAge: process.env.max_age,
      keys: [process.env.keys]
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  app.use('/auth', auth_routes);
  app.use('/profile', profile_routes);
  app.use('/', (req, res) => {
    res.render('home', { user: req.user });
  });

  app.listen(PORT, () => console.log(`App is listening at port ${PORT}`));
};

export { start_server };
