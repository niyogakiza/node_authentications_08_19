const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");

module.export = passport => {
  /** passport session setup
   * required for persistent login sessions
   * passport needs ability to serialize and unserialize users out of session
   */

  passport.serializeUser((user, done) => {
    done(null, user.uuid);
  });

  passport.deserializeUser((uuid, done) => {
    db.Accounts.findById(uuid).then(user => {
      if (user) done(null, user.get());
      done(user.errors, null);
    });
  });
};
