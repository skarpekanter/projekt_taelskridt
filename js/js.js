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

var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&lang=da&appid=ada18415cf7868937be58121015ce9bc')

.then(response => response.json())
.then(data => {
    var nameValue = data['name']
    var tempValue = data['main']['temp'] + '°'
    var descValue = data['weather'][0]['description'];
    
    name.innerHTML = nameValue;
    temp.innerHTML = tempValue;
    desc.innerHTML = descValue;
})

})