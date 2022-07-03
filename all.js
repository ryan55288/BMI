var send = document.querySelector(".btn2");
send.addEventListener("click", BMI, false);
var data = JSON.parse(localStorage.getItem("listData")) || [];
var listTh = document.querySelector(".th");


// updateList(data);
function cleantext() {
    document.querySelector(".btn3").value = "";
}

function bluecolor() {
    var btn3 = document.querySelector(".btn3");
    btn3.style.color = "#2894FF";
    btn3.style.border = " 8px solid";
}
function greencolor() {
    var btn3 = document.querySelector(".btn3");
    btn3.style.color = "#00DB00";
    btn3.style.border = " 8px solid";
}
function redcolor1() {
    var btn3 = document.querySelector(".btn3");
    btn3.style.color = "#FF7575";
    btn3.style.border = " 8px solid";
}
function redcolor2() {
    var btn3 = document.querySelector(".btn3");
    btn3.style.color = "#FF0000";
    btn3.style.border = " 8px solid";
}
function redcolor3() {
    var btn3 = document.querySelector(".btn3");
    btn3.style.color = "#AE0000";
    btn3.style.border = " 8px solid";
}

function updateList(items) {
    str = "";
    var len = items.length;
    for (var i = 0; len > i; i++) {
        str += '<tr><a href="#" data-index=' + i + " />刪除</a> <div>" + items[i].cm + items[i].weight + items.time + "</div></tr>";
    }
    th.innerHTML = str;
}
function BMI() {
    var cmStr = document.querySelector(".cm").value;
    var weightStr = document.querySelector(".weight").value;
    var dataStr = document.querySelector(".data").value;

    var Arraccount = {
        cm: cmStr,
        weight: weightStr,
        time: dataStr,
    };

    console.log(Arraccount); //測試

    Arraccount.time = dataStr;
    Arraccount.cm = ((cmStr / 100) * cmStr) / 100;
    Arraccount.weight = weightStr;

    var count = Arraccount.weight / Arraccount.cm;
    var allcount = Math.floor(count);

 
    data.push(Arraccount);
    localStorage.setItem("listData", JSON.stringify(data));

    if (allcount < 18.5) {
        cleantext();
        bluecolor();
        document.querySelector(".btn3").value = "過輕";
    } else if (18.5 < allcount && allcount < 24) {
        cleantext();
        greencolor();
        document.querySelector(".btn3").value = "正常";
    } else if (24 <= allcount && allcount < 27) {
        cleantext();
        redcolor1();
        document.querySelector(".btn3").value = "輕度肥胖";
    } else if (27 <= allcount && allcount < 30) {
        cleantext();
        redcolor2();
        document.querySelector(".btn3").value = "中度肥胖";
    } else if (30 <= allcount && allcount < 35) {
        cleantext();
        redcolor3();
        document.querySelector(".btn3").value = " 重度肥胖";
    }
}
