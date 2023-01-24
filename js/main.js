$( '#sticky-top-navbar .navbar-nav a' ).on( 'click', function () {
    $( '#sticky-top-navbar .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
    $( this ).parent( 'li' ).addClass( 'active' );
});

$("#btnToggleKine").click(function(){
    $("#collapseOsteo").removeClass("show");
    $("#collapseCabinet").removeClass("show");
});

$("#btnToggleOsteo").click(function(){
    $("#collapseKine").removeClass("show");
    $("#collapseCabinet").removeClass("show");
});

$("#btnToggleCabinet").click(function(){
    $("#collapseKine").removeClass("show");
    $("#collapseOsteo").removeClass("show");
});