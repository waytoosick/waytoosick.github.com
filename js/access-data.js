








$(document).ready(function(){
$.getJSON( "http://waytoosick.com/rcrds-api/nowhite.json", function( data ) {
  alert(data.name);
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});
});

