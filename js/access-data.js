








$(document).ready(function(){
$.getJSON( "http://waytoosick.com/rcrds-api/feed.json", function( data ) {
  alert(data);
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

