
$(document).ready(function() {
	$('select').material_select();

	$('input.autocomplete').autocomplete({
	    data: {
	      "Arica": null,
	      "Iquique": null,
	      "Calama": null
	    }
	});
	
	$('.datepicker').pickadate({
		selectMonths: true, // Creates a dropdown to control month
		selectYears: 15 // Creates a dropdown of 15 years to control year
	});

});