"use strict";
$(function() {

	var $nav = $('nav.greedy');
	var $btn = $('nav.greedy button');
	var $vlinks = $('nav.greedy .links');
	var $hlinks = $('nav.greedy .hidden-links');

	var numOfItems = 0;
	var totalSpace = 0;
	var breakWidths = [];

	// Get initial state
	$vlinks.children().outerWidth(function(i, w) {
		totalSpace += w;
		numOfItems += 1;
		breakWidths.push(totalSpace);
	});



	$btn.on('click', function() {
		$hlinks.toggleClass('hidden');
	});

	check();

});
function telaCheia() {
	let game = document.getElementById("game-area");
	if (game.requestFullscreen) {
	  game.requestFullscreen();
	} else if (game.mozRequestFullScreen) { /* Firefox */
	  game.mozRequestFullScreen();
	} else if (game.webkitRequestFullscreen) { /* Chrome, Safari && Opera */
	  game.webkitRequestFullscreen();
	} else if (game.msRequestFullscreen) { /* IE/Edge */
	  game.msRequestFullscreen();
	}
};
var can_resize = false;
if(window.location.href.indexOf('game') > 0){
	can_resize = true;
}
$(document).ready(()=>{
	$("#navb").on('show.bs.collapse', function(){
		$('.user-avatar').hide();
	});
	$("#navb").on('hidden.bs.collapse', function(){
		$('.user-avatar').show();
	});
	resize_game_iframe();
	function resize_game_iframe(){
		if(can_resize){
			let iframe = $("iframe.game-iframe");
			let size = {
				width: Number(iframe.attr('width')),
				height: Number(iframe.attr('height')),
			}
			let ratio = (size.height/size.width)*100;
			let win_ratio = (window.innerHeight/window.innerWidth)*100;
			if(win_ratio <= 110){
				if(ratio > 80){
					ratio = 80;
				}
			} else if(win_ratio >= 130){
				if(ratio < 100){
					ratio = 100;
				}
			}
			$('.game-iframe-container').css('padding-top', ratio+'%');
		}
	}
	$(window).resize(function() {
		resize_game_iframe();
	});
});