const surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const coatColores = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const eyesColores = ['black', 'red', 'blue', 'yellow', 'green'];
const fireballColores = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

export const generateWizard = () => {
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

export const generateWizards = (number) => {
  const arr = [];
  for (let i = 0; i < number; i++) {
    arr[i] = generateWizard();
  }
  return arr;
}

export const createWizardElement = function(data) {
  const element = wizardTemplate.cloneNode(true);
  element.querySelector('.setup-similar-label').textContent = data.name;
  element.querySelector('.wizard-coat').style.fill = data.coatColor;
  element.querySelector('.wizard-eyes').style.fill = data.eyesColor;

  return element;
}

export const displayWizards = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    setupListElement.appendChild(createWizardElement(arr[i]));
  }
}
