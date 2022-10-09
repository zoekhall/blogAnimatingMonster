const transformM = document.getElementById("transformMonst")
const durationM = document.getElementById("durMonst")
const delayM = document.getElementById("delMonst")
const timingM = document.getElementById('timMonst')
const aliveM = document.getElementById('aliveMonst')
const transitioning = document.getElementById('transitionImg')
const framing = document.getElementById('frameImg')
const transformer = document.getElementById('transformImg')

durationM.style.opacity = '0%'
delayM.style.opacity = '0%'
timingM.style.opacity = '0%'
transformM.style.opacity = '0%'
aliveM.style.opacity = '0%'
transitioning.style.opacity = '0%'
framing.style.opacity = '0%'
transformer.style.opacity = '0%'


//ANIMATE THE MONSTER
const thunder = document.getElementById("thunder");
const aliveness = document.getElementById("aliveness");

let frankStatus = false;

const makeItAlive = function () {
  if (!frankStatus) {
    frankStatus = true;
    thunder.volume = 0.04;
    aliveness.volume = 0.2;
    thunder.play();
    aliveness.play();
    aliveM.style.left = '100px'
    aliveM.style.animation = "slide-in-bottom 8s linear both";

  } else {
    frankStatus = false;
    thunder.volume = 0.00;
    aliveness.volume = 0.00;
  }
}

// BASIC TRANSFORMS//
function transform(param) {
  transitioning.style.opacity = '0%'
  framing.style.opacity = '0%'
  transformer.style.opacity = '0%'
  durationM.style.opacity = '0%'
  delayM.style.opacity = '0%'
  timingM.style.opacity = '0%'
  transformM.style.opacity = '100%'

  if (param === 'skew') {
    transformM.style.transform = "skew(40deg, 40deg)";
    setTimeout(() => backToNormal(transformM), 1500)
  } else if (param === 'scale') {
    transformM.style.transform = "scale(0.5, 0.5)";
    setTimeout(() => backToNormal(transformM), 1500)

  }
  else if (param === 'rotate') {
    transformM.style.transform = "rotate(60deg)";
    setTimeout(() => backToNormal(transformM), 1500)

  } else if (param === 'translate') {
    transformM.style.transform = "translate(-200px, -100px)";
    setTimeout(() => backToNormal(transformM), 1500)

  }
}

//TRANSITIONS//
function duration() {
  transitioning.style.opacity = '0%'
  framing.style.opacity = '0%'
  transformer.style.opacity = '0%'
  durationM.style.opacity = '100%'
  delayM.style.opacity = '0%'
  timingM.style.opacity = '0%'
  transformM.style.opacity = '0%'

  durationM.style.transitionDuration = '2s'
  durationM.style.transform = "skew(60deg, 60deg)";

  setTimeout(() => backToNormal(durationM), 3500)

}

function delay() {
  transitioning.style.opacity = '0%'
  framing.style.opacity = '0%'
  transformer.style.opacity = '0%'
  durationM.style.opacity = '0%'
  delayM.style.opacity = '100%'
  timingM.style.opacity = '0%'
  transformM.style.opacity = '0%'

  delayM.style.transitionDelay = '2s'
  delayM.style.transform = "rotate(50deg)";

  setTimeout(() => backToNormal(delayM), 3500)

}

function timing() {
  transitioning.style.opacity = '0%'
  framing.style.opacity = '0%'
  transformer.style.opacity = '0%'
  durationM.style.opacity = '0%'
  delayM.style.opacity = '0%'
  timingM.style.opacity = '100%'
  transformM.style.opacity = '0%'

  timingM.style.transitionDuration = '2s';
  timingM.style.transform = 'translate(500px)';
  timingM.style.transitionTimingFunction = 'ease-in-out';

  setTimeout(() => backToNormal(timingM), 3500)
}

function backToNormal(monster) {
  monster.style.margin = 'margin: -35px 0 0 -35px';
  monster.style.transitionDuration = '0s';
  monster.style.transitionDelay = '0s';
  monster.style.transform = "skew(0deg, 0deg)";
  monster.style.transform = "scale(1)";
  monster.style.transform = "rotate(360deg)";
  monster.style.transform = "translate(0px, 0px)";
  monster.style.transform = 'none';
}

codeStatus = false;

function showCode(action) {

  if (!codeStatus) {
    codeStatus = true;
    transformM.style.opacity = '0%'
    aliveM.style.opacity = '0%'
    transitioning.style.opacity = '0%'
    framing.style.opacity = '0%'
    transformer.style.opacity = '0%'
    if (action === 'transform') {
      transitioning.style.opacity = '0%'
      framing.style.opacity = '0%'
      transformer.style.opacity = '100%'
    }
    else if (action === 'transition') {
      transitioning.style.opacity = '100%'
      framing.style.opacity = '0%'
      transformer.style.opacity = '0%'
    }
    else if (action === 'frame') {
      transitioning.style.opacity = '0%'
      framing.style.opacity = '100%'
      transformer.style.opacity = '0%'
    }
  }
}

function closeCode() {
  codeStatus = false;
  transitioning.style.opacity = '0%'
  framing.style.opacity = '0%'
  transformer.style.opacity = '0%'
}

//DROPDOWN TOOLBAR
function basic() {
  document.getElementById("basicDrop").classList.toggle("show");
}
function trans() {
  document.getElementById("transDrop").classList.toggle("show");

}

function code() {
  document.getElementById("codeDrop").classList.toggle("show");
  if (codeStatus === true) {
    closeCode();
  }
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
