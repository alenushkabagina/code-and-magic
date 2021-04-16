import {getRandomInt} from './util.js';
import {displayWizards, createWizardElement, generateWizards} from './data.js';

console.log(generateWizards(4))

const wizards = generateWizards(4);

const wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
const data = wizards[0];
console.log(data);

const setupElement = document.querySelector('.setup');
const setupSimilarElement = setupElement.querySelector('.setup-similar');
const setupListElement = setupSimilarElement.querySelector('.setup-similar-list');

setupSimilarElement.classList.remove('hidden');
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
