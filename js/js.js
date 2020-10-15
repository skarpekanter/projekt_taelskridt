$(document).ready(function(){
    // KODE HERFRA
    $('#radio').hide();

    $('#next').click(function(){
        $('#navn').hide();
        $('#radio').show();
} );

    // Klik på #valgBtn
        $('#valgBtn').click(
            function(){
                $('#radio').hide(); //Skjul Radio Buttons
            }
        );

    //KODE SLUT

}); // Må ikke slettes