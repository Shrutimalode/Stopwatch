const resetb = document.getElementById('resetb')
const startb = document.getElementById('startb')
const pauseb = document.getElementById('pauseb')
const lapb = document.getElementById('lapb');
const lapsContainer = document.getElementById('laps');
const toggleIcon = document.getElementById('theme-toggle');

startb.addEventListener('click',start)
resetb.addEventListener('click',reset)
pauseb.addEventListener('click',pause)
lapb.addEventListener('click', lap);

let interval=null

let second = 0
let minute = 0
let hour = 0

const secondEl = document.getElementById('second');
const minuteEl = document.getElementById('minute');
const hourEl = document.getElementById('hour');

function start(){
    changebuttoncolor('start')
      if (interval) return;
 interval = setInterval(()=>{
   second++

   if(second==59){
    second=0
    minute++
   }

   if(minute==59){
    minute=0;
    hour++
   }

     secondEl.textContent = format(second);
        minuteEl.textContent = format(minute);
        hourEl.textContent = format(hour);

 },1000)
}

function reset(){
    changebuttoncolor('reset')
     clearInterval(interval);
    interval = null;
    second = 0;
    minute = 0;
    hour = 0;

    secondEl.textContent = '00';
    minuteEl.textContent = '00';
    hourEl.textContent = '00';
    
      document.getElementById('laps').innerHTML = '';
}

function pause(){
    changebuttoncolor('pause')
     clearInterval(interval);
    interval = null;
}

function format(value) {
    return value < 10 ? '0' + value : value;
}

function changebuttoncolor(buttonName) {
   resetb.classList.remove('active-button')
    startb.classList.remove('active-button')
     pauseb.classList.remove('active-button')
document.getElementById(buttonName + 'b')
.classList.add('active-button')
}

function lap() {
    if (interval !== null) {
        const lapTime = `${format(hour)}:${format(minute)}:${format(second)}`;
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap: ${lapTime}`;
        lapsContainer.appendChild(lapItem);
    }

}

toggleIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
        toggleIcon.textContent = '🌞';
    } else {
        toggleIcon.textContent = '🌙';
    }
});
