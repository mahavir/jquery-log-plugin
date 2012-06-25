/**
 * jQuery Logger
 * Copyright 2012 Deepak Balani and Mahavir(GliderSystems@gmail.com)
 * License: http://www.opensource.org/licenses/mit-license.php
 */
(function($) {
    $.extend({
       log: function(msgOrVar) {
           if(window.console) {
               console.debug(msgOrVar);
           } else {
               alert(msgOrVar);
           }
       } 
    });
})(jQuery);