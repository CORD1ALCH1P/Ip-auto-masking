function filter(key) { //фильтрация символов
    return ( key == 'Delete' || 
        key == 'ctrlDown' ||
        key == 'Backspace' ||
        key == 'v' ||
        key == 'ArrowRight' ||
        key == 'ArrowLeft' ||
        key == '.' ||
        (key >= 0 && key <= 9));
}
function AutoDoter() { //Функция расстановки точек и первичной проверки
    let PostValid = new Boolean(false); //элемнт для постпроверки. Проверяет введен ли первый октет
    let arIn = []; //array для хранения с данных input
    var ip = document.getElementById("IpInput").value; //получение инпута
    arIn = document.getElementById('IpInput').value.split("."); //разбивка на массив
    console.log(arIn); //промежуточный вывод 
    for (i = 0; i < arIn.length; i++) { //цикл проверок
        if (arIn[i] > Number(25)) { //проверка
           document.getElementById('IpInput').value = ip + "."; //растановка точек
        } else {
            document.getElementById('IpInput').value = ip; //иначе возврат введенного
        }
        if (arIn[i] > Number(255)) { //проверка
            delete arIn[i]; //удаление неверного значения, если есть в массиве
            document.getElementById('IpInput').value = arIn.join(".");
            PostValid = true; //постповерка запущена
        } else {
            
        }
    }
    let TemporaryArIn = arIn.join("."); //сборка массива
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(TemporaryArIn)) {
        document.getElementById('IpInput').value = String(TemporaryArIn); //возвращяет переменую без точки в случае правильности адресса
        PostValid = false;
    }
    if (PostValid == true) {
        document.getElementById('IpInput').value = String(TemporaryArIn);
    } else {
        PostValid = false;
        
    }
}