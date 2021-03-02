// const Иван = 'строка имени';

const surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const coatColores = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const eyesColores = ['black', 'red', 'blue', 'yellow', 'green'];

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
