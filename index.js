/*when page is scrolled on larger screens make navigation bar font size smaller, when reaches top again, make larger*/$(document).scroll(function(){if($(window).scrollTop() !==0){$(".navitem").addClass('nav-font-scroll');}else{$(".navitem").removeClass('nav-font-scroll');}});function getOffset(){/*different offsets for scrolling to different sections within the page based on media queries*/ if (window.matchMedia('(min-width: 755px)').matches){let off=61; return off;}else if (window.matchMedia('(min-width: 376px)').matches){let off=45; return off;}else{let off=41; return off;}}/*Captures click events of all <a> elements with href starting with # */$('.navitem').click(function(){switch ($(this).attr('href')){case '#resume': $('html,body').animate({scrollTop: $('#resume').offset().top - getOffset()}, 500); break; case '#portfolio': $('html,body').animate({scrollTop: $('#portfolio').offset().top - getOffset()}, 500); break; case '#about': $('html,body').animate({scrollTop: $('#about').offset().top - getOffset()}, 500); break; case '#top': $('html,body').animate({scrollTop: $('#top').offset().top - getOffset()}, 500); break; case '#contact': $('html,body').animate({scrollTop: $('#contact').offset().top - getOffset()}, 500); break;}});$('.collapsible').click(function(){$(this).closest(".resume-section").find('.resume-inner-section').toggle('easing');});