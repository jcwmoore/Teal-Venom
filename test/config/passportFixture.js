var assert = require('assert');
var should = require('should');
var teal = require('../../src/config/passport');

describe('passport', function() {
    it('bad password', function() {
        var cbCalled = false;
        var cb = function(err, user){
            cbCalled = true;
            should.equal(err, null);
            user.should.be.false();
        };
        teal.Strategy('John', 'bad', cb);
        cbCalled.should.be.true();
    });
    it('good login', function() {
        var cbCalled = false;
        var cb = function(err, user){
            cbCalled = true;
            should.equal(err, null);
            user.Id.should.be.equal(1);
        };
        teal.Strategy('John', 'password', cb);
        cbCalled.should.be.true();
    });
    it('serialize', function () {
        var cbCalled = false;
        var  user = { Id: 'abc' };        
        var cb = function (err, id) {
            cbCalled = true;
            id.should().be.equal('abc');
        }
    })
});