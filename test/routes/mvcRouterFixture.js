var assert = require('assert');
var should = require('should');
var root = require('app-root-path');
var mvc = require('../../src/routes/mvcRouter');

describe('mvcRouter', function () {
    it('beginAction null input', function () {
        
        var body = {};
        var controller = {
            cb: null,
            md: null,
            index: function (model, callback) {
                this.cb = callback;
                this.md = model;
          }  
        };
        
        var target = new mvc.Router({body: body}, null, null, null, controller);
        assert.throws(target.beginAction, /Invalid Operation/, 'junk in should equal an error out');        
    });
    it('beginAction successful', function () {
        
        var body = {};
        var controller = {
            cb: null,
            md: null,
            test: function (model, callback) {
                this.cb = callback;
                this.md = model;
          }  
        };
        
        var target = new mvc.Router({body: body}, null, null, null, controller);
        target.beginAction('test');
        
        controller.md.should.be.equal(body);
        controller.cb.should.be.equal(target.endAction);
    });
    it('endAction with error', function () {
        var err = {};
        var next = function (a) {
            err = a;
        };
        var target = new mvc.Router(null, null, next, null, null);
        var errObj = { message: 'hello' };
        target.endAction(errObj, null);
        err.should.be.equal(errObj, "next was not called or called with wrong parameters");
    });
    it('endAction with model', function () {
        var mod = {};
        var res ={ 
            view: '',
            model: {},
            render: function (v, m) {
                res.view = v;
                res.model = m;
            }
        };
        var target = new mvc.Router(null, res, null, 'testView', null);        
        target.endAction(null, mod);
        mod.should.be.equal(res.model, "renter was not called or called with wrong parameters");
        res.view.should.be.equal('testView', 'wrong view');
    });
    it('endAction with error and model', function () {
        var err = {};
        var next = function (a) {
            err = a;
        };
        var target = new mvc.Router(null, null, next, null, null);
        var errObj = { message: 'hello' };
        target.endAction(errObj, {});
        err.should.be.equal(errObj, "next was not called or called with wrong parameters");
    });
    it('endAction with no input', function () {
        var next = function (a) {
        };
        var target = new mvc.Router(null, null, next, null, null);
        assert.throws(target.endAction, /Invalid Callback/, 'I should fail.');        
    });
})