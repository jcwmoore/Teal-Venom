"use strict"
var crypto = require('crypto');

class UserController {
    /**
     * Creates a user controller that uses [passportjs]{@link http://passportjs.org/} for authentication.
     */
    constructor (passport, db) {
        this.passport = passport;
        this.db = db;
    }
    
    /**
     * this action logs a user in
     */
    login() {
    }
    
    /**
     * this action is used for setting up new users
     */
    register() {
        return {};
    }
    
    /**
     * this action saves a new user and logs them in to the site
     */
    saveRegistration(model) {
        // if(!model){
        //     throw { message: '', status: 400 } ;
        // }
        
        // if(model.pass != model.passconfirm){
        //     throw { message: 'Passwords do not match', status: 400 };
        // }
        // this.db.serialize(function () {
            
        // });
        
        // this.db.get('SELECT salt FROM users WHERE username = ?', model.user, function(err, row) {
        //     if (row){
        //         throw { message: 'User <' + model.user + '> already exists', status: 400 };
        //     } 
        // });
        // var salt = '123';            
        // var hash = this.hashPassword(model.pass, salt);
        // this.db.run('INSERT INTO users VALUES (NULL, ?, ?, ?)', model.user, hash, salt);
         return {};
    }
    
    hashPassword(password, salt) {
        var hash = crypto.createHash('sha256');
        hash.update(password);
        hash.update(salt);
        return hash.digest('hex');
    }
}
exports.Controller = UserController;