import {getRandomInt, getMaxItem} from './util.js';
import {renderCloud, renderText} from './data.js';

const CLOUD_X = 100;
const CLOUD_Y = 10;
const CLOUD_width = 420;
const CLOUD_height= 270;
const CLOUD_gap = 10;

const text_size = 16;

const column_gap = 50;
const column_width = 40;
const column_height = 150;


window.renderStatistics = function (ctx, names, times) {

    renderCloud(ctx);
    renderText(ctx);

    const columnStartX = CLOUD_X;
    const columnStartY = CLOUD_Y + CLOUD_height - 20;

    console.log(times);
    const maxTime = getMaxItem(times);

    console.log(names.length);
    for (let i = 0; i < names.length; i++) {
        const textX = columnStartX + column_gap * (i + 1) + column_width * i;
        const textY = columnStartY;
        ctx.fillText(names[i], textX, textY);

        const rectX = textX;
        const rectHeight = column_height * times[i] / maxTime;
        const rectY = columnStartY - text_size - rectHeight;
        if (names[i] == 'Вы') {
          ctx.fillStyle = "rgba(255, 0, 0, 1)";
        } else {
          ctx.fillStyle = `hsl(237, ${getRandomInt(100)}%, 30%)`
        }
        ctx.fillRect(rectX, rectY, column_width, rectHeight)

        ctx.fillStyle = 'black';
        const timeX = rectX;
        const timeY = rectY - text_size / 2;
        const time = Math.floor(times[i]);
        ctx.fillText(time, timeX, timeY);
    }
}


