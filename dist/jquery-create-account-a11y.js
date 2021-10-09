jQuery.noConflict();
jQuery( document ).ready(function( $ ) {

	/**
	 * Formulaire de connexion + création de compte
	 */

	/* Bouton afficher / masquer le mot de passe : ajout d'un intitulé (normalement, on devrait le différencier selon l'état du bouton…) */
	var btnPasswordVisibility = $('#formCreateAccount .btn-password-visibility, #loginForm .btn-password-visibility');

	btnPasswordVisibility.append('<span class="sr-only">Afficher ou masquer le mot de passe</span>');


	/**
	 * Formulaire de connexion
	 */

	/* Gestion du focus au clic sur "Créer un compte" */
	$('#createAccountForm').attr('tabindex', '-1');
	$('#loginForm #btnCreateAccount').click(function(){
		$('#createAccountForm').focus();
	});


	/**
	 * Formulaire de création de compte
	 */

	/* Date de naissance : ajout de libellés */
	// Jour de naissance
	var birthdateDayField = $('#formCreateAccount #birthdateInputDay');
	var birthdateDayLabel = $('<label for="birthdateInputDay" class="sr-only">Jour de naissance (JJ)</label>');

	birthdateDayLabel.insertBefore(birthdateDayField);

	// Mois de naissance
	var birthdateMonthField = $('#formCreateAccount #birthdateInputMonth');
	var birthdateMonthLabel = $('<label for="birthdateInputMonth" class="sr-only">Mois de naissance (MM)</label>');

	birthdateMonthLabel.insertBefore(birthdateMonthField);

	// Jour de naissance
	var birthdateYearField = $('#formCreateAccount #birthdateInputYear');
	var birthdateYearLabel = $('<label for="birthdateInputYear" class="sr-only">Année de naissance (AAAA)</label>');

	birthdateYearLabel.insertBefore(birthdateYearField);

	/* Bouton pour afficher le calendrier de date : ajout intitulé qui dit que ça marche pas au clavier */
	var btnDatePicker = $('#formCreateAccount #btnDatePicker');

	btnDatePicker.append('<span class="sr-only">Afficher un calendrier pour choisir la date de naissance (non fonctionnel au clavier)</span>');
});
