import {getRandomInt} from './util.js';
import {generateWizards} from './data.js';

// console.log(generateWizards(4))

const wizards = generateWizards(4);

const wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
const data = wizards[0];
// console.log(data);

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
  element.querySelector('.wizard-coat').style.fill = data.coatColor;
  element.querySelector('.wizard-eyes').style.fill = data.eyesColor;

  return element;
}

const displayWizards = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    setupListElement.appendChild(createWizardElement(arr[i]));
  }
}


displayWizards(wizards);




const setupOpenElement = document.querySelector('.setup-open');
setupOpenElement.addEventListener('click', function() {
  setupElement.classList.remove('hidden');
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

const wizardCoat = document.querySelector('.setup-wizard .wizard-coat');

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill =  coatColores[getRandomInt(coatColores.length)];
});

const wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill =  eyesColores[getRandomInt(eyesColores.length)];
});

const wizardFireball = document.querySelector('.setup-fireball-wrap');

wizardFireball.addEventListener('click', function () {
  wizardFireball.style.backgroundColor =  fireballColores[getRandomInt(fireballColores.length)];
});
