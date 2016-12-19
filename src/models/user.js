var sequelize = require('sequelize');
var db = new sequelize('teal.db3', null, null, { dialect: 'sqlite', storage: './teal.db3' });

var user = db.define('user', {    
    userId: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    userName: sequelize.STRING,
    password: sequelize.STRING
});

module.exports = user;