// JavaScript Document
jQuery(document).ready(function(){
	"use strict";
	jQuery("#burger-nav").on("click", function(){
		
		jQuery("header nav ul").toggleClass("open");
	});
	
});
