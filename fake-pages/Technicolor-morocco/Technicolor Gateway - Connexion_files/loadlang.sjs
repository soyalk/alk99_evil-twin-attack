LANG = 'fr';

$.ajax({
	type:"GET",
	url: "/config.json.txt",
	success: function(data, textStatus){
		CONFIG = data.CONFIG;
		loadLanguage();
	},
	async: false,
	dataType: "json"
});

$(document).ready(function(){
	reloadTexts();
});
