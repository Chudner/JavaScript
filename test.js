var form = document.getElementsByTagName('form')[0];

form.onsubmit = function () {
    var resultScore = 0;

    var answer1Fields = document.getElementsByName('answer1');
    var answer2Fields = document.getElementsByName('answer2');
    var answer3Fields = document.getElementsByName('answer3');
    var answer4Fields = document.getElementsByName('answer4');
    var answer5Fields = document.getElementsByName('answer5');

    // проверяю первый вопрос
    // получаю чекнутые елементы 
    var checkedAnswer1Fields = returnCheckedElements(answer1Fields);
    // получаем только первый елемент так как на первый вопрос есть только один ответ
    if (checkedAnswer1Fields.length > 0 && checkedAnswer1Fields[0].value == "<a>") {
        resultScore += 20;
    }


    // проверяем второй вопрос
    // получаем чекнутые елементы 
    var checkedAnswer2Fields = returnCheckedElements(answer2Fields);
    // получаем только первый елемент так как на первый вопрос есть только один ответ
    if (checkedAnswer2Fields.length > 0 && checkedAnswer2Fields[0].value == "<ol>") {
        resultScore += 20;
    }



    // проверяем третий вопрос
    // получаем чекнутые елементы 
    var checkedAnswer3Fields = returnCheckedElements(answer3Fields);
    // получаем только первый елемент так как на первый вопрос есть только один ответ
    if (checkedAnswer3Fields.length > 0 && checkedAnswer3Fields[0].value == "<meta/>") {
        resultScore += 20;
    }


    // проверяем четвертый вопрос
    // получаем чекнутые елементы 
    var checkedAnswer4Fields = returnCheckedElements(answer4Fields);
    // получаем только первый елемент так как на первый вопрос есть только один ответ

    if (checkedAnswer4Fields.length == 2) {
        if (checkedAnswer4Fields[0].value == '<caption>') {
            if (checkedAnswer4Fields[1].value == '<td>')
                resultScore += 20;
        } else if (checkedAnswer4Fields[0].value == '<td>') {
            if (checkedAnswer4Fields[1].value == '<caption>') {
                resultScore += 20;
            }
        }
    }


    // проверяем пятый вопрос
    // получаем чекнутые елементы 
    var checkedAnswer5Fields = returnCheckedElements(answer5Fields);
    // получаем только первый елемент так как на первый вопрос есть только один ответ
    if (checkedAnswer5Fields.length == 2) {
        if (checkedAnswer5Fields[0].value == 'action') {
            if (checkedAnswer5Fields[1].value == 'autocomplete')
                resultScore += 20;
        } else if (checkedAnswer5Fields[0].value == 'autocomplete') {
            if (checkedAnswer5Fields[1].value == 'action') {
                resultScore += 20;
            }
        }
    }

    alert('Ваш результат равен ' + resultScore + ' баллов');

};

function returnCheckedElements(inputFields) {
    var checkedElements = [];
    for (var i = 0; i < inputFields.length; i++) {
        if (inputFields[i].checked) {
            checkedElements.push(inputFields[i]);
        }
    }

    return checkedElements;
}
