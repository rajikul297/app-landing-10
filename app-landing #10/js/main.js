$(document).ready(function(){
	$(".sticky_menu").waypoint(function(direction){
		if(direction == "down"){
			$("nav").addClass("sticky");
		}else {
			$("nav").removeClass("sticky");
		}
	});
});

//    mobile_menu
function openNav() {
    document.getElementById("myNav").style.width = "30%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}