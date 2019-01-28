
window.onload = function () {
    window.jQuery ? $(document).ready(function () {
        $(".sidebarNavigation .navbar-collapse").hide().clone().appendTo("body").removeAttr("class").addClass("sideMenu").show(), $("body").append("<div class='overlay'></div>"), $(".sideMenu").addClass($(".sidebarNavigation").attr("data-sidebarClass")), $(".navbar-toggle, .navbar-toggler").on("click", function () {
            $(".sideMenu, .overlay").toggleClass("open"), $(".overlay").on("click", function () {
                $(this).removeClass("open"), $(".sideMenu").removeClass("open")
            })
        }), $("body").on("click", ".sideMenu.open .nav-item", function () {
            $(this).hasClass("dropdown") || $(".sideMenu, .overlay").toggleClass("open")
        }), $(window).resize(function () {
            $(".navbar-toggler").is(":hidden") ? $(".sideMenu, .overlay").hide() : $(".sideMenu, .overlay").show()
        })
    }) : console.log("sidebarNavigation Requires jQuery")
};

$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();

    var color = '#34373d';
      var rgbaCol = 'rgba(' + parseInt(color.slice(-6,-4),16)
        + ',' + parseInt(color.slice(-4,-2),16)
        + ',' + parseInt(color.slice(-2),16)
        +',0.96)';

      var rgbaCol1 = 'rgba(' + parseInt(color.slice(-6,-4),16)
        + ',' + parseInt(color.slice(-4,-2),16)
        + ',' + parseInt(color.slice(-2),16)
        +',0)';  

	  if (scroll > 200) {
	    $(".navbar, .transparent, .navbar-expand-md , .navbar-dark, .sidebarNavigation").css("background" , rgbaCol);
	  }

	  else{
		  $(".navbar, .transparent, .navbar-expand-md , .navbar-dark, .sidebarNavigation").css("background" , rgbaCol1);  	
	  }
  })
})
