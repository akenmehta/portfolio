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
		console.log('clicked');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXZcXHNjcmlwdHNcXG1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBLFNBQVMsSUFBVCxHQUFnQjtBQUNmLEtBQUksT0FBTyxDQUFDLGtCQUFELEVBQXFCLHNCQUFyQixFQUE2QyxtQkFBN0MsQ0FBWDtBQUNBLEtBQUksVUFBVSxDQUFkO0FBQ0EsYUFBWSxNQUFaLEVBQW9CLElBQXBCOztBQUVBLFVBQVMsTUFBVCxHQUFpQjtBQUNoQixJQUFFLFNBQUYsRUFBYSxJQUFiLENBQWtCLEtBQUssT0FBTCxDQUFsQjtBQUNBO0FBQ0EsTUFBRyxXQUFXLEtBQUssTUFBbkIsRUFDQyxVQUFVLENBQVY7QUFDRDtBQUNEOztBQUVELFNBQVMsWUFBVCxHQUF3QjtBQUN2QixHQUFFLDhCQUFGLEVBQWtDLEtBQWxDLENBQXdDLFlBQVc7QUFDL0MsTUFBSSxTQUFTLFFBQVQsQ0FBa0IsT0FBbEIsQ0FBMEIsS0FBMUIsRUFBZ0MsRUFBaEMsS0FBdUMsS0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixLQUF0QixFQUE0QixFQUE1QixDQUF2QyxJQUNELFNBQVMsUUFBVCxJQUFxQixLQUFLLFFBRDdCLEVBQ3VDO0FBQ3RDLE9BQUksU0FBUyxFQUFFLEtBQUssSUFBUCxDQUFiO0FBQ0UsWUFBUyxPQUFPLE1BQVAsR0FBZ0IsTUFBaEIsR0FBeUIsRUFBRSxXQUFXLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsQ0FBaEIsQ0FBWCxHQUErQixHQUFqQyxDQUFsQztBQUNBLE9BQUksT0FBTyxNQUFYLEVBQW1CO0FBQ2pCLE1BQUUsWUFBRixFQUFnQixPQUFoQixDQUF3QjtBQUN0QixnQkFBVyxPQUFPLE1BQVAsR0FBZ0I7QUFETCxLQUF4QixFQUVHLElBRkg7QUFHQSxXQUFPLEtBQVA7QUFDRDtBQUNIO0FBQ0osRUFaRDtBQWFBOztBQUVELFNBQVMsV0FBVCxHQUF1QjtBQUN0QixLQUFJLEVBQUUsTUFBRixFQUFVLEtBQVYsS0FBb0IsR0FBeEIsRUFBNkI7QUFDekIsSUFBRSwrQkFBRixFQUFtQyxXQUFuQyxDQUErQyw0QkFBL0M7QUFDSDtBQUNEOztBQUVELFNBQVMsVUFBVCxHQUFzQjtBQUNyQixHQUFFLG1CQUFGLEVBQXVCLEVBQXZCLENBQTBCLE9BQTFCLEVBQW1DLFlBQVU7QUFDdEMsSUFBRSxJQUFGLEVBQVEsV0FBUixDQUFvQixNQUFwQjtBQUNBLElBQUUsUUFBRixFQUFZLFdBQVosQ0FBd0IsU0FBeEI7QUFDSCxFQUhKO0FBSUE7O0FBRUQsU0FBUyxTQUFULEdBQXFCO0FBQ3BCLEdBQUUsT0FBRixFQUFXLEVBQVgsQ0FBYyxPQUFkLEVBQXVCLFlBQVU7QUFDaEMsSUFBRSxtQkFBRixFQUF1QixXQUF2QixDQUFtQyxNQUFuQztBQUNBLFVBQVEsR0FBUixDQUFZLFNBQVo7QUFDQSxJQUFFLFFBQUYsRUFBWSxRQUFaLENBQXFCLFNBQXJCO0FBQ0EsRUFKRDtBQUtBOztBQUVELEVBQUUsWUFBVztBQUNaO0FBQ0EsS0FBSSxHQUFKLEdBQVUsSUFBVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FQRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcclxuZnVuY3Rpb24gdGV4dCgpIHtcclxuXHR2YXIgdGV4dCA9IFsndXNlciBpbnRlcmZhY2VzLicsICdhY2Nlc3NpYmxlIHdlYnNpdGVzLicsICd3ZWIgYXBwbGljYXRpb25zLiddO1xyXG5cdHZhciBjb3VudGVyID0gMDtcclxuXHRzZXRJbnRlcnZhbChjaGFuZ2UsIDMwMDApO1xyXG5cclxuXHRmdW5jdGlvbiBjaGFuZ2UoKXtcclxuXHRcdCQoJ2gxIHNwYW4nKS50ZXh0KHRleHRbY291bnRlcl0pO1xyXG5cdFx0Y291bnRlcisrO1xyXG5cdFx0aWYoY291bnRlciA+PSB0ZXh0Lmxlbmd0aClcclxuXHRcdFx0Y291bnRlciA9IDA7XHJcblx0fVx0XHRcclxufVxyXG5cclxuZnVuY3Rpb24gc21vb3RoU2Nyb2xsKCkge1xyXG5cdCQoJ2FbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0ICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywnJykgPT0gdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywnJylcclxuXHQgICAgJiYgbG9jYXRpb24uaG9zdG5hbWUgPT0gdGhpcy5ob3N0bmFtZSkge1xyXG5cdCAgICBcdHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XHJcblx0ICAgICAgXHR0YXJnZXQgPSB0YXJnZXQubGVuZ3RoID8gdGFyZ2V0IDogJCgnW25hbWU9JyArIHRoaXMuaGFzaC5zbGljZSgxKSArJ10nKTtcclxuXHQgICAgICBcdGlmICh0YXJnZXQubGVuZ3RoKSB7XHJcblx0ICAgICAgICBcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuXHQgICAgICAgICAgXHRzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3BcclxuXHQgICAgICAgIFx0fSwgMTAwMCk7XHJcblx0ICAgICAgICBcdHJldHVybiBmYWxzZTtcclxuXHQgICAgICBcdH1cclxuXHQgICAgfVxyXG5cdH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVDbGFzcygpIHtcclxuXHRpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA0ODApIHtcclxuICAgIFx0JCgnLnByb2plY3QtaW1hZ2UsIC5wcm9qZWN0LXRleHQnKS5yZW1vdmVDbGFzcygnd293IGZhZGVJbkxlZnQgZmFkZUluUmlnaHQnKTtcclxuXHR9IFxyXG59XHJcblxyXG5mdW5jdGlvbiBidXJnZXJNZW51KCkge1xyXG5cdCQoXCIjYnVyZ2VyLWNvbnRhaW5lclwiKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJvcGVuXCIpO1xyXG4gICAgICAgICQoJ25hdiB1bCcpLnRvZ2dsZUNsYXNzKFwiZGlzcGxheVwiKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVOYXYoKSB7XHJcblx0JCgnbmF2IGEnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0JChcIiNidXJnZXItY29udGFpbmVyXCIpLnJlbW92ZUNsYXNzKFwib3BlblwiKTtcclxuXHRcdGNvbnNvbGUubG9nKCdjbGlja2VkJyk7XHJcblx0XHQkKCduYXYgdWwnKS5hZGRDbGFzcyhcImRpc3BsYXlcIik7XHJcblx0fSk7XHRcclxufVxyXG5cclxuJChmdW5jdGlvbigpIHtcclxuXHR0ZXh0KCk7XHRcclxuXHRuZXcgV09XKCkuaW5pdCgpO1xyXG5cdHNtb290aFNjcm9sbCgpO1xyXG5cdHJlbW92ZUNsYXNzKCk7XHJcblx0YnVyZ2VyTWVudSgpO1xyXG5cdHJlbW92ZU5hdigpO1xyXG59KTtcclxuIl19
