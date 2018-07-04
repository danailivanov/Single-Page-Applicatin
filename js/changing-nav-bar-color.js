$(document).ready(function(){
    $(window).scroll(function() { 
      if ($(document).scrollTop() > 400) { 
        $(".navBar").css("background-color", "black");
        $(".barItem").css("color", "white"); 
      } else {
        $(".navBar").css("background-color", "transparent");
        $(".barItem").css("color", "red"); 
      }
    });
  });
  // "#B40404"