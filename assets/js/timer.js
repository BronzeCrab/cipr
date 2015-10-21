// дата, до которой будет считать таймер
// var d = new Date    (year, month, day, hours, minutes, seconds, milliseconds);
var end_date = new Date(2015, 9, 31, 20, 10, 55);
// время в милисекнудах до конца (с 1970 года)
end_time = end_date.getTime();

// запускаю функию каждую секунду
var myVar = setInterval(myTimer, 1000);

function myTimer() {
    // текущее время в милисекнудах (с 1970 года)
    var current_date = new Date();
    cur_time = current_date.getTime();
    diff = end_time - cur_time;
    // разница в днях
    day_diff = (diff/(1000*60*60*24));
    day_diff_str = day_diff.toString();
    // беру только первые цифры - кол-во дней
    var res = day_diff_str.match(/^\d*(?=\.)/g);
    res_day_diff = testReg(res).toString();
    // оставшееся кол-во дней
    var last_days = '0.' + day_diff_str.match(/\d+?(?=$)/g);
    // разница в часах
    hours_diff = (last_days*24);
    hours_diff_str = hours_diff.toString();
    // беру только первые цифры - кол-во часов
    var res = hours_diff_str.match(/^[0-9]*(?=\.)/g);
    // добавляю нолик к часам если надо
    res_hours_diff = testReg(res).toString();
    // оставшееся кол-во часов
    var last_hours = '0.' + hours_diff_str.match(/\d+?(?=$)/g);
    // console.log('hours');
    // console.log(last_hours);
    // разница в минутах
    min_diff = (last_hours*60);
    min_diff_str = min_diff.toString();
    // беру только первые цифры - кол-во минут
    var res = min_diff_str.match(/^[0-9]*(?=\.)/g);
    // добавляю нолик к минутам если надо
    res_min_diff = testReg(res).toString();
    // оставшееся кол-во минут
    var last_min = '0.' + min_diff_str.match(/\d+?(?=$)/g);
    // console.log('min');
    // console.log(last_min);
    // разница в сек
    sec_diff = (last_min*60);
    sec_diff_str = sec_diff.toString();
    // беру только первые цифры - кол-во сек
    var res = sec_diff_str.match(/^[0-9]*(?=\.)/g);
    // добавляю нолик к сек если надо
    res_sec_diff = testReg(res).toString();
    // оставшееся кол-во сек
    var last_sec = '0.' + sec_diff_str.match(/\d+?(?=$)/g);
    // console.log('sec');
    // console.log(last_sec);
    // document.getElementById("demo").innerHTML = res_day_diff+':'+res_hours_diff + ':'+res_min_diff + ':' +res_sec_diff;
    document.getElementById("d_value_1").innerHTML = res_day_diff.charAt(0);
    document.getElementById("d_value_2").innerHTML = res_day_diff.charAt(1);
    document.getElementById("h_value_1").innerHTML = res_hours_diff.charAt(0);
    document.getElementById("h_value_2").innerHTML = res_hours_diff.charAt(1);
    document.getElementById("m_value_1").innerHTML = res_min_diff.charAt(0);
    document.getElementById("m_value_2").innerHTML = res_min_diff.charAt(1);
    document.getElementById("s_value_1").innerHTML = res_sec_diff.charAt(0);
    document.getElementById("s_value_2").innerHTML = res_sec_diff.charAt(1);
}

function testReg(str) {
    // если разница в днях 0-9, то добавляем нолик
    var re = /^[0-9]$/;
    if (re.test(str)) {
        str = "0" + str;
    }
    return str;
}