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
    index() {
        return { title: "HomeController/index" };
    }
}
exports.Controller = HomeController;