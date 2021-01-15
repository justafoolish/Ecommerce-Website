var ktdb = new Array('`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', '\\', '|', ';', ':', '\'', '"', '/', '?', '.', ',', '<', '>');
var mailchuan = new Array('@', '.');
var checkname = 0;

function fullname() {
    var kt = document.getElementById("ten").value;
    var x = 1;
    for (var i = 0; i < kt.length; i++) {
        for (j in ktdb) {
            if (kt[i] == ktdb[j]) { x = 0; break; }
        }
    }
    if (x == 1) {
        document.getElementById('z-ten').innerHTML = '';
        checkname = 1;
    } else {
        document.getElementById('z-ten').innerHTML = 'Tên không được chứa ký tự đặc biệt:!, @, #, $, %, v.v.. ';
        checkname = 0;
    }
}

function mailnull() {
    var mail = document.getElementById('mail').value;
    if (mail != '')
        document.getElementById('z-mail').innerHTML = '';
}
var checkmail = 0;

function fullmail() {
    var mail = document.getElementById('mail').value;
    var chuanmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!chuanmail.test(mail)) {
        checkmail = 0;
        return false;
    } else {
        checkmail = 1;
        return true;
    }
}
var checkpass = 0;

function password() {
    var pw = document.getElementById("pw").value;
    if (pw.length < 8) {
        checkpass = 0;
        document.getElementById('z-pw').innerHTML = '*Mật khẩu phải ít nhất 8 ký tự*';
    } else {
        checkpass = 1;
        document.getElementById('z-pw').innerHTML = '';
    }
}
var check_pass = 0;

function _password() {
    var fpw = document.getElementById("pw").value;
    var spw = document.getElementById("_pw").value;

    if (checkpass == 1 && (fpw == spw)) {
        check_pass = 1;
        document.getElementById('z-_pw').innerHTML = '<span style="color: rgb(0, 170, 0);"><i>*Mật khẩu đã khớp*</i></span>';
    } else {
        check_pass = 0;
        document.getElementById('z-_pw').innerHTML = '*Mật khẩu chưa khớp hoặc chưa đúng yêu cầu*';
    }
}

function thanhcong() {
    localStorage.setItem("taikhoan", 1);
    var ten = document.getElementById('ten').value;
    alert('Bạn đã đăng ký thành công. Chúc mừng ' + ten + ', bạn đã là thành viên của HighLight!');
    location.href = 'index.html';
}

function timeGreeting() {
    var greeting = setTimeout(thanhcong, 1500);
}

function check() {
    var data = new Array();
    data[0] = document.getElementById('ten').value;
    data[1] = document.getElementById('mail').value;
    data[2] = document.getElementById('pw').value;

    var myerror = new Array();
    myerror[0] = '*Bạn chưa nhập Tên*';
    myerror[1] = '*Bạn chưa nhập Email*';
    myerror[2] = '*Bạn chưa nhập Mật khẩu*';
    var nearby = new Array("z-ten", "z-mail", "z-pw");

    for (i in data) {
        var error = myerror[i];
        var div = nearby[i];
        if (data[i] == "") {
            document.getElementById(div).innerHTML = error;
            return;
        } else {
            document.getElementById(div).innerHTML = "";
        }
    }
    if (data[1] != '' && !fullmail()) {
        document.getElementById('z-mail').innerHTML = 'Địa chỉ mail không hợp lệ!';
    } else {
        if (data[1] == '')
            document.getElementById('z-mail').innerHTML = myerror[1];
    }
    var data3 = document.getElementById('_pw').value;
    if (checkname == 1 && checkmail == 1 && checkpass == 1 && check_pass == 1 && data3 == data[2]) {
        document.getElementById('z-_pw').innerHTML = '<span style="color: rgb(0, 170, 0);"><i>*Mật khẩu đã khớp*</i></span>';
        if (localStorage.i != null) {
            localStorage.setItem("username[" + localStorage.i + "]", data[0]);
            localStorage.setItem("mail[" + localStorage.i + "]", data[1]);
            localStorage.setItem("pass[" + localStorage.i + "]", data[2]);
            localStorage.setItem("trangthai[" + localStorage.i + "]", 1);

            localStorage.i = Number(localStorage.i) + 1;
        } else {
            localStorage.i = 0;
            localStorage.setItem("username[" + localStorage.i + "]", data[0]);
            localStorage.setItem("mail[" + localStorage.i + "]", data[1]);
            localStorage.setItem("pass[" + localStorage.i + "]", data[2]);
            localStorage.setItem("trangthai[" + localStorage.i + "]", 1);
            localStorage.i = Number(localStorage.i) + 1;
        }
        localStorage.setItem("tentruycap", data[0]);
        timeGreeting();
    } else {
        if (check_pass == 0) { document.getElementById('z-_pw').innerHTML = '*Bạn chưa nhập lại Mật khẩu*'; }
        if (checkname == 0) { document.getElementById('z-ten').innerHTML = 'Tên không được chứa ký tự đặc biệt:!, @, #, $, %, v.v.. '; }
        if (checkpass == 0) { document.getElementById('z-pw').innerHTML = '*Mật khẩu phải ít nhất 8 ký tự*'; }
        if (data3 != data[2]) { document.getElementById('z-_pw').innerHTML = '*Kiểm tra lại mật khẩu*'; }
    }
}

function load() {
    // document.getElementById("divten").innerHTML = '<input type="text" id="ten" size="40" maxlength="50" class="styleinput" onkeyup="fullname()">';
    document.getElementById("divten").innerHTML = '<input type="text" placeholder="Họ và tên" id="ten" size="35" onkeyup="fullname()">';

    document.getElementById("divmail").innerHTML = '<input type="text" placeholder="Email" id="mail" name="mail" size="35" onkeyup="mailnull()">';
}
window.onload = function() {
    load();
}