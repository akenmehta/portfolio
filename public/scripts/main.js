(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(function () {
	text();
	new WOW().init();
	smoothScroll();
	removeClass();
});

function text() {
	var text = ['user interfaces.', 'accessible websites.', 'web applications.'];
	var counter = 0;
	setInterval(change, 3000);

	function change() {
		$('h1 span').text(text[counter]);
		counter++;
		if (counter >= text.length) counter = 0;
	}
}

function smoothScroll() {
	$('a[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
}

function removeClass() {
	if ($(window).width() < 480) {
		$('.project-image, .project-text').removeClass('wow fadeInLeft fadeInRight');
		// $('.project-image, .project-text').removeClass('fadeInLeft');
		// $('.project-image, .project-text').removeClass('fadeInRight');
	}
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXZcXHNjcmlwdHNcXG1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBLEVBQUUsWUFBVztBQUNaO0FBQ0EsS0FBSSxHQUFKLEdBQVUsSUFBVjtBQUNBO0FBQ0E7QUFDQSxDQUxEOztBQVNBLFNBQVMsSUFBVCxHQUFnQjtBQUNmLEtBQUksT0FBTyxDQUFDLGtCQUFELEVBQXFCLHNCQUFyQixFQUE2QyxtQkFBN0MsQ0FBWDtBQUNBLEtBQUksVUFBVSxDQUFkO0FBQ0EsYUFBWSxNQUFaLEVBQW9CLElBQXBCOztBQUVBLFVBQVMsTUFBVCxHQUFpQjtBQUNoQixJQUFFLFNBQUYsRUFBYSxJQUFiLENBQWtCLEtBQUssT0FBTCxDQUFsQjtBQUNBO0FBQ0EsTUFBRyxXQUFXLEtBQUssTUFBbkIsRUFDQyxVQUFVLENBQVY7QUFDRDtBQUNEOztBQUVELFNBQVMsWUFBVCxHQUF3QjtBQUN2QixHQUFFLDhCQUFGLEVBQWtDLEtBQWxDLENBQXdDLFlBQVc7QUFDL0MsTUFBSSxTQUFTLFFBQVQsQ0FBa0IsT0FBbEIsQ0FBMEIsS0FBMUIsRUFBZ0MsRUFBaEMsS0FBdUMsS0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixLQUF0QixFQUE0QixFQUE1QixDQUF2QyxJQUNELFNBQVMsUUFBVCxJQUFxQixLQUFLLFFBRDdCLEVBQ3VDO0FBQ3RDLE9BQUksU0FBUyxFQUFFLEtBQUssSUFBUCxDQUFiO0FBQ0UsWUFBUyxPQUFPLE1BQVAsR0FBZ0IsTUFBaEIsR0FBeUIsRUFBRSxXQUFXLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsQ0FBaEIsQ0FBWCxHQUErQixHQUFqQyxDQUFsQztBQUNBLE9BQUksT0FBTyxNQUFYLEVBQW1CO0FBQ2pCLE1BQUUsWUFBRixFQUFnQixPQUFoQixDQUF3QjtBQUN0QixnQkFBVyxPQUFPLE1BQVAsR0FBZ0I7QUFETCxLQUF4QixFQUVHLElBRkg7QUFHQSxXQUFPLEtBQVA7QUFDRDtBQUNIO0FBQ0osRUFaRDtBQWFBOztBQUVELFNBQVMsV0FBVCxHQUF1QjtBQUN0QixLQUFJLEVBQUUsTUFBRixFQUFVLEtBQVYsS0FBb0IsR0FBeEIsRUFBNkI7QUFDekIsSUFBRSwrQkFBRixFQUFtQyxXQUFuQyxDQUErQyw0QkFBL0M7QUFDQTtBQUNBO0FBQ0g7QUFDRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcclxuJChmdW5jdGlvbigpIHtcclxuXHR0ZXh0KCk7XHRcclxuXHRuZXcgV09XKCkuaW5pdCgpO1xyXG5cdHNtb290aFNjcm9sbCgpO1xyXG5cdHJlbW92ZUNsYXNzKCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiB0ZXh0KCkge1xyXG5cdHZhciB0ZXh0ID0gWyd1c2VyIGludGVyZmFjZXMuJywgJ2FjY2Vzc2libGUgd2Vic2l0ZXMuJywgJ3dlYiBhcHBsaWNhdGlvbnMuJ107XHJcblx0dmFyIGNvdW50ZXIgPSAwO1xyXG5cdHNldEludGVydmFsKGNoYW5nZSwgMzAwMCk7XHJcblxyXG5cdGZ1bmN0aW9uIGNoYW5nZSgpe1xyXG5cdFx0JCgnaDEgc3BhbicpLnRleHQodGV4dFtjb3VudGVyXSk7XHJcblx0XHRjb3VudGVyKys7XHJcblx0XHRpZihjb3VudGVyID49IHRleHQubGVuZ3RoKVxyXG5cdFx0XHRjb3VudGVyID0gMDtcclxuXHR9XHRcdFxyXG59XHJcblxyXG5mdW5jdGlvbiBzbW9vdGhTY3JvbGwoKSB7XHJcblx0JCgnYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHQgICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCcnKSA9PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCcnKVxyXG5cdCAgICAmJiBsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lKSB7XHJcblx0ICAgIFx0dmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcclxuXHQgICAgICBcdHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsnXScpO1xyXG5cdCAgICAgIFx0aWYgKHRhcmdldC5sZW5ndGgpIHtcclxuXHQgICAgICAgIFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG5cdCAgICAgICAgICBcdHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcFxyXG5cdCAgICAgICAgXHR9LCAxMDAwKTtcclxuXHQgICAgICAgIFx0cmV0dXJuIGZhbHNlO1xyXG5cdCAgICAgIFx0fVxyXG5cdCAgICB9XHJcblx0fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKCkge1xyXG5cdGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDQ4MCkge1xyXG4gICAgXHQkKCcucHJvamVjdC1pbWFnZSwgLnByb2plY3QtdGV4dCcpLnJlbW92ZUNsYXNzKCd3b3cgZmFkZUluTGVmdCBmYWRlSW5SaWdodCcpO1xyXG4gICAgXHQvLyAkKCcucHJvamVjdC1pbWFnZSwgLnByb2plY3QtdGV4dCcpLnJlbW92ZUNsYXNzKCdmYWRlSW5MZWZ0Jyk7XHJcbiAgICBcdC8vICQoJy5wcm9qZWN0LWltYWdlLCAucHJvamVjdC10ZXh0JykucmVtb3ZlQ2xhc3MoJ2ZhZGVJblJpZ2h0Jyk7XHJcblx0fSBcclxufSJdfQ==
