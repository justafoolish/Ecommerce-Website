var chml = -1;

function checkmail() {
    var cm = document.getElementById('email').value;

    for (var i = 0; i < Number(localStorage.getItem("i")); i++) {
        if (cm == localStorage.getItem("mail[" + i + "]")) {
            chml = i;
            break;
        }
    }
}
var chp = -1;

function checkpass() {
    var cp = document.getElementById("pass").value;

    for (var i = 0; i < Number(localStorage.getItem("i")); i++) {
        if (cp == localStorage.getItem("pass[" + i + "]")) {
            chp = i;
            break;
        }
    }
}

function ghi() {
    var x = document.getElementById('email').value;
    var y = document.getElementById('pass').value;
    if (x != "")
        document.getElementById("z-email").innerHTML = '';
    if (y != "")
        document.getElementById("z-pass").innerHTML = '';
}

function thanhcong() {
    alert('Đăng nhập thành công!');
    location.href = 'index.html';
}

function timeGreeting() {
    var greeting = setTimeout(thanhcong, 1000);
}

function checkDN() {
    window.location.href = "user_index.html";
    var data = new Array();
    data[0] = document.getElementById('email').value;
    data[1] = document.getElementById('pass').value;

    var myerror = new Array();
    myerror[0] = '*Bạn chưa nhập Email*';
    myerror[1] = '*Bạn chưa nhập Mật khẩu*';

    var nearby = new Array("z-email", "z-pass");
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
    if (chml == chp && chml != -1 && chp != -1 && Number(localStorage.getItem("trangthai[" + chml + "]")) == 1) {
        document.getElementById('z-ErrorMailorPass').innerHTML = '';
        localStorage.setItem("tentruycap", localStorage.getItem("username[" + chml + "]"));
        localStorage.setItem("taikhoan", 1);
        timeGreeting();
    } else {
        document.getElementById('z-ErrorMailorPass').innerHTML = '<b><i>*Email hoặc mật khẩu chưa chính xác*</i></b>';
    }
}