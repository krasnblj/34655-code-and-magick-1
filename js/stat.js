'use strict';

window.renderStatistics = function (ctx, names, times) {

  // Тень
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  // Облако
  ctx.fillStyle = 'rgb(255,255,255)';
  ctx.fillRect(100, 10, 420, 270);

  // Текст
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  // Считаем максимальное время
  var maxTime = 0;
  for (var j = 0; j < times.length; j++) {
    if (times[j] > maxTime) {
      maxTime = times[j];
    }
  }

  // Графики
  var hCol = 0;
  var xPos = 0;

  for (var i = 0; i < names.length; i++) {
    hCol = 150 / maxTime * times[i];
    xPos = 120 + 90 * i;

    // Выводим очки
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), xPos, 240 - hCol);
    // Выводим текст
    ctx.fillText(names[i], xPos, 265);

    // Выводим график
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + (Math.random() * 0.7 + 0.2).toFixed(2) + ')';
    }
    ctx.fillRect(xPos, 245 - hCol, 40, hCol);
  }

};
