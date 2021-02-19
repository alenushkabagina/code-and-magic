// const Иван = 'строка имени';
const names = ['Иван', 'Хуан', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const coatColor = [rgb(101, 137, 164), rgb(241, 43, 107), rgb(146, 100, 161), rgb(56, 159, 117), rgb(215, 210, 55), rgb(0, 0, 0)],
const eyesColor = [black, red, blue, yellow, green],

const generateWizard = () => {
  return {
    name: names[getRandomInt(0, names.length)],
    coatColor: '',
    eyesColor: ''
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
