/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: RO (Romanian, limba română)
 */
js = jQuery.noConflict();
js.extend( js.validator.messages, {
	required: "Acest câmp este obligatoriu.",
	remote: "Te rugăm să completezi acest câmp.",
	email: "Te rugăm să introduci o adresă de email validă",
	url: "Te rugăm sa introduci o adresă URL validă.",
	date: "Te rugăm să introduci o dată corectă.",
	dateISO: "Te rugăm să introduci o dată (ISO) corectă.",
	number: "Te rugăm să introduci un număr întreg valid.",
	digits: "Te rugăm să introduci doar cifre.",
	creditcard: "Te rugăm să introduci un numar de carte de credit valid.",
	equalTo: "Te rugăm să reintroduci valoarea.",
	extension: "Te rugăm să introduci o valoare cu o extensie validă.",
	maxlength: js.validator.format( "Te rugăm să nu introduci mai mult de {0} caractere." ),
	minlength: js.validator.format( "Te rugăm să introduci cel puțin {0} caractere." ),
	rangelength: js.validator.format( "Te rugăm să introduci o valoare între {0} și {1} caractere." ),
	range: js.validator.format( "Te rugăm să introduci o valoare între {0} și {1}." ),
	max: js.validator.format( "Te rugăm să introduci o valoare egal sau mai mică decât {0}." ),
	min: js.validator.format( "Te rugăm să introduci o valoare egal sau mai mare decât {0}." )
} );
