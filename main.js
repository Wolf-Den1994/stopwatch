const ho = document.getElementById('ho');
const mi = document.getElementById('mi');
const se = document.getElementById('se');
const start = document.getElementById('start');
const stop = document.getElementById('stop');

var flag = false;

function recur() {
  if (flag) return
  let sec = parseInt(se.innerHTML);
  sec += 1;
  if (sec < 10) {
    se.innerHTML = `0${sec}`;
  } else {
    se.innerHTML = `${sec}`;
  }
  if (sec === 60) {
    sec = 0;
    se.innerHTML = `0${sec}`;
    let min = parseInt(mi.innerHTML);
    min += 1;
    if (sec < 10) {
      mi.innerHTML = `0${min}`;
    } else {
      mi.innerHTML = `${min}`;
    }
    if (min === 60) {
      min = 0;
      mi.innerHTML = `0${min}`;
      let hou = parseInt(ho.innerHTML);
      hou += 1;
      if (min < 10) {
        ho.innerHTML = `0${hou}`;
      } else {
        ho.innerHTML = `${hou}`;
      }
    }
  }
  setTimeout(recur, 1000);
}

function fnstop() {
  flag = true;
  // start.addEventListener('click', fnstart);
}

function fnstart() {
  flag = false;
  recur()
  start.removeEventListener('click', fnstart);
}

start.addEventListener('click', fnstart);
stop.addEventListener('click', fnstop);