function setHour() {
    const time = new Date();
    const [hour, min] = [time.getHours(), time.getMinutes()];
    const hourDeg = ((hour % 12) * 60) / 2; 
    const minDeg = (min/60) * (360/12); // 1 hour 30 deg
    const hourRotateDeg = hourDeg + minDeg;
    document.querySelector('#hour-hand').setAttribute('transform',`rotate(${hourRotateDeg})`);
  }
  function setMinute() {
    const time = new Date();
    const minRotateDegree =  360/60 * time.getMinutes(); // 1 min 6 deg
    document.querySelector('#minute-hand').setAttribute('transform',`rotate(${minRotateDegree})`);
  }
  function setSeconds() {
    const time = new Date();
    const secRotateDegree =  360/60 * time.getSeconds(); // 1 sec 6 deg
    document.querySelector('#second-hand').setAttribute('transform',`rotate(${secRotateDegree})`);
  }
  function setDigitalClock() {
    const time = new Date();
    const text = time.toLocaleTimeString('en-US', {hour12: 0, hourCycle: 'h23'}).replace(/^24/,'00');
    document.querySelector('#digital-text').textContent = text;
  }
setHour();
setMinute();
setInterval(_ => {
  setSeconds();
  setDigitalClock();
  (new Date().getSeconds() === 0) && (setMinute () && setHour())}, 1000);
