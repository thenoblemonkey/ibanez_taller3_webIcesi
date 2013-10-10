jQuery(document).ready(function() {
	derecha();
})


function derecha() {

	jQuery(".bolita").animate({
		'marginLeft': '90%',}, 3500, 'swing', izquierda)
}
function izquierda() {

	jQuery(".bolita").animate({
		'marginLeft': '0%',}, 3500, 'swing', derecha)
}

