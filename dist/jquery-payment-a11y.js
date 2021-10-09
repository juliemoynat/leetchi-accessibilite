jQuery.noConflict();
jQuery( document ).ready(function( $ ) {

	/**
	 * Page paiement par carte
	 */

	/* Les champs s'affichent après chargement du DOM donc il faut une action pour activer ce script. */
	$('*').on('focus', function() {
		/* Ajout d'un titre au cadre contenant le champ "Numéro de carte" : ce champ n'a pas d'intitulé et je ne peux pas agir dans l'iframe. Le titre de cadre limite la casse. */
		$('iframe#pl-pm-cards_4-cardNumber').attr('title', 'Champ numéro de carte');

		/* Idem pour le champ cryptogramme */
		$('iframe#pl-pm-cards_4-cvv').attr('title', "Champ cryptogramme");
	});
});
