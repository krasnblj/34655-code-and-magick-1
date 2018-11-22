'use strict';

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Виктор', 'Кристоф', 'Люпита', 'Юлия', 'Вашингтон'];
var secondNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

// Определение шаблона
var wizadrTpl = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

// Выбор рандомного элемента массива
var rnd = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

// Создане рандомного волшебника
var rndWizard = function (fNames, sNames, cClr, eClr) {
  return {
    name: rnd(fNames) + ' ' + rnd(sNames),
    coatColor: rnd(cClr),
    eyesColor: rnd(eClr)
  };
};

// Генерируем четырёх рандомных
var rndWizardList = [];
for (var i = 0; i < 4; i++) {
  rndWizardList[i] = rndWizard(firstNames, secondNames, coatColor, eyesColor);
}

// Показать блок с классом setup
document.querySelector('.setup').classList.remove('hidden');

// Создание фрагмента
var wizardList = document.createDocumentFragment();

// Функция записи в соотвествующие блоки данных волшебника
var wizardItem = function (wizard) {
  var wizardElement = wizadrTpl.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

// Запись данных для четырёх волшебников
for (var j = 0; j < 4; j++) {
  wizardList.appendChild(wizardItem(rndWizardList[j]));
}

// Отрисовать фрагмент в setup-similar-list
document.querySelector('.setup-similar-list').appendChild(wizardList);

// Показать блок с классом setup-similar
document.querySelector('.setup-similar').classList.remove('hidden');
