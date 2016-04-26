var assert = require('assert');
var should = require('should');
var home = require('../../src/controllers/homeController');

describe('homeController', function () {
    it('index successful', function () {
        var e = {}, m = null;
        var cb = function (err, model) {
            e = err;
            m = model;
        };
        
        var target = new home.Controller();
        target.index(null, cb);
        should.not.exist(e);
        should.exist(m);
    });
    
});