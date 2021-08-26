window.addEventListener('DOMContentLoaded', () => {
    const weriteError = (text) =>{
        var tablearea = document.getElementById('tablearea');
        tablearea.innerHTML = "<h1 style='color:red;'>"+text+"</h1>"
    }
    const createTable = (data) =>{
        var tablearea = document.getElementById('tablearea');

        var table = document.createElement('table');


        for (var i = 0; i < data.length; i++){
            let tr = document.createElement('tr');
            let label = document.createElement('td');
            label.innerText = data[i][0];
            let value = document.createElement('td')
            value .innerText = data[i][1];
            tr.appendChild(label)
            tr.appendChild(value)

            table.appendChild(tr);
        }

        tablearea.appendChild(table);
    }

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://localhost:3000/server');

    xhr.responseType = 'json';

    xhr.send();


    xhr.onload = function() {
        if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
            weriteError(`Ошибка ${xhr.status}: ${xhr.statusText}`)
        } else { // если всё прошло гладко, выводим результат
            let responseObj = xhr.response;
            createTable(Object.entries(responseObj)); // Привет, мир!
        }

    };
    xhr.onerror = function() {
        weriteError('Запрос не удался')
    };

})
