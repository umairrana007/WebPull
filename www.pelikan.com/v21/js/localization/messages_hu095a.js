/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: HU (Hungarian; Magyar)
 */
js = jQuery.noConflict();
js.extend( js.validator.messages, {
	required: "Kötelező megadni.",
	maxlength: js.validator.format( "Legfeljebb {0} karakter hosszú legyen." ),
	minlength: js.validator.format( "Legalább {0} karakter hosszú legyen." ),
	rangelength: js.validator.format( "Legalább {0} és legfeljebb {1} karakter hosszú legyen." ),
	email: "Érvényes e-mail címnek kell lennie.",
	url: "Érvényes URL-nek kell lennie.",
	date: "Dátumnak kell lennie.",
	number: "Számnak kell lennie.",
	digits: "Csak számjegyek lehetnek.",
	equalTo: "Meg kell egyeznie a két értéknek.",
	range: js.validator.format( "{0} és {1} közé kell esnie." ),
	max: js.validator.format( "Nem lehet nagyobb, mint {0}." ),
	min: js.validator.format( "Nem lehet kisebb, mint {0}." ),
	creditcard: "Érvényes hitelkártyaszámnak kell lennie.",
	remote: "Kérem javítsa ki ezt a mezőt.",
	dateISO: "Kérem írjon be egy érvényes dátumot (ISO).",
	step: js.validator.format( "A {0} egyik többszörösét adja meg." )
} );
