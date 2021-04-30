import {getRandomInt} from './util.js'
const surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
export const coatColores = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
export const eyesColores = ['black', 'red', 'blue', 'yellow', 'green'];
export const fireballColores = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

const CLOUD_X = 100;
const CLOUD_Y = 10;
const CLOUD_width = 420;
const CLOUD_height= 270;
const CLOUD_gap = 10;

const text_size = 16;

const column_gap = 50;
const column_width = 40;
const column_height = 150;


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





export const renderCloud = function(ctx) {
  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect (CLOUD_X + CLOUD_gap, CLOUD_Y + CLOUD_gap, CLOUD_width, CLOUD_height);

  ctx.fillStyle = "white";
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_width, CLOUD_height);
}

export const renderText = function(ctx ) {
   const textX = CLOUD_X + 20;
   const textY = CLOUD_Y + 20 + text_size;
   ctx.fillStyle = "black";
   ctx.fillText("Ура вы победили!", textX, textY);
   ctx.fillText("Список результатов:", textX, textY + 20);
}
