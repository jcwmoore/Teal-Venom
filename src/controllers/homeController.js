"use strict"

/**
 * The default controller
 */
class HomeController {
    
    /**
     * The default controller
     */
    constructor() {
        
    }
    /**
     * the default action for home
     */
    index(model, renderCallback) {
        setTimeout(function() {
            
            renderCallback({message: 'i r broke'}, { title: "HomeController/index" });
        }, 100);
        
    }
}
exports.Controller = HomeController;