(function($){
 
    $.fn.extend({ 
         
        leanModal: function(options) {
 
            var defaults = {
                top: 100,
                overlay: 0.5,
                closeButton: null,
                closeOnBlur: true
            }
            
            var overlay = $("<div id='lean_overlay'></div>").css({
                'position': 'fixed',
                'z-index': '100',
                'top': '0px',
                'left': '0px',
                'height': '100%',
                'width': '100%',
                'background': '#000',
                'display': 'none'
            });
            
            $("body").append(overlay);
                 
            options =  $.extend(defaults, options);
 
            return this.each(function() {
            
                var o = options;
               
                $(this).click(function(e) {
              
              	var modal_id = $(this).attr("href");

                // If there is no close button, we discard the "closeOnblur" setting,
                // or otherwise it will be impossible to close the overlay.
                if (o.closeOnBlur || !o.closeButton) {
                    overlay.click(function() { 
                         close_modal(modal_id);                    
                    });
                }
                
                $(o.closeButton).click(function() { 
                     close_modal(modal_id);                    
                });
                         	
              	var modal_height = $(modal_id).outerHeight();
        	  	var modal_width = $(modal_id).outerWidth();

        		overlay.css({ 'display' : 'block', opacity : 0 });

        		overlay.fadeTo(200,o.overlay);

        		$(modal_id).css({ 
        		
        			'display' : 'block',
        			'position' : 'absolute',
        			'opacity' : 0,
        			'z-index': 11000,
        			'left' : 50 + '%',
        			'margin-left' : -(modal_width/2) + "px",
        			'top' : o.top
        		
        		});

        		$(modal_id).fadeTo(200,1);

                e.preventDefault();
                		
              	});
             
            });

			function close_modal(modal_id){

        		overlay.fadeOut(200);

        		$(modal_id).css({ 'display' : 'none' });
			
			}
    
        }
    });
     
})(jQuery);