$(function(){var items=$('.overlapblackbg, .slideLeft, body');var wsmenucontent=$('.wsmenucontent');var menuopen=function(){$(items).removeClass('menuclose').addClass('menuopen');$('.fade-bottom').addClass('active');};var menuclose=function(){$(items).removeClass('menuopen').addClass('menuclose');$('.fade-bottom').removeClass('active')};$('#navToggle').click(function(){$("#mobile-search-bar").hide();$("#mobile-search-icon").toggleClass("hidden");$("#mobile-search-cover").addClass("hidden");$("#mobile-search-icon").children(".search-btn").removeClass("hidden");$("#mobile-search-icon").children(".close-btn").addClass("hidden");$("#mini-cart").removeClass('active');if(wsmenucontent.hasClass('menuopen')){$(menuclose)}
else{$(menuopen)}});wsmenucontent.click(function(){$("#mobile-search-icon").removeClass("hidden");if(wsmenucontent.hasClass('menuopen')){$(menuclose)}});$('#navToggle,.overlapblackbg').on('click',function(){$('.wsmenucontainer').toggleClass("mrginleft");});$('.wsmenu-list li').has('.wsmenu-submenu, .wsmenu-submenu-sub, .wsmenu-submenu-sub-sub').prepend('<span class="wsmenu-click"><i class="wsmenu-arrow fa fa-angle-down"></i></span>');$('.wsmenu-list li').has('.megamenu').prepend('<span class="wsmenu-click"><i class="wsmenu-arrow fa fa-angle-down"></i></span>');$('.wsmenu-mobile').click(function(){$('.wsmenu-list').slideToggle('slow');});$('.wsmenu-click').click(function(){$(this).siblings('.wsmenu-submenu').slideToggle('slow');$(this).children('.wsmenu-arrow').toggleClass('wsmenu-rotate');$(this).siblings('.wsmenu-submenu-sub').slideToggle('slow');$(this).siblings('.wsmenu-submenu-sub-sub').slideToggle('slow');$(this).siblings('.megamenu').slideToggle('slow');});});