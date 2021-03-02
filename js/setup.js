// const Иван = 'строка имени';

const surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const coatColores = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const eyesColores = ['black', 'red', 'blue', 'yellow', 'green'];

const generateWizard = () => {

    surname: surnames[getRandomInt(0, surnames.length)],
    // coatColor: coatColores[getRandomInt(0, coatColores.length)],
    // eyesColor: eyesColores[getRandomInt(0, eyesColores.length)],
  return {

    name: names[getRandomInt(0, names.length)],

  };
}

const generateWizards = (number) => {
  const arr = [];
  for (let i = 0; i < number; i++) {
    arr[i] = generateWizard();
  }
  return arr;
}

// console.log(generateWizards(4))
