$(document).ready(function(){
    var openMenu=function(){
        $(".open-menu").click(function(){
            $(".hidden-menu").toggle();
        });
    }
    var closeMenu=function(){
        $(".close-menu").click(function(){
            $(".hidden-menu").toggle();
        });
    }
    openMenu();
    closeMenu();
});