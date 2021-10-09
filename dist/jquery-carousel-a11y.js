jQuery.noConflict();
jQuery( document ).ready(function( $ ) {

	/**
	 * Carrousels
	 */

	/* Suppression attribut aria-live */
	$('.bx-viewport').removeAttr('aria-live');

	// On le refait dès qu'on prend le focus ou clique quelque part parce qu'il y a des carrousels qui apparaissent à retardement dans la page d'accueil… (et le délai, ça marche pas…)
	$('*').on('focus', function() {
		$('.bx-viewport').removeAttr('aria-live');
	});

	$('*').on('click', function() {
		$('.bx-viewport').removeAttr('aria-live');
	});
});
