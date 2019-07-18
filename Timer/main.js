let time = 10;
let time1 = 5940;

function id(id) {
  return document.getElementById(id);
};

function Timer(obj) {
  this.time = obj.time;
  this.onTick = obj.onTick || null;
  this.intervalValue = obj.intervalValue || null;
  this.intervalUpdateTimer = obj.intervalUpdateTimer || null;
  this.turnOn = obj.turnOn;
  this.permission = obj.permission;
  this.startTimer1 = () => {
    if (this.turnOn == true && !this.permission) {
      id(`button_Timer1`).innerText = `Stop`;
      this.interval = setInterval(this.update, this.intervalValue);
      this.permission = true;
      this.turnOn = false;
    } else if (!this.turnOn) {
      id(`button_Timer1`).innerText = `Start`;
      this.turnOn = true;
      this.stop();
      return this.permission = false;
    }
  }
  this.startTimer2 = () => {
    if (this.turnOn == true && !this.permission) {
      id(`button_Timer2`).innerText = `Stop`;
      this.interval = setInterval(this.update, this.intervalValue);
      this.permission = true;
      this.turnOn = false;
    } else if (!this.turnOn) {
      id(`button_Timer2`).innerText = `Start`;
      this.turnOn = true;
      this.stop();
      return this.permission = false;
    }
  }
  this.stop = () => {
    clearInterval(this.interval);

  }
  this.update = () => {
    this.time > 0 ? this.time -= this.intervalUpdateTimer : this.stop();
    this.onTick ? this.onTick() : void 0;
    return this.get();
  };
  this.get = () => {
    return this.time;
  };
}

function tick() {
  id(`sec`).innerHTML = pad(timer1.get() % 60);
  id(`min`).innerHTML = pad(parseInt(timer1.get() / 60));
  id(`slider`).style.width = timer1.get() / time * 95 + "%";

  function pad(val) {
    let valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  }
};

function tick1() {
  id(`sec1`).innerHTML = pad(timer2.get() % 60);
  id(`min1`).innerHTML = pad(parseInt(timer2.get() / 60));
  id(`slider1`).style.width = timer2.get() / time1 * 95 + "%";

  function pad(val) {
    let valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  }
};
const timer1 = new Timer({
  time: time,
  onTick: tick,
  intervalValue: 1000,
  intervalUpdateTimer: 1,
  turnOn: true,
  permission: false
});
id(`button_Timer1`).addEventListener(`click`, () => {
  timer1.startTimer1();
});
requestAnimationFrame(tick);
const timer2 = new Timer({
  time: time1,
  onTick: tick1,
  intervalValue: 2000,
  intervalUpdateTimer: 2,
  turnOn: true,
  permission: false
});
timer2.startTimer2();
id(`button_Timer2`).addEventListener(`click`, () => {
  timer2.startTimer2();
});
requestAnimationFrame(tick1);
