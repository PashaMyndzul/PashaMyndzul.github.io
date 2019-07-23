function id(id) {
  return document.getElementById(id);
}
class Timer {
  constructor(obj) {
    this.time = obj.time || null;
    this.onTick = obj.onTick || null;
    this.intervalValue = obj.intervalValue || null;
    this.intervalUpdateTimer = obj.intervalUpdateTimer || null;
    this.turnOn = obj.turnOn;
    this.permission = obj.permission;
    this.domElemSec = obj.domElemSec;
    this.domElemMin = obj.domElemMin;
    this.buttonClick = obj.buttonClick;
    this.line = obj.line;
  }
  startTimer() {
    if (this.turnOn == true && !this.permission) {
      id(`${this.buttonClick}`).innerText = `Stop`;
      this.interval = setInterval(() => {
        this.update()
      }, this.intervalValue);
      this.permission = true;
      this.turnOn = false;
    } else if (!this.turnOn) {
      id(`${this.buttonClick}`).innerText = `Start`;
      this.turnOn = true;
      this.stop();
      return this.permission = false;
    }
  }
  stop() {
    clearInterval(this.interval);
  }
  update() {
    let endpoint = 0;
    this.slider();
    this.time > 0 ? this.time -= this.intervalUpdateTimer : this.stop();
    if (this.time <= 0) {
      return id(`${this.domElemSec}`).innerHTML = this.pad(endpoint);
    }
    this.tick ? this.tick() : void 0;
    return this.time;
  }
  slider() {
    let progress = document.querySelector(`.${this.line}`);
    if (this.time <= this.intervalUpdateTimer) {
      progress.style.width = 0;
    }
    let sliderTick = (this.time / this.intervalUpdateTimer);
    let part = progress.clientWidth / sliderTick;
    progress.style.width = progress.clientWidth - part + `px`;
    if (this.time <= 0) {
      progress.style.width = 0;
    }
  }
  pad(val) {
    let valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  }
  tick() {
    id(`${this.domElemSec}`).innerHTML = this.pad(this.time % 60);
    id(`${this.domElemMin}`).innerHTML = this.pad(parseInt(this.time / 60));
  }
}
const timer1 = new Timer({
  time: 3,
  intervalValue: 1000,
  intervalUpdateTimer: 2,
  turnOn: true,
  permission: false,
  domElemSec: `sec`,
  domElemMin: `min`,
  buttonClick: `button_Timer1`,
  line: `slider1`
});
id(`button_Timer1`).addEventListener(`click`, () => {
  timer1.startTimer();
});
const timer2 = new Timer({
  time: 2,
  intervalValue: 1000,
  intervalUpdateTimer: 2,
  turnOn: true,
  permission: false,
  domElemSec: `sec1`,
  domElemMin: `min1`,
  buttonClick: `button_Timer2`,
  line: `slider2`
});
timer2.startTimer();
id(`button_Timer2`).addEventListener(`click`, () => {
  timer2.startTimer();

});
timer1.tick();
timer2.tick();
