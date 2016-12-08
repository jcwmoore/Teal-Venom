"use strict"

//var baseStrategy = require('passport-local').Strategy;

var users = {
    John: { Name: 'John', Password: 'password', Id: 1 },
    Jacob: { Name: 'Jacob', Password: 'password', Id: 2 },
    Jingleheimer: { Name: 'Jingleheimer', Password: 'password', Id: 3 },
    Schmidt: { Name: 'Schmidt', Password: 'password', Id: 4 }
};


function TealStrategy(username, password, cb) {
    if(users[username] && users[username].Password == password){
        return cb(null, users[username]);
    }
    return cb(null, false);
}

function SerializeUser(user, cb){
    return cb(null, user.Id);
}

function DeserializeUser(id, cb) {
    for (var i = 0, len = users.length; i < len; i++) {
        var record = users[i];
        if(record.Id == id){
            return cb(null, record);
        }
    }
    return cb(new Error('record not found'));
}

exports.Strategy = TealStrategy;
exports.Serialize = SerializeUser;
exports.Deserialize = DeserializeUser;