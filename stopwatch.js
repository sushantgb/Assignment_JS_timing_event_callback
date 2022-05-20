 //initialization of min and sec variables
 let min = 0;
 let sec = 0;
 //count variable to update second
 let count = 0;
 //watch variable to update and store time value
 let watch;
 //initialization of variables for updating the min and sec
 const updateMin = document.getElementById('min');
 const updateSec = document.getElementById('sec');
 //initialization of variables for storing button events
 const startBtn = document.getElementById('start-button');
 const stopBtn = document.getElementById('stop-button');
 const resetBtn = document.getElementById('reset-button');

 //adding event for start button
 startBtn.addEventListener('click', function(){
     //disabling the start button after it starts
     startBtn.disabled = true; 
     //calling the function startTime for updating the clock
     watch = setInterval(startTime, 10);
 })
 //adding event for stop button
 stopBtn.addEventListener('click', function(){
     //clearing the interval to stop the clock
     clearInterval(watch);
     //enabling the start button to restart the clock
     startBtn.disabled = false;
 })
 //adding event for reset button
 resetBtn.addEventListener('click', function(){
     //clearing the interval to stop the clock
     clearInterval(watch);
     //enabling the start button to restart the clock
     startBtn.disabled = false;
     //resetting all the values and printing them as zero
     min = 0;
     sec = 0;
     updateMin.innerHTML = "00";
     updateSec.innerHTML = "00";
 })
 //startTime function definition to update stopwatch
 function startTime(){
     //increment in the count variable
     count++;
     //checking condition for count variable to update seconds
     if (count > 99){
         //increment in seconds
         sec++;
         //restarting count
         count =0;
         //for adding zero before a single digit value
         updateSec.innerHTML = "0" + sec;
     }
     //if value is in two digits
     if(sec > 9){
         updateSec.innerHTML = sec;
     }
     //if second completes its cycle of 60 seconds
     if(sec > 59){
         //updating minute
         min++;
         sec = 0; //restarting seconds and count
         count = 0;
         updateMin.innerHTML = "0" + min;
     }
     //if value is more than single digit
     if(min > 9){
         updateMin.innerHTML = min;
     }
 }