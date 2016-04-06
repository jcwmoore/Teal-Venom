var assert = require('assert');
var should = require('should');

describe('learning', function(){
    it('to write a test', function() {
        
    });
    it('some more testing', function() {
        (1).should.equal(1);
    });
    it('to break a test', function () {
        assert(1 === 'abc', 'this should fail');
    });
});