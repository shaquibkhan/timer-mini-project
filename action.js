let clock = document.querySelector('.clock');
let stop = document.querySelector('.stop');
let start = document.querySelector('.start');
const getTime = ()=>{
  let timer;
  stop.addEventListener('click',()=>{
    clearInterval(timer)
  })
  start.addEventListener('click',()=>{
    getTime()
  })
  timer = setInterval(()=>{
    let time = new Date().toLocaleTimeString();
    clock.textContent = time;
  },1000)
}
getTime();