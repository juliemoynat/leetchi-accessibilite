jQuery.noConflict();
jQuery( document ).ready(function( $ ) {

	/** --------------------------------------------------------------
	 * Formulaire de don : gestion des libellés de champs et de groupes de champs
	 */

	/* Rendre visible les libellés cachés (le placeholder, c'est nul) */
	$('#contributionForm label').removeClass('sr-only');

	/* Champ prénom : la phrase "Renseignez vos coordonnées" n'est pas un libellé de champ */
	var fillDetailsSentence = $('#contributionForm label[for="FormViewModel_LclfOwnerAdditionalInformationsDto_FirstName"]');

	fillDetailsSentence.attr('role', 'presentation').removeAttr('for');

	/* Champ prénom : ajouter un libellé */
	var firstNameField = $('#FormViewModel_LclfOwnerAdditionalInformationsDto_FirstName');
	var firstNameLabel = $('<label for="FormViewModel_LclfOwnerAdditionalInformationsDto_FirstName">Prénom</label>');

	firstNameLabel.insertBefore(firstNameField);

	/* Champ Nom : ajouter un libellé */
	var lastNameField = $('#FormViewModel_LclfOwnerAdditionalInformationsDto_LastName');
	var lastNameLabel = $('<label for="FormViewModel_LclfOwnerAdditionalInformationsDto_LastName">Nom</label>');

	lastNameLabel.insertBefore(lastNameField);

	/* Date de naissance : ajouter fieldset + legend (ARIA) */
	var birthdateFieldset = $('#contributionForm .form-group__birthdate');
	var birthdateLegend = $('#contributionForm .form-group__birthdate label[for="FormDto_user_name"]');
	var birthdateLegendID = 'bithdate-legend-id';

	birthdateLegend.replaceWith('<p id="' + birthdateLegendID + '">' + birthdateLegend.text() + '</p>');

	birthdateFieldset.attr('role', 'group').attr('aria-labelledby',birthdateLegendID);

	/* Date de naissance : ajouter les libellés aux champs */
	// Jour
	var birthdateDaySelect = $('#contributionForm select.birthdateDay');
	var bithdateDayLabel = $('<label for="birthdateDay-id" class="sr-only">Jour de naissance</label>');

	birthdateDaySelect.attr('id', 'birthdateDay-id');
	bithdateDayLabel.insertBefore(birthdateDaySelect);

	// Mois
	var birthdateMonthSelect = $('#contributionForm select.birthdateMonth');
	var bithdateMonthLabel = $('<label for="birthdateMonth-id" class="sr-only">Mois de naissance</label>');

	birthdateMonthSelect.attr('id', 'birthdateMonth-id');
	bithdateMonthLabel.insertBefore(birthdateMonthSelect);

	// Année
	var birthdateYearSelect = $('#contributionForm select.birthdateYear');
	var bithdateYearLabel = $('<label for="birthdateYear-id" class="sr-only">Année de naissance</label>');

	birthdateYearSelect.attr('id', 'birthdateYear-id');
	bithdateYearLabel.insertBefore(birthdateYearSelect);

	/* Montant du don : ajout fieldset + legend (ARIA) */
	var suggestedAmountFieldset = $('#contributionForm .suggested-amount');
	var suggestedAmountLegend = $('#contributionForm .suggested-amount > p:first-child');
	var suggestedAmountLegendID = 'suggested-amount-id';
	var suggestedAmountRadioList = $('#contributionForm .suggested-amount .lt-value-selector__radio-list');

	suggestedAmountFieldset.attr('role', 'group').attr('aria-labelledby', suggestedAmountLegendID);
	suggestedAmountLegend.attr('id', suggestedAmountLegendID);
	suggestedAmountRadioList.attr('role', 'presentation');

	/* Montant du don : ajout libellé au champ montant perso */
	var suggestedAmountCustomField = $('#contributionForm #FormViewModel_ContributionAmountCents');
	var suggestedAmountCustomLabel = $('<label for="FormViewModel_ContributionAmountCents">Indiquer plutôt un montant personnalisé</label>');

	suggestedAmountCustomLabel.insertBefore(suggestedAmountCustomField);

	/* Choix moyen de paiment : ajout fieldset + legend (ARIA) */
	var chooseCreditCardFieldset = $('#contributionForm .panel-choose-credit-card');
	var chooseCreditCardLegend = $('#contributionForm .panel-choose-credit-card > p:first-child');
	var chooseCreditCardLegendID = 'choose-credit-card-id';
	var chooseCreditCardRadioList = $('#contributionForm .list-payment-method');

	chooseCreditCardFieldset.attr('role', 'radiogroup').attr('aria-labelledby', chooseCreditCardLegendID);
	chooseCreditCardLegend.attr('id', chooseCreditCardLegendID);
	chooseCreditCardRadioList.attr('role', 'presentation');
});
