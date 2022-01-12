var things = ['USA', 'Germany', 'USSR', 'Britain', 'Japan', 'China', 'Italy', 'Sweden', 'Isreal(If owned)'];
var thingsdos = ['Reserve', '1.0', '1.3', '1.7', '2.0', '2.3', '2.7', '3.0', '3.3', '3.7', '4.0', '4.3', '4.7', '5.0', '5.3', '5.7', '6.0', '6.3', '6.7', '7.0', '7.3', '7.7', '8.0', '9.0', '10.0', '10.3', '10.7', '11.0', '11.3'];
var thingstres = ['Air', 'Ground', 'Naval'];
var thing = things[Math.floor(Math.random()*things.length)];
var thingdos = thingsdos[Math.floor(Math.random()*thingsdos.length)];
var thingtres = thingstres[Math.floor(Math.random()*thingstres.length)];
function myFunction() {
    document.getElementById("demo").innerHTML = ('You shall play: ' + thing);
}

function battleFunction() {
    document.getElementById("demotwo").innerHTML = ('The BR will be: ' + thingdos);
}

function modeFunction() {
    document.getElementById("demothree").innerHTML = ('The mode will be: ' + thingtres);
}

function resetFunction() {
    location.reload();
}