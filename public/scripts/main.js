(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

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
	}
}

function burgerMenu() {
	$("#burger-container").on('click', function () {
		$(this).toggleClass("open");
		$('nav ul').toggleClass("display");
	});
}

function removeNav() {
	$('nav a').on('click', function () {
		$("#burger-container").removeClass("open");
		$('nav ul').addClass("display");
	});
}

$(function () {
	text();
	new WOW().init();
	smoothScroll();
	removeClass();
	burgerMenu();
	removeNav();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXZcXHNjcmlwdHNcXG1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBLFNBQVMsSUFBVCxHQUFnQjtBQUNmLEtBQUksT0FBTyxDQUFDLGtCQUFELEVBQXFCLHNCQUFyQixFQUE2QyxtQkFBN0MsQ0FBWDtBQUNBLEtBQUksVUFBVSxDQUFkO0FBQ0EsYUFBWSxNQUFaLEVBQW9CLElBQXBCOztBQUVBLFVBQVMsTUFBVCxHQUFpQjtBQUNoQixJQUFFLFNBQUYsRUFBYSxJQUFiLENBQWtCLEtBQUssT0FBTCxDQUFsQjtBQUNBO0FBQ0EsTUFBRyxXQUFXLEtBQUssTUFBbkIsRUFDQyxVQUFVLENBQVY7QUFDRDtBQUNEOztBQUVELFNBQVMsWUFBVCxHQUF3QjtBQUN2QixHQUFFLDhCQUFGLEVBQWtDLEtBQWxDLENBQXdDLFlBQVc7QUFDL0MsTUFBSSxTQUFTLFFBQVQsQ0FBa0IsT0FBbEIsQ0FBMEIsS0FBMUIsRUFBZ0MsRUFBaEMsS0FBdUMsS0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixLQUF0QixFQUE0QixFQUE1QixDQUF2QyxJQUNELFNBQVMsUUFBVCxJQUFxQixLQUFLLFFBRDdCLEVBQ3VDO0FBQ3RDLE9BQUksU0FBUyxFQUFFLEtBQUssSUFBUCxDQUFiO0FBQ0UsWUFBUyxPQUFPLE1BQVAsR0FBZ0IsTUFBaEIsR0FBeUIsRUFBRSxXQUFXLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsQ0FBaEIsQ0FBWCxHQUErQixHQUFqQyxDQUFsQztBQUNBLE9BQUksT0FBTyxNQUFYLEVBQW1CO0FBQ2pCLE1BQUUsWUFBRixFQUFnQixPQUFoQixDQUF3QjtBQUN0QixnQkFBVyxPQUFPLE1BQVAsR0FBZ0I7QUFETCxLQUF4QixFQUVHLElBRkg7QUFHQSxXQUFPLEtBQVA7QUFDRDtBQUNIO0FBQ0osRUFaRDtBQWFBOztBQUVELFNBQVMsV0FBVCxHQUF1QjtBQUN0QixLQUFJLEVBQUUsTUFBRixFQUFVLEtBQVYsS0FBb0IsR0FBeEIsRUFBNkI7QUFDekIsSUFBRSwrQkFBRixFQUFtQyxXQUFuQyxDQUErQyw0QkFBL0M7QUFDSDtBQUNEOztBQUVELFNBQVMsVUFBVCxHQUFzQjtBQUNyQixHQUFFLG1CQUFGLEVBQXVCLEVBQXZCLENBQTBCLE9BQTFCLEVBQW1DLFlBQVU7QUFDdEMsSUFBRSxJQUFGLEVBQVEsV0FBUixDQUFvQixNQUFwQjtBQUNBLElBQUUsUUFBRixFQUFZLFdBQVosQ0FBd0IsU0FBeEI7QUFDSCxFQUhKO0FBSUE7O0FBRUQsU0FBUyxTQUFULEdBQXFCO0FBQ3BCLEdBQUUsT0FBRixFQUFXLEVBQVgsQ0FBYyxPQUFkLEVBQXVCLFlBQVU7QUFDaEMsSUFBRSxtQkFBRixFQUF1QixXQUF2QixDQUFtQyxNQUFuQztBQUNBLElBQUUsUUFBRixFQUFZLFFBQVosQ0FBcUIsU0FBckI7QUFDQSxFQUhEO0FBSUE7O0FBRUQsRUFBRSxZQUFXO0FBQ1o7QUFDQSxLQUFJLEdBQUosR0FBVSxJQUFWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVBEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxyXG5mdW5jdGlvbiB0ZXh0KCkge1xyXG5cdHZhciB0ZXh0ID0gWyd1c2VyIGludGVyZmFjZXMuJywgJ2FjY2Vzc2libGUgd2Vic2l0ZXMuJywgJ3dlYiBhcHBsaWNhdGlvbnMuJ107XHJcblx0dmFyIGNvdW50ZXIgPSAwO1xyXG5cdHNldEludGVydmFsKGNoYW5nZSwgMzAwMCk7XHJcblxyXG5cdGZ1bmN0aW9uIGNoYW5nZSgpe1xyXG5cdFx0JCgnaDEgc3BhbicpLnRleHQodGV4dFtjb3VudGVyXSk7XHJcblx0XHRjb3VudGVyKys7XHJcblx0XHRpZihjb3VudGVyID49IHRleHQubGVuZ3RoKVxyXG5cdFx0XHRjb3VudGVyID0gMDtcclxuXHR9XHRcdFxyXG59XHJcblxyXG5mdW5jdGlvbiBzbW9vdGhTY3JvbGwoKSB7XHJcblx0JCgnYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHQgICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCcnKSA9PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCcnKVxyXG5cdCAgICAmJiBsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lKSB7XHJcblx0ICAgIFx0dmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcclxuXHQgICAgICBcdHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsnXScpO1xyXG5cdCAgICAgIFx0aWYgKHRhcmdldC5sZW5ndGgpIHtcclxuXHQgICAgICAgIFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG5cdCAgICAgICAgICBcdHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcFxyXG5cdCAgICAgICAgXHR9LCAxMDAwKTtcclxuXHQgICAgICAgIFx0cmV0dXJuIGZhbHNlO1xyXG5cdCAgICAgIFx0fVxyXG5cdCAgICB9XHJcblx0fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKCkge1xyXG5cdGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDQ4MCkge1xyXG4gICAgXHQkKCcucHJvamVjdC1pbWFnZSwgLnByb2plY3QtdGV4dCcpLnJlbW92ZUNsYXNzKCd3b3cgZmFkZUluTGVmdCBmYWRlSW5SaWdodCcpO1xyXG5cdH0gXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1cmdlck1lbnUoKSB7XHJcblx0JChcIiNidXJnZXItY29udGFpbmVyXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcIm9wZW5cIik7XHJcbiAgICAgICAgJCgnbmF2IHVsJykudG9nZ2xlQ2xhc3MoXCJkaXNwbGF5XCIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZU5hdigpIHtcclxuXHQkKCduYXYgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0XHQkKFwiI2J1cmdlci1jb250YWluZXJcIikucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpO1xyXG5cdFx0JCgnbmF2IHVsJykuYWRkQ2xhc3MoXCJkaXNwbGF5XCIpO1xyXG5cdH0pO1x0XHJcbn1cclxuXHJcbiQoZnVuY3Rpb24oKSB7XHJcblx0dGV4dCgpO1x0XHJcblx0bmV3IFdPVygpLmluaXQoKTtcclxuXHRzbW9vdGhTY3JvbGwoKTtcclxuXHRyZW1vdmVDbGFzcygpO1xyXG5cdGJ1cmdlck1lbnUoKTtcclxuXHRyZW1vdmVOYXYoKTtcclxufSk7XHJcbiJdfQ==
