(function($){

	$.fn.roll = function(options){
		
		var defaults = {
			delay : 3000,
			speed : 800,
			offset : 500
		}

		if(typeof options === 'undefined'){
			options = {}
		}

		for(var key in defaults){
			if(typeof(options[key]) === "undefined"){
				options[key] = defaults[key];
			}
		}

		var element = this;
			element.wrap('<div class=\'roll-container\'><div class=\'roll-wrapper\'></div></div>');

		var roll_container = this.closest('.roll-container');
			roll_container.prepend('<div class=\'roll-control left\'></div><div class=\'roll-control right\'></div>');

		var roll_wrapper = this.closest('.roll-wrapper');

		var roll_controls = roll_container.find('.roll-control');

		var roll_offset;

		function getInterval(){
			return setInterval(function(){

				var start_of_scroll = 0;
				var end_of_scroll = roll_wrapper.scrollLeft() >= element[0].scrollWidth - window.innerWidth;

				roll_offset = end_of_scroll ? 0 : '+='+options.offset;
				roll_wrapper.animate({
					scrollLeft : roll_offset
				}, options.speed);

			}.bind(this), options.delay);
		}

		var roll_interval = getInterval();

		roll_controls.click(function(){

			if($(this).hasClass('disabled')){
				return;
			}

			var direction = $(this).hasClass('left') ? '-='+options.offset : '+='+options.offset;

			roll_wrapper.animate({
				scrollLeft : direction
			}, options.speed);

			clearInterval(roll_interval);
			roll_interval = getInterval();
		});
		
	};

}(jQuery));