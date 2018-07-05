//  LANGUAGES-INTERNATIONALIZATION

var LANG = null;

function loadLanguage(url){	
	if (url==null) url="/languages/";
	if (!LANG || LANG.length > 2) 
		LANG = CONFIG.DefaultLanguage;
	var i=0;
	for (i=CONFIG.LANGUAGES.length-1; i>=0; i--){
		if (LANG == CONFIG.LANGUAGES[i].shortName) break;
	}
	var shortn, file; 
	if (i >= 0) {
		shortn = CONFIG.LANGUAGES[i].shortName;
		file = url+CONFIG.LANGUAGES[i].file;
	} else {
		LANG = shortn = 'en';
		file = url+'language.en.json';
	}
	$.ajax({
		type:"GET",
		url: file,
		success: function(data, textStatus){
			$.i18n(LANG);
			$.i18n(shortn+".dashboard", data);
			reloadTexts();
   		},
		async: false,
		dataType: "json"
	});
}

function _(str, args) { 
    return $.i18n("dashboard", str, args);
}

function reloadTitle() {
	var key = document.title;
	/* title was already reloaded */
	if (key.indexOf(" - ") != -1)
		return;
	var value = _(key);
	var l = value != "" ? " - " : "";
	var title = _("GATEWAY_NAME") + l + value;
	document.title = title;
}

function reloadTexts(){	
	$(".trad").each(function (i) {
		var key =jQuery(this).attr("key");
		var value= _(key);
		jQuery(this).html(value);
	});	
	$("input.mlipt").each(function (i) {
		var key = $(this).attr("key");
		var value= _(key);
		$(this).val(value);
	});
	reloadTitle();
}
