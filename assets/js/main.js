(function ($) {
	"use strict";

	$(document).ready(function () {
		// header language
		$(".languages .activated").html($(".lang_lists > li.active a").html());

		var newOptions = $(".lang_lists > li a");
		newOptions.click(function () {
			$(".languages .activated").html($(this).html());
			$(".lang_lists > li").removeClass("active");
			$(".lang_lists > li").addClass("active");
		});

		var aeDropdown = $(".languages");
		aeDropdown.click(function () {
			$(".lang_lists").slideToggle();
			$(this).toggleClass("open");
		});
	});

	// MeanMenu
	$("header .site_menu").meanmenu({
		meanMenuContainer: ".mobile-menu",
		meanScreenWidth: "991",
		meanExpand: ['<img src="./assets/img/icons/angle-down.svg" alt="">'],
	});

	// side menu
	$(".site-header .menu_bars a").on("click", function () {
		$(".side-menu").addClass("open");
		$(".side-menu .top-area .cross-icon-box").removeClass("open");
	});
	$(".side-menu .top-area .cross-icon-box").on("click", function () {
		$(".side-menu").removeClass("open");
	});

	// Sticky Menu
	$(window).on("scroll", function () {
		var scroll = $(window).scrollTop();
		if (scroll < 1) {
			$(".site-header").removeClass("sticky");
			$(".main-content").removeClass("sticky");
		} else {
			$(".site-header").addClass("sticky");
			$(".main-content").addClass("sticky");
		}
	});
})(jQuery);
