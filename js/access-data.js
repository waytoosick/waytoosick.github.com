








$(document).ready(function(){
	$.getJSON("http://waytoosick.com/rcrds-api/nowhite.json", function (jsonobj) {
    	alert(jsonobj);
    	alert("NAME=" + jsonobj.name);
	});
});




