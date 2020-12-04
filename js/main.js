$( '#sticky-top-navbar .navbar-nav a' ).on( 'click', function () {
    console.log('bite');
    $( '#sticky-top-navbar .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
    $( this ).parent( 'li' ).addClass( 'active' );
});
