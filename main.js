var meh = document.getElementById( "iwao" );
 
iwao.addEventListener( "click", function( event ) {
    alert( "Hey you clicked on me!" );
}, false );

$( ".dan" ).on( "click", function() {
    $( "div.dan" ).hide();
});