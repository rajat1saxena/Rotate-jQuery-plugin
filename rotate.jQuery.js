(function($){
	$.fn.rotate = function(angle,axis,duration,type,delay){

		/*following two lines set rotation properties*/
		transition = "-webkit-transform "+duration+" "+type+" "+delay;
		this.css("-webkit-transition",transition);
		transition = "-moz-transform "+duration+" "+type+" "+delay;
		this.css("-moz-transition",transition);
		transition = "-o-transform "+duration+" "+type+" "+delay;
		this.css("-o-transition",transition);
		transition = "transform "+duration+" "+type+" "+delay;
		this.css("transition",transition);

		/*following lines change the axis of rotation*/
		this.css("-webkit-transform-origin",axis);
		this.css("-moz-transform-origin",axis);
		this.css("-o-transform-origin",axis);
		this.css("transform-origin",axis);

		/*basic rotation*/
		var rotangle = "rotate("+angle+"deg)";

		this.css("-webkit-transform",rotangle);
		this.css("-moz-transform",rotangle);
		this.css("-o-transform",rotangle);
		this.css("transform",rotangle);

		/*rotation ends here*/

		return this;
	}
})(jQuery);