var data = JSON.parse(localStorage.getItem("tbody")) || [];
var send = document.querySelector(".btn2");
send.addEventListener("click", BMI, false);

var listTh = document.querySelector(".th");
var result = document.getElementById(".result");
var arr = [];
var tbody = document.querySelector(".tbody");
tbody.addEventListener("click", toggleDone);

// updateList(data);

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
        let ligth = "";
        let normal = "";
        if (arr[i].bmiALL < 18.5) {
            ligth = "bg-primary text-white";
        } else if (18.5 < arr[i].bmiALL && arr[i].bmiALL < 24) {
            normal = "bg-success text-white";
        } else if (24 <=  arr[i].bmiALL &&  arr[i].bmiALL < 27) {
            normal = "bg-danger text-white";
        } else if (27 <=  arr[i].bmiALL &&  arr[i].bmiALL < 30) {
            normal = "bg-danger text-white";
        } else if (30 <=  arr[i].bmiALL &&  arr[i].bmiALL < 30) {
            normal = "bg-danger text-white";
        }

        str += `<tr class="${ligth} ${normal}">
        <td><a href="#" data-index="${i}" class="text-white">刪除</a> </td>
        <td>${arr[i].time}</td>
        <td>${arr[i].bmiALL}</td>
        <td>${arr[i].statusALL}</td>        
        </tr>`;
    }
    tbody.innerHTML = str;
}

function toggleDone(e) {
    e.preventDefault();
    if (e.target.nodeName !== "A") {
        return;
    }
    var index = e.target.dataset.index;
    arr.splice(index, 1);
    localStorage.setItem("tbody", JSON.stringify(arr));
    updateList(arr);
}

function BMI() {
    var cmStr = document.querySelector(".cm").value;
    var weightStr = document.querySelector(".weight").value;
    var time = document.querySelector(".data").value;
    var bmi = document.querySelector(".totalId");
    var allstatus = document.querySelector(".btn3");

    var Arraccount = {
        time: "",
        bmiALL: "",
        statusALL: "",
    };

    console.log(time.value);
    Arraccount.time = time;

    var cmform = cmStr / 100;
    var count = weightStr / (cmform * cmform);
    var allcount = Math.floor(count);
    Arraccount.bmiALL = allcount;
    bmi.value = allcount;

    if (allcount < 18.5) {
        bluecolor();
        allstatus.value = "過輕";
    } else if (18.5 < allcount && allcount < 24) {
        greencolor();
        allstatus.value = "正常";
    } else if (24 <= allcount && allcount < 27) {
        redcolor1();
        allstatus.value = "輕度肥胖";
    } else if (27 <= allcount && allcount < 30) {
        redcolor2();
        allstatus.value = "中度肥胖";
    } else if (30 <= allcount && allcount < 35) {
        redcolor3();
        allstatus.value = "重度肥胖";
    }

    Arraccount.statusALL = allstatus.value;

    console.log(bmi.value);
    console.log(allstatus.value);
    console.log(Arraccount); //測試
    arr.push(Arraccount);
    console.log(arr);
    updateList(arr);
}
