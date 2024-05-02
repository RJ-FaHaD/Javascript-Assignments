var Hours = document.getElementById('Hours')
var Minutes = document.getElementById('Minutes')
var Seconds = document.getElementById('Seconds')

setInterval(function(){
    var currentDate = new Date();
    
    Hours.innerText = (currentDate.getHours()<10?"0":"") + currentDate.getHours();
    Minutes.innerText = (currentDate.getMinutes()<10?"0":"") + currentDate.getMinutes();
    Seconds.innerText = (currentDate.getSeconds()<10?"0":"") + currentDate.getSeconds();

    var amOrPm = AM
if(Hours >=12){
    amOrPm = Pm
}
if(Hours >12){
    Hours = Hours-12
}
var Clock = document.getElementById('Clock').innerHTML = Hours +":" + Minutes +":" + Seconds +":";
    
 
},1000);




