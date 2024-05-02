var Hours = document.getElementById('Hours')
var Minutes = document.getElementById('Minutes')
var Seconds = document.getElementById('Seconds')
var eid = document.getElementById('eid')

setInterval(function(){
    var currentDate = new Date();
    
    Hours.innerText = (currentDate.getHours()<10?"0":"") + currentDate.getHours();
    Minutes.innerText = (currentDate.getMinutes()<10?"0":"") + currentDate.getMinutes();
    Seconds.innerText = (currentDate.getSeconds()<10?"0":"") + currentDate.getSeconds();

//if(Hours.innerText >=12){
  //  amPm.innerText = Pm

//else( amPm.innerText = Am
//Date.getTime()
// Jan 1 1970 se abhe tk jitne milleseconds guzar gae wo lekar aajata he..

 var now = new Date();
 var eids = new Date("06/17/2024");  //mm/dd/yyyy var milleseconds = now.getTime();
 var eidsMillseconds = eids.getTime();
 var eids = milleseconds - eidsMillseconds;
 console.log("milleseconds=>", eids);
 console.log("seconds=>", Math.round(eids / 1000));
 console.log("minutes=>", Math.round(eids / 1000 / 60));
console.log("hours=>", Math.round(eids / 1000 / 60 / 60));
console.log("day=>", Math.round(eids / 1000 / 60 / 60 / 24));
 console.log("months=>", Math.round(eids / 1000 / 60 / 60 / 24 / 30));
 console.log("years=>", Math.round(eids / 1000 / 60 / 60 / 24 / 30 / 12));




},1000);




