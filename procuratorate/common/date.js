function clock(v) {
    var myDate = new Date()
    var year = myDate.getFullYear()
    var mouth = myDate.getMonth() + 1;
    var m = mouth < 10 ? '0' + mouth : mouth
    console.log(m + 1)
    var data = myDate.getDate()
    console.log(data)
    var weeks = myDate.getUTCDay()
    console.log(weeks)
    switch (weeks) {
        case 1:
            x = "一";
            break;
        case 2:
            x = "二";
            break;
        case 3:
            x = "三";
            break;
        case 4:
            x = "四";
            break;
        case 5:
            x = "五";
            break;
        case 6:
            x = "六";
            break;
        case 7:
            x = "日";
            break;
    }
    console.log(x)
    var result = '今天是' + year + '年' + m + '月' + data + '日' + ' ' + '星期' + x
    console.log(result)
    $(v).html(result)
}
clock(".ui-date");

function s_click(obj) {
    var num = 0;
    for (var i = 0; i < obj.options.length; i++) {
        if (obj.options[i].selected == true) {
            num++;
        }
    }
    if (num == 1) {
        var url = obj.options[obj.selectedIndex].value;
        window.open(url); //这里修改打开连接方式
    }
}