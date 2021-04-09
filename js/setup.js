const surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const coatColores = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const eyesColores = ['black', 'red', 'blue', 'yellow', 'green'];
const fireballColores = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

const generateWizard = () => {
  const name = names[getRandomInt(names.length)];
  const surname = surnames[getRandomInt(surnames.length)];
  const coatColor = coatColores[getRandomInt(coatColores.length)];
  const eyesColor = eyesColores[getRandomInt(eyesColores.length)];

  return {
    name: name + ' ' + surname,
    coatColor: coatColor,
    eyesColor: eyesColor,
  };
}

const generateWizards = (number) => {
  const arr = [];
  for (let i = 0; i < number; i++) {
    arr[i] = generateWizard();
  }
  return arr;
}

console.log(generateWizards(4))

const wizards = generateWizards(4);

const wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
const data = wizards[0];
console.log(data);

const setupElement = document.querySelector('.setup');
const setupSimilarElement = setupElement.querySelector('.setup-similar');
const setupListElement = setupSimilarElement.querySelector('.setup-similar-list');

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
