var displayInput = document.getElementById('text');
var buttons = document.getElementsByTagName('button');
var sign;
var result;

var zeroButton = document.getElementsByName('zero')[0];
var oneButton = document.getElementsByName('one')[0];
var twoButton = document.getElementsByName('two')[0];
var threeButton = document.getElementsByName('three')[0];
var fourButton = document.getElementsByName('four')[0];
var fiveButton = document.getElementsByName('five')[0];
var sixButton = document.getElementsByName('six')[0];
var sevenButton = document.getElementsByName('seven')[0];
var eightButton = document.getElementsByName('eight')[0];
var nineButton = document.getElementsByName('nine')[0];


var divisionButton = document.getElementsByName('division')[0];
var multiplyButton = document.getElementsByName('multiple')[0];
var plusButton = document.getElementsByName('plus')[0];
var minusButton = document.getElementsByName('minus')[0];


divisionButton.onclick = multiplyButton.onclick = plusButton.onclick = minusButton.onclick = function () {
    sign = this.innerHTML;
}


document.getElementsByName('equally')[0].onclick = function () {
    if (Number.isFinite(result)) {
        displayInput.value = result;
    } else {
        alert("Деление на ноль запрещено!");
        displayInput.value = 0;
    }
    result = null;
}

document.getElementsByName('cancel')[0].onclick = function () {
    displayInput.value = '';
    result = null;
    sign = null;
}

document.getElementsByName('plusorminus')[0].onclick = function () {
    // меняем знак числа на противоположный путем умножения на -1
    displayInput.value = -1 * parseFloat(displayInput.value);
}

document.getElementsByName('dot')[0].onclick = function () {
    // если пользователь ввел точку то проверяем является ли введенное число десятичным, и если так то не добавляем точку
    if (displayInput.value.indexOf('.') >= 0) {
        return;
    } else {
        displayInput.value += this.innerHTML;
    }
}

zeroButton.onclick = oneButton.onclick = twoButton.onclick = threeButton.onclick =
    fourButton.onclick = fiveButton.onclick = sixButton.onclick = sevenButton.onclick =
    eightButton.onclick = nineButton.onclick = function () {
        /*  Eсли уже есть 0 на нулевой позиции на дисплее и количество знаков равно 1
            то заменяем его цифрой и прекращаем дальнейшее выполнение функции
                   
        */
        // Получаем значение между открывающимся и закрывюащимся тегом button,прописан. числа
        var buttonValue = this.innerHTML;
        if (displayInput.value.search('0') == 0 && displayInput.value.length == 1 && sign == null) {
            displayInput.value = displayInput.value.replace('0', buttonValue);
            return;
        };

        // Если пользователь уже ввел арифметический знак то выполняем арифметическую операцию
        if (sign != null) {
            // преобразуем строки в десятичные числа
            result = calculate(parseFloat(displayInput.value), parseFloat(buttonValue), sign);
            // обнуляем переменную в которой хранится знак так как операция уже выполнена на предыдущем шаге
            sign = null;
            // присваиваем число которое ввел пользователь дисплею
            displayInput.value = buttonValue;
        } else {
            // если пользователь не ввел знак, то просто добавляем цифры 
            displayInput.value += buttonValue;
        }
    }

function calculate(number1, number2, sign) {
    var result;

    switch (sign) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
    }
    return result;
}
