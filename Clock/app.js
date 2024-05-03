var Hours = document.getElementById('Hours');
var Minutes = document.getElementById('Minutes');
var Seconds = document.getElementById('Seconds');

setInterval(function(){
    var currentDate = new Date();
    
    Hours.innerText = (currentDate.getHours() < 10 ? "0" : "") + currentDate.getHours();
    Minutes.innerText = (currentDate.getMinutes() < 10 ? "0" : "") + currentDate.getMinutes();
    Seconds.innerText = (currentDate.getSeconds() < 10 ? "0" : "") + currentDate.getSeconds();

    // Calculate time until the specified date (06/17/2024)
    var now = new Date();
    var eids = new Date("06/17/2024");
    var when = now.getTime
    var milliseconds = eids - now;
    var seconds = Math.floor(milliseconds / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
    var months = Math.floor(days / 30);
    var years = Math.floor(months / 12);

    console.log("milliseconds=>", milliseconds);
    console.log("seconds=>", seconds);
    console.log("minutes=>", minutes);
    console.log("hours=>", hours);
    console.log("days=>", days);
    console.log("months=>", months);
    console.log("years=>", years);

    var eid = document.getElementById('eid').innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EID UL ADHA Is Arrived !!";
  }
}, 1000);