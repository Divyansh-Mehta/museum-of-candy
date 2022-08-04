$(function(){
    $(document).scroll(function(){
        var $nav = $("#main-navbar");
        $nav.toggleClass("navbar-scrolled", $(this).scrollTop() > $nav.height());
    })
})