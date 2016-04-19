"use strict"

class UserController {
    /**
     * Creates a user controller that uses [passportjs]{@link http://passportjs.org/} for authentication.
     */
    constructor (passport) {
        this.passport = passport;
    }
    
    /**
     * the default action for user
     */
    index() {
        return { title: "UserController/index" };
    }
    
    login() {
        this.passport.authenticate('local',
            function(req, res) {
                res.redirect('/user/' + req.user.username);
            });
    }
}
exports.Controller = UserController;