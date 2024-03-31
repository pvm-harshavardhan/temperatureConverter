const Celsius = document.getElementById('cel-input');
const fahrenheit = document.getElementById('fah-input');
const Kelvin = document.getElementById('kel-input');
Celsius.addEventListener("input", function(){
    let c = parseFloat(Celsius.value);
    Kelvin.value = (c + 273).toFixed(2);
    fahrenheit.value = (c * (9/5) + 32).toFixed(2);
});
fahrenheit.addEventListener("input", function(){
    let f = parseFloat(fahrenheit.value);
    Celsius.value = ((f-32) * (5/9)).toFixed(2);
    Kelvin.value = (( (f-32) * (5/9) ) + 273).toFixed(2) ;
});
Kelvin.addEventListener("input", function(){
    let k = parseFloat(Kelvin.value);
    Celsius.value = (k-273 ).toFixed(2) ;
    fahrenheit.value = ( (k-273) * (9/5) +32).toFixed(2);
});