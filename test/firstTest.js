var assert = require('assert');
var should = require('should');
var root = require('app-root-path');
var target = require(root + '/src/controllers/homeController');

describe('learning', function(){
    it('to write a test', function() {
        
    });
    it('some more testing', function() {
        (1).should.equal(1);
    });
    // it('to break a test', function () {
    //     assert(1 === 'abc', 'this should fail');
    // });
});

describe('homeController', function () {
    it('index successful', function () {
        var c = new target.Controller();
        var result = c.index();        
        result.should.have.property('title', 'HomeController/index');
    })
})