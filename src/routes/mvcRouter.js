"use strict"

//class MvcRouter {
    
/**
 * MvcRouter invokes an action on a controller and waits for a response
 * @param  {object} req - http request
 * @param  {object} res - http response
 * @param  {function} next - function to call with errors
 * @param  {string} view - path to the view to render
 * @param  {object} controller - controller object to use for this route
 */
    //constructor(req, res, next, view, controller) {
    function MvcRouter(req, res, next, view, controller) {
        
        var self = this;
        self.req = req;
        self.res = res;
        self.next = next;
        self.view = view;
        self.controller = controller;
    //}
    /**
     * invokes an action on the controller
     * @param  {string} actionName - action to invoke
     */
    //beginAction (actionName){
    this.beginAction = function (actionName){
        if(self.controller[actionName]) {
            self.controller[actionName](self.req.body, self.endAction);
        } else {
            throw new Error('Invalid Operation');
        }
    }
    
    //endAction (err, model){
    /**
     * callback for when the controller is complete building the response model
     * @param  {any} err - error object, if this is present the view will not be rendered
     * @param  {any} model - model to forward to the view
     */
    this.endAction = function (err, model){
        if(err){
            self.next(err);
        } else if(model) {
            self.res.render(self.view, model);
        } else {
            throw new Error('Invalid Callback');
        }
    }
}

exports.Router = MvcRouter;