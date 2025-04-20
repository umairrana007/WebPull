/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: CS (Czech; čeština, český jazyk)
 */
js = jQuery.noConflict();
js.extend( js.validator.messages, {
	required: "Tento údaj je povinný.",
	remote: "Prosím, opravte tento údaj.",
	email: "Prosím, zadejte platný e-mail.",
	url: "Prosím, zadejte platné URL.",
	date: "Prosím, zadejte platné datum.",
	dateISO: "Prosím, zadejte platné datum (ISO).",
	number: "Prosím, zadejte číslo.",
	digits: "Prosím, zadávejte pouze číslice.",
	creditcard: "Prosím, zadejte číslo kreditní karty.",
	equalTo: "Prosím, zadejte znovu stejnou hodnotu.",
	extension: "Prosím, zadejte soubor se správnou příponou.",
	maxlength: js.validator.format( "Prosím, zadejte nejvíce {0} znaků." ),
	minlength: js.validator.format( "Prosím, zadejte nejméně {0} znaků." ),
	rangelength: js.validator.format( "Prosím, zadejte od {0} do {1} znaků." ),
	range: js.validator.format( "Prosím, zadejte hodnotu od {0} do {1}." ),
	max: js.validator.format( "Prosím, zadejte hodnotu menší nebo rovnu {0}." ),
	min: js.validator.format( "Prosím, zadejte hodnotu větší nebo rovnu {0}." ),
	step: js.validator.format( "Musí být násobkem čísla {0}." )
} );
