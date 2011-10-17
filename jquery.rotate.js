/* Author: Rajat Saxena */
/* Email: rajat.saxena.work@gmail.com */
/* License: GNU GPL v2 */

(function($){
	$.fn.rotate = function(options){

		var defaults = {
			angle: 90,
			axis: 'top left',
			duration: '500ms',
			type: 'ease-in',
			delay: '0ms'
		}
		var options = $.extend(defaults,options);

		return this.each(function(){
					
					obj = $(this);

					/*following two lines set rotation properties*/
					transition = "-webkit-transform "+options.duration+" "+options.type+" "+options.delay;
					obj.css("-webkit-transition",transition);
					transition = "-moz-transform "+options.duration+" "+options.type+" "+options.delay;
					obj.css("-moz-transition",transition);
					transition = "-o-transform "+options.duration+" "+options.type+" "+options.delay;
					obj.css("-o-transition",transition);
					transition = "transform "+options.duration+" "+options.type+" "+options.delay;
					obj.css("transition",transition);

					/*following lines change the axis of rotation*/
					obj.css("-webkit-transform-origin",options.axis);
					obj.css("-moz-transform-origin",options.axis);
					obj.css("-o-transform-origin",options.axis);
					obj.css("transform-origin",options.axis);

					/*basic rotation*/
					var rotangle = "rotate("+options.angle+"deg)";

					obj.css("-webkit-transform",rotangle);
					obj.css("-moz-transform",rotangle);
					obj.css("-o-transform",rotangle);
					obj.css("transform",rotangle);

					/*rotation ends here*/
		});

	}
})(jQuery);