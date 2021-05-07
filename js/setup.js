import {getRandomInt} from './util.js';
import {generateWizards, coatColores, eyesColores, fireballColores} from './data.js';
import {getData} from './server.js'

// console.log(generateWizards(4))

const wizards = generateWizards(4);

const wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
// const data = wizards[0];
// console.log(data);



// getData(onServerSuccess, onServerError);

const setupElement = document.querySelector('.setup');
const setupSimilarElement = setupElement.querySelector('.setup-similar');
const setupListElement = setupSimilarElement.querySelector('.setup-similar-list');

const titleElement = setupElement.querySelector('.setup-title');
titleElement.addEventListener('mousedown', function(evt) {
  console.log(evt);
  const startX = evt.clientX;
  const startY = evt.clientY;

  const setupStartX = setupElement.offsetLeft;
  const setupStartY = setupElement.offsetTop;
  // const currentLeft = setupElement.offsetLeft;
  // const nextLeft = currentLeft - 10;
  // setupElement.style.left = mouseX + 'px';
  // setupElement.style.top = mouseY + 'px';

  const mousemoveListener = function(mousemoveEvt) {
    console.log(mousemoveEvt.clientX, mousemoveEvt.clientY);
    const dX = mousemoveEvt.clientX - startX;
    const dY = mousemoveEvt.clientY - startY;
    console.log(dX, dY);

    const nextX = setupStartX  + dX;
    const nextY = setupStartY + dY;
    setupElement.style.left = nextX + 'px';
    setupElement.style.top = nextY + 'px';
  }

  const mouseupListener = function() {

    document.removeEventListener('mousemove', mousemoveListener)
    document.removeEventListener('mouseup', mouseupListener);
  }

  document.addEventListener('mousemove', mousemoveListener)
  document.addEventListener('mouseup', mouseupListener)

})

setupSimilarElement.classList.remove('hidden');

const createWizardElement = function(data) {
  const element = wizardTemplate.cloneNode(true);
  element.querySelector('.setup-similar-label').textContent = data.name;
  element.querySelector('.wizard-coat').style.fill = data.colorCoat;
  element.querySelector('.wizard-eyes').style.fill = data.colorEyes;

  return element;
}

const displayWizards = (arr) => {
  setupListElement.innerHTML = '';
  for (let i = 0; i < arr.length; i += 1) {
    setupListElement.appendChild(createWizardElement(arr[i]));
  }
}

let data = [];
let colorEyes = '';
let colorCoat = '';
const calcWeight = (obj) => {
  let weight = 0;
  if (obj.colorCoat === colorCoat) {
    weight += 1;
  }
  if (obj.colorEyes === colorEyes) {
    weight += 1;
  }
  return weight;
}

const updateWizards = () => {
  console.log(colorEyes);
  const sorted = data.slice(0).sort(function(a, b) {
    const weightA = calcWeight(a);
    const weightB = calcWeight(b);

    return weightB - weightA;
  });
  console.log(sorted);

  displayWizards(sorted.slice(0, 4));
}


const onServerSuccess = function(arr) {
  data = arr;
  console.log(arr);
  updateWizards();
}

const onServerError = function(error) {

}

const setupOpenElement = document.querySelector('.setup-open');
setupOpenElement.addEventListener('click', function() {
  setupElement.classList.remove('hidden');
  getData(onServerSuccess, onServerError);
});

const setupCloseElement = setupElement.querySelector('.setup-close');
setupCloseElement.addEventListener('click', function() {
  setupElement.classList.add('hidden');
});



document.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 13) {
    setupListElement.classList.remove('hidden');
  }

});

document.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    setupListElement.classList.add('hidden');
  }
});



const wizardCoat = document.querySelector('.wizard-coat');
// const wizardCoat = document.querySelector('.setup-wizard .wizard-coat');

wizardCoat.addEventListener('click', function () {
  // const coatColor = coatColores[getRandomInt(coatColores.length)];
  wizardCoat.style.fill =  coatColores[getRandomInt(coatColores.length)];
});

const wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');

wizardEyes.addEventListener('click', function () {
  const color = eyesColores[getRandomInt(eyesColores.length)];
  colorEyes = color;
  wizardEyes.style.fill =  color;
  updateWizards();
});

const wizardFireball = document.querySelector('.setup-fireball-wrap');

wizardFireball.addEventListener('click', function () {
  wizardFireball.style.backgroundColor =  fireballColores[getRandomInt(fireballColores.length)];
});



// const wizardCoat = document.querySelector('.setup-wizard .wizard-coat');

wizardCoat.addEventListener('click', function () {
  colorCoat = coatColores[getRandomInt(coatColores.length)];
  console.log(colorCoat);
  wizardCoat.style.fill = colorCoat;
  updateWizards();
});

// const wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');

// const wizardFireball = document.querySelector('.setup-fireball-wrap');

wizardFireball.addEventListener('click', function () {
  wizardFireball.style.backgroundColor =  fireballColores[getRandomInt(fireballColores.length)];
});
