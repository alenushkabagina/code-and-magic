const CLOUD_X = 100;
const CLOUD_Y = 10;
const CLOUD_width = 420;
const CLOUD_height= 270; 
const CLOUD_gap = 10;
const histogram_width = 40;
const histogram_height = 150;
const histogram_x = 150;
const histogram_y = 100;

const text_size = 16;

const column_gap = 50;
const column_width = 40;
const column_height = 150;

const renderCloud = function(ctx) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)"; 
    ctx.fillRect (CLOUD_X + CLOUD_gap, CLOUD_Y + CLOUD_gap, CLOUD_width, CLOUD_height); 

    ctx.fillStyle = "white"; 
    ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_width, CLOUD_height);
}

const renderText = function(ctx ) {
    const textX = CLOUD_X + 20;
    const textY = CLOUD_Y + 20 + text_size;
    ctx.fillStyle = "black";    
    ctx.fillText("Ура вы победили!", textX, textY); 
    ctx.fillText("Список результатов:", textX, textY + 20); 
}

window.renderStatistics = function (ctx, names, times) {

    renderCloud(ctx);
    renderText(ctx);

    const columnStartX = CLOUD_X;
    const columnStartY = CLOUD_Y + CLOUD_height - 20;

    console.log(times);

    console.log(names.length);
    for (let i = 0; i < names.length; i++) {
        const textX = columnStartX + column_gap * (i + 1) + column_width * i;
        const textY = columnStartY;
        ctx.fillText(names[i], textX, textY);

        const rectX = textX;
        const rectY = columnStartY - text_size - column_height;
        ctx.fillRect(rectX, rectY, column_width, column_height) 

        const timeX = rectX;
        const timeY = rectY - text_size / 2;
        const time = Math.floor(times[i]);
        ctx.fillText(time, timeX, timeY);

    }   


    // ctx.fillStyle = "rgba(255, 0, 0, 1)"; 
    // ctx.fillRect(histogram_x, histogram_y + 50, histogram_width, histogram_height - 50);

    // ctx.fillStyle = "indigo"; 
    // ctx.fillRect(histogram_x + 90, histogram_y, histogram_width, histogram_height);

    // ctx.fillStyle = "indigo"; 
    // ctx.fillRect(histogram_x + 180, histogram_y + 110, histogram_width, histogram_height - 110);

    // ctx.fillStyle = "indigo"; 
    // ctx.fillRect(histogram_x + 270, histogram_y + 100, histogram_width, histogram_height - 100);




    // ctx.fillText("2725", ) 
}


