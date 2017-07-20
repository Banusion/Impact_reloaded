let jwt    = require('jsonwebtoken'),
    config = require('config')

module.exports = function(app, passport) {

    // =====================================
    // LOGIN ===============================
    // =====================================
    // process the login form
    app.post('/login', passport.authenticate('local-login'),
      function (req, res) {
        console.log(req.user)
        res.status(200).json({token: 'JWT ' + generateToken(req.user.local),user: req.user.local.email, status: "login"});
      }
    )

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // process the signup form
    app.post('/signup', passport.authenticate('local-signup'),
        function (req, res) {
            res.status(200).json({user: req.user.local.email, status: "registred"});
        }
    );

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function (req, res) {
        res.status(200).json({user: req.user.local.email, status: "login"});
    });

    // =====================================
    // GOOGLE ROUTES =======================
    // =====================================
    // send to google to do the authentication
    // profile gets us their basic information including their name
    // email gets their emails
    app.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

    // the callback after google has authenticated the user
    app.get('/auth/google/callback', passport.authenticate('google', {
            successRedirect: '/profile',
            failureRedirect: '/'
        })
    );

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', isLoggedIn, (req, res) => {
        let user = req.user.local.email;
        req.logout();
        res.status(200).json({user: user, status: "logout"});
    });
}

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

function generateToken(user) {
  return jwt.sign(user, config.secret, {
    expiresIn: 10080 // in seconds
  });
}