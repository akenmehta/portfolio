(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(function () {
	text();
	new WOW().init();

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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXZcXHNjcmlwdHNcXG1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBLEVBQUUsWUFBVztBQUNaO0FBQ0EsS0FBSSxHQUFKLEdBQVUsSUFBVjs7QUFFQSxHQUFFLDhCQUFGLEVBQWtDLEtBQWxDLENBQXdDLFlBQVc7QUFDL0MsTUFBSSxTQUFTLFFBQVQsQ0FBa0IsT0FBbEIsQ0FBMEIsS0FBMUIsRUFBZ0MsRUFBaEMsS0FBdUMsS0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixLQUF0QixFQUE0QixFQUE1QixDQUF2QyxJQUNELFNBQVMsUUFBVCxJQUFxQixLQUFLLFFBRDdCLEVBQ3VDO0FBQ3JDLE9BQUksU0FBUyxFQUFFLEtBQUssSUFBUCxDQUFiO0FBQ0EsWUFBUyxPQUFPLE1BQVAsR0FBZ0IsTUFBaEIsR0FBeUIsRUFBRSxXQUFXLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsQ0FBaEIsQ0FBWCxHQUErQixHQUFqQyxDQUFsQztBQUNBLE9BQUksT0FBTyxNQUFYLEVBQW1CO0FBQ2pCLE1BQUUsWUFBRixFQUFnQixPQUFoQixDQUF3QjtBQUN0QixnQkFBVyxPQUFPLE1BQVAsR0FBZ0I7QUFETCxLQUF4QixFQUVHLElBRkg7QUFHQSxXQUFPLEtBQVA7QUFDRDtBQUNGO0FBQ0YsRUFaSDtBQWFBLENBakJEOztBQXFCQSxTQUFTLElBQVQsR0FBZ0I7QUFDZCxLQUFJLE9BQU8sQ0FBQyxrQkFBRCxFQUFxQixzQkFBckIsRUFBNkMsbUJBQTdDLENBQVg7QUFDQSxLQUFJLFVBQVUsQ0FBZDtBQUNBLGFBQVksTUFBWixFQUFvQixJQUFwQjs7QUFFQSxVQUFTLE1BQVQsR0FBaUI7QUFDaEIsSUFBRSxTQUFGLEVBQWEsSUFBYixDQUFrQixLQUFLLE9BQUwsQ0FBbEI7QUFDQTtBQUNBLE1BQUcsV0FBVyxLQUFLLE1BQW5CLEVBQ0MsVUFBVSxDQUFWO0FBQ0Q7QUFFRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcclxuJChmdW5jdGlvbigpIHtcclxuXHR0ZXh0KCk7XHRcclxuXHRuZXcgV09XKCkuaW5pdCgpO1xyXG5cclxuXHQkKCdhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdCAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sJycpID09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sJycpXHJcblx0ICAgICYmIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWUpIHtcclxuXHQgICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xyXG5cdCAgICAgIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsnXScpO1xyXG5cdCAgICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XHJcblx0ICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcblx0ICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcFxyXG5cdCAgICAgICAgfSwgMTAwMCk7XHJcblx0ICAgICAgICByZXR1cm4gZmFsc2U7XHJcblx0ICAgICAgfVxyXG5cdCAgICB9XHJcblx0ICB9KTtcclxufSk7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHRleHQoKSB7XHJcblx0XHR2YXIgdGV4dCA9IFsndXNlciBpbnRlcmZhY2VzLicsICdhY2Nlc3NpYmxlIHdlYnNpdGVzLicsICd3ZWIgYXBwbGljYXRpb25zLiddO1xyXG5cdFx0dmFyIGNvdW50ZXIgPSAwO1xyXG5cdFx0c2V0SW50ZXJ2YWwoY2hhbmdlLCAzMDAwKTtcclxuXHJcblx0XHRmdW5jdGlvbiBjaGFuZ2UoKXtcclxuXHRcdFx0JCgnaDEgc3BhbicpLnRleHQodGV4dFtjb3VudGVyXSk7XHJcblx0XHRcdGNvdW50ZXIrKztcclxuXHRcdFx0aWYoY291bnRlciA+PSB0ZXh0Lmxlbmd0aClcclxuXHRcdFx0XHRjb3VudGVyID0gMDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH0iXX0=
