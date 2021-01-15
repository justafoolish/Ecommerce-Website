function Thongtin(hoten, mssv) {
    this.hoten = hoten;
    this.mssv = mssv;
}
var admin = new Array();
admin[0] = new Thongtin("Võ Hoàng Quỳnh Như", "29012001");
admin[1] = new Thongtin("Phạm Thị Ngọc Trâm", "03012001");
admin[2] = new Thongtin("Trần Khắc Tuấn", "123456");
admin[3] = new Thongtin("admin", "admin");

var chml = -1;

function checkmail() {
    var cm = document.getElementById('email').value;
    for (var i = 0; i < admin.length; i++) {
        if (cm == admin[i].hoten) {
            chml = i;
            break;
        }
    }
}
var chp = -1;

function checkpass() {
    var cp = document.getElementById("pw").value;

    for (var i = 0; i < admin.length; i++) {
        if (cp == admin[i].mssv) {
            chp = i;
            break;
        }
    }
}

function ghi() {
    var x = document.getElementById('email').value;
    var y = document.getElementById('pw').value;
    if (x != "")
        document.getElementById("z-email").innerHTML = '';
    if (y != "")
        document.getElementById("z-pw").innerHTML = '';
}

function thanhcong() {
    location.href = 'admin.html';
}

function timeGreeting() {
    var greeting = setTimeout(thanhcong, 1000);
}

function check() {
    var data = new Array();
    data[0] = document.getElementById('email').value;
    data[1] = document.getElementById('pw').value;

    var myerror = new Array();
    myerror[0] = '*Bạn chưa nhập Tên*';
    myerror[1] = '*Bạn chưa nhập Mật khẩu*';

    var nearby = new Array("z-email", "z-pw");
    for (i in data) {
        var error = myerror[i];
        var div = nearby[i];
        if (data[i] == "") {
            document.getElementById(div).innerHTML = error;
            if (i == 1) { return 0; }
        } else {
            document.getElementById(div).innerHTML = "";
        }
    }

    checkmail();
    checkpass();
    if (chml == chp && chml != -1 && chp != -1) {
        document.getElementById('z-ErrorMailorPass').innerHTML = '';
        localStorage.setItem("tenadmin", data[0]);
        localStorage.setItem("admin", 1);
        timeGreeting();
    } else {
        document.getElementById('z-ErrorMailorPass').innerHTML = '<b><i>*Tên hoặc mật khẩu chưa chính xác*</i></b>';
    }
}

function out() {
    localStorage.setItem("admin", 0);
    location.href = "dangnhapadmin.html";
}

function loadadmin() {
    var taikhoan = localStorage.getItem("admin");
    if (taikhoan == 1) {
        var tentruycap = localStorage.getItem("tenadmin");

        document.getElementById("taikhoanadmin").innerHTML = '<span id="taikhoancuaban1">QTV: ' + tentruycap + '<br></span><div class="dropdowndndk1"><div style="position: absolute; margin-left:45px; margin-top: 5px; width: 100px;"><button style="width: 100%; border-radius: 5px; background-color:black; color:white;" onclick="out();">Đăng xuất</button></div></div>';
    }
}

function xoa() {
    var s = confirm("Bạn có muốn xóa khách hàng này không?");
    if (s == true) {
        alert("Bạn đã xóa !");
    }
}
window.onload = function() {
    loadadmin();
}