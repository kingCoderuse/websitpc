$(function() {
	function getwidth() {
		var lefth = $('.page1 .leftbox').height();
		var marginTop = -(lefth / 2) + 'px';
		$('.page1 .leftbox').height(lefth);
		$('.page1 .leftbox').css('margin-top', marginTop)

		var hleftbox = $('.page2 .leftbox').height();
		var mTop = -(hleftbox / 2) + 'px';
		$('.page2 .leftbox').css('margin-top', mTop);

		var hleftbox1 = $('.page3 .leftbox').height();
		var mTop1 = -(hleftbox1 / 2) + 'px';
		$('.page3 .leftbox').css('margin-top', mTop1);

		var hleftbox2 = $('.page4 .leftbox ul').height();
		var mTop2 = -(350 / 2 + 100) + 'px';
		$('.page4 .leftbox').css('margin-top', mTop2);

		var hleftbox3 = $('.page5 .leftbox').height();
		var mTop3 = -(hleftbox3 / 2) + 'px';
		$('.page5 .leftbox').css('margin-top', mTop3);

		var hleftbox4 = $('.page6 .leftbox').height();
		var mTop4 = -(hleftbox4 / 2 + 100) + 'px';
		$('.page6 .leftbox').css('margin-top', mTop4);

		var hleftbox5 = $('.page7 .leftbox').height();
		var mTop5 = -(hleftbox5 / 2) + 'px';
		$('.page7 .leftbox').css('margin-top', mTop5);

		var hleftbox6 = $('.page8 .leftbox').height();
		var mTop6 = -(hleftbox6 / 2) + 'px';
		$('.page8 .leftbox').css('margin-top', mTop6);

		var pbox = $('#myMenu').height();
		var pmarginTop = -(pbox / 2) + 'px';
		$('.menu-box .p-box').css('margin-top', pmarginTop);
		
	}
	getwidth();
	$('#fullpage').fullpage({
		loopBottom: true,
		resize: true,
		verticalCentered: false,
		menu: '#myMenu',
		afterLoad: function(anchorLink, index) {
			var loadedSection = $(this);
			//using index
			if(index == 3 || index == 4 || index == 6 || index == 8) {
				if($('.menu-box').hasClass('is-display')) {
					$('#header .fleft img').attr('src', 'images/ICON/logo.png');
					$('#header .nav-bar span').css('background', '#ecf0f1');
				} else {
					$('#header .fleft img').attr('src', 'images/ICON/logo2.png');
					$('#header .nav-bar span').css('background', '#393939');
				}
			} else {
				$('#header .fleft img').attr('src', 'images/ICON/logo.png');
				$('#header .nav-bar span').css('background', '#ecf0f1');
			}

			if(index == 3) {
				$('.page3 .ul-tab').addClass('leftout');
				$('.page3 .tab-box').css({'transform':'translateX(0px) rotate(0deg)','visibility':'visible','opacity':1})
			}

			if(index == 4) {
				$('.page4 .Htitle').addClass('animation')
			}
			if(index == 5) {
				$('.page5 .leftbox.leftboxchage .new-box.new-box1').animate({
					left: 0,
					top: 0,
					opacity: 1
				}, 'fast');
				$('.page5 .leftbox.leftboxchage .new-box.new-box2').animate({
					right: 0,
					top: 0,
					opacity: 1
				}, 'fast');
				$('.page5 .leftbox.leftboxchage .new-box.new-box3').animate({
					left: 0,
					top: 0,
					opacity: 1
				}, 'fast');
				$('.page5 .leftbox.leftboxchage .new-box.new-box4').animate({
					right: 0,
					top: 0,
					opacity: 1
				}, 'fast')
			}
			if(index == 6) {
				$('.page6 .leftbox p').css({
					'transform': 'translateY(0)',
					'-webkit-transform': 'translateY(0)',
					'-moz-transform': 'translateY(0)',
					'opacity': 1
				})
			}
			if(index == 7) {
				$('.page7 .leftbox img').addClass('changbig');
				$('.page7 .leftbox .btn-join').css({
					'transform': 'translateY(0)',
					'-webkit-transform': 'translateY(0)',
					'-moz-transform': 'translateY(0)',
					'opacity': 1
				})
			}

		},
		onLeave: function(index, nextIndex, direction) {
			var leavingSection = $(this);
			if(index == 1 && direction == 'down') {
				$('.page2 .leftbox ul li').animate({
					top: 0,
					opacity: 1,
					
				}, 'fast',function(){
					$(this).css('visibility','visible')
				})
			}
			if(index == 4 && direction == 'down') {
				$('.page5 .leftbox.leftboxchage .new-box.new-box1').animate({
					left: 0,
					top: 0,
					opacity: 1
				}, 'fast');
				$('.page5 .leftbox.leftboxchage .new-box.new-box2').animate({
					right: 0,
					top: 0,
					opacity: 1
				}, 'fast');
				$('.page5 .leftbox.leftboxchage .new-box.new-box3').animate({
					left: 0,
					top: 0,
					opacity: 1
				}, 'fast');
				$('.page5 .leftbox.leftboxchage .new-box.new-box4').animate({
					right: 0,
					top: 0,
					opacity: 1
				}, 'fast')
			}
			if(index == 6 && direction == 'up') {
				$('.page5 .leftbox.leftboxchage .new-box.new-box1').animate({
					left: 0,
					top: 0,
					opacity: 1
				}, 'fast');
				$('.page5 .leftbox.leftboxchage .new-box.new-box2').animate({
					right: 0,
					top: 0,
					opacity: 1
				}, 'fast');
				$('.page5 .leftbox.leftboxchage .new-box.new-box3').animate({
					left: 0,
					top: 0,
					opacity: 1
				}, 'fast');
				$('.page5 .leftbox.leftboxchage .new-box.new-box4').animate({
					right: 0,
					top: 0,
					opacity: 1
				}, 'fast')
			}
		},
		afterResize: function() {
			//var pluginContainer = $(this);
			getwidth();
		}
	});

	$('.btn-arrow').click(function() {
		$.fn.fullpage.moveSectionDown();
	})

	$('#header .nav-bar').click(function() {
		$(this).toggleClass('is-active');
		var classes = $(this).attr('class');
		if(classes == 'nav-bar fright is-active') {
			$('.menu-box').addClass('is-display');
			$('#header .fleft img').attr('src', 'images/ICON/logo.png');
			$('#header .nav-bar span').css('background', '#ecf0f1');
		} else {
			$('.menu-box').removeClass('is-display');
			if($('.page3').hasClass('active') || $('.page4').hasClass('active') || $('.page6').hasClass('active') || $('.page8').hasClass('active')) {
				$('#header .fleft img').attr('src', 'images/ICON/logo2.png');
				$('#header .nav-bar span').css('background', '#393939');
			}
		}
	})
	$('.menu-box .rightbox li').click(function() {
		$(this).parents('.menu-box').removeClass('is-display');
		$('.nav-bar').removeClass('is-active');
	})

	$('.page3 ul.ul-tab > li').click(function() {
		$(this).addClass('tab-current').siblings('.page3 ul.ul-tab > li').removeClass('tab-current');
		$('.page3 .tab-box > div').hide().eq($('.page3 ul.ul-tab > li').index(this)).show()
	})
	$('.page3 ul.ul-tab1 > li').click(function() {
		$(this).addClass('tab-current').siblings('.page3 ul.ul-tab1 > li').removeClass('tab-current');
		$('.page3 .tab-box1 > div').hide().eq($('.page3 ul.ul-tab1 > li').index(this)).show()
	})

	jQuery(".slideBox").slide({
		mainCell: ".bd ul",
		effect: "leftLoop",
		autoPlay: false
	});

	jQuery(".txtMarquee-top").slide({
		mainCell: ".bd ul",
		autoPlay: true,
		effect: "topMarquee",
		vis: 6,
		interTime: 100
	});

	$(window).load(function() {
		$(".page3 .tab-box-list").mCustomScrollbar();
	});

})