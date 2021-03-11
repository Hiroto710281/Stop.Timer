'use strict';

{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const result = document.getElementById('result');

  let startTime;
  let timeoutID;
  let elapasedTime = 0;

  function countUP() {
    // console.log(Date.now() - startTime);
   const d = new Date(Date.now() - startTime + elapasedTime);
   const m = String(d.getMinutes()).padStart(2,'0');
   const s = String(d.getSeconds()).padStart(2,'0');
   const ms = String(d.getMilliseconds()).padStart(3,"0");
   timer.textContent = `${m}:${s}.${ms}`;


    timeoutID = setTimeout( () =>{
    countUP();
    },10);
  }

function setButtonStateInitial() {
  start.classList.remove('inactive');
  stop.classList.add('inactive');
  result.classList.add('inactive');
  
}
function setButtonStateRunning() {
  start.classList.add('inactive');
  stop.classList.remove('inactive');
  result.classList.add('inactive');


}
function setButtonStateStopped() {
  start.classList.remove('inactive');
  stop.classList.add('inactive');
  result.classList.remove('inactive');
}

  
  start.addEventListener('click',() => {
    if (start.classList.contains('inactive') === true) {
      return;
    }
    
    setButtonStateRunning();
    startTime = Date.now();
    countUP()
    });
    

  stop.addEventListener('click',() => {
    if (stopt.classList.contains('inactive') === true) {
      return;
    }
    setButtonStateStopped();
    clearTimeout(timeoutID);
    elapasedTime += Date.now() - startTime
    });





  result.addEventListener('click',() => {
    if (result.classList.contains('inactive') === true) {
      return;
    }
    setButtonStateInitial
    timer.textContent = '00:00.000';
    elapasedTime = 0;
    });


}