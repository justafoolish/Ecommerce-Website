function sua(x) {
    var s = "";
    s = '<tr id="tr' + x + '"><td>' + (x + 1) + '</td><td><input id="editname" value="' + localStorage.getItem("username[" + x + "]") + '" type="text" style="width:100%"></td><td><input id="editmail" value="' + localStorage.getItem("mail[" + x + "]") + '" type="text" style="width:100%"></td><td><input id="editpass" value="' + localStorage.getItem("pass[" + x + "]") + '" type="text" style="width:100%"></td><td><input id="edittrangthai" type="text" value="' + localStorage.getItem("trangthai[" + x + "]") + '" style="width:25%; text-align: center;"></td><td><input type="button" value="Xong" onclick="xong(' + x + ')"></td></tr>';
    document.getElementById("loadttkh").innerHTML = s;
}
var ktdb = new Array('`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', '\\', '|', ';', ':', '\'', '"', '/', '?', '.', ',', '<', '>');
var mailchuan = new Array('@', '.');

function fullname() {
    var kt = document.getElementById("editname").value;
    var x = 1;
    for (var i = 0; i < kt.length; i++) {
        for (j in ktdb) {
            if (kt[i] == ktdb[j]) { x = 0; break; }
        }
    }
    if (x == 1) {
        return true;
    } else {
        return false;
    }
}

function fullmail() {
    var mail = document.getElementById('editmail').value;
    var chuanmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!chuanmail.test(mail)) {
        return false;
    } else {
        return true;
    }
}

function password() {
    var pw = document.getElementById("editpass").value;
    if (pw.length < 8) {
        return false;
    } else {
        return true;
    }
}

function thanhcong() {
    var ten = document.getElementById('ten').value;
    alert('Bạn đã đăng ký thành công. Chúc mừng ' + ten + ', bạn đã là thành viên của HighLight!');
    location.href = 'index2.html'; // chú ý: đổi tên index nếu có sự thay đổi tên
}

function timeGreeting() {
    var greeting = setTimeout(thanhcong, 1500);
}

function xong(x) {
    var data = new Array();
    data[0] = document.getElementById('editname').value;
    data[1] = document.getElementById('editmail').value;
    data[2] = document.getElementById('editpass').value;
    data3 = document.getElementById('edittrangthai').value;

    var myerror = new Array();
    myerror[0] = '*Chưa nhập Tên*';
    myerror[1] = '*Chưa nhập Email*';
    myerror[2] = '*Chưa nhập Mật khẩu*';
    var nearby = new Array("z-ten", "z-mail", "z-pw");

    for (i in data) {
        var error = myerror[i];
        var div = nearby[i];
        if (data[i] == "") {
            document.getElementById(div).innerHTML = error;
            if (i == 2)
                return 0;
        } else {
            document.getElementById(div).innerHTML = "";
        }
    }
    if (!fullname()) {
        document.getElementById('z-ten').innerHTML = 'Tên không được chứa ký tự đặc biệt!';
        return;
    }
    if (!fullmail()) {
        document.getElementById('z-mail').innerHTML = 'Địa chỉ mail không hợp lệ!';
        return;
    }
    if (!password()) {
        document.getElementById('z-pw').innerHTML = '*Mật khẩu phải ít nhất 8 ký tự*';
        return;
    }
    if (isNaN(data3) || Number(data3) > 1) {
        document.getElementById('z-trangthai').innerHTML = 'Trạng thái chỉ được: 1(mở) hoặc 0(khóa)';
        return;
    } else { document.getElementById('z-trangthai').innerHTML = ''; }
    localStorage.setItem("username[" + x + "]", data[0]);
    localStorage.setItem("mail[" + x + "]", data[1]);
    localStorage.setItem("pass[" + x + "]", data[2]);
    localStorage.setItem("trangthai[" + x + "]", data3);
    alert("Quá trình sửa hoàn tất.");
    location.href = "quanlykhachhang.html";
}

function xoa(x) {
    if (localStorage.getItem("i") <= 2) {
        document.getElementById('idmain').style.height = '400px';
    }
    if (confirm("Bạn có muốn xóa tài khoản này?") == false) {
        return;
    }
    while (x <= (Number(localStorage.getItem("i"))) - 1) {
        localStorage.setItem("username[" + x + "]", localStorage.getItem("username[" + (x + 1) + "]"));
        localStorage.setItem("mail[" + x + "]", localStorage.getItem("mail[" + (x + 1) + "]"));
        localStorage.setItem("pass[" + x + "]", localStorage.getItem("pass[" + (x + 1) + "]"));
        localStorage.setItem("trangthai[" + x + "]", localStorage.getItem("trangthai[" + (x + 1) + "]"));
        x++;
    }
    localStorage.removeItem("username[" + ((Number(localStorage.getItem("i"))) - 1) + "]");
    localStorage.removeItem("mail[" + ((Number(localStorage.getItem("i"))) - 1) + "]");
    localStorage.removeItem("pass[" + ((Number(localStorage.getItem("i"))) - 1) + "]");
    localStorage.removeItem("trangthai[" + ((Number(localStorage.getItem("i"))) - 1) + "]");
    localStorage.setItem("i", Number(localStorage.getItem("i")) - 1);
    location.href = "quanlykhachhang.html";
}

function loadttkh() {
    var s = "";
    for (var i = 0; i < Number(localStorage.getItem("i")); i++) {
        var trangthai = "Khóa";
        var mahoa = "";
        for (var j = 0; j < (localStorage.getItem("pass[" + i + "]")).length; j++) {
            mahoa += "*";
        }
        if (Number(localStorage.getItem("trangthai[" + i + "]")) == 1)
            trangthai = "Mở";
        s = s + '<tr id="tr' + i + '"><td >' + (i + 1) + '</td><td >' + localStorage.getItem("username[" + i + "]") + '</td><td >' + localStorage.getItem("mail[" + i + "]") + '</td><td >' + mahoa + '</td><td>' + trangthai + '</td><td ><img src="../image/sua.png" style="width:40px;height:30px" onclick="sua(' + i + ');"></td></tr>';
    }
    document.getElementById("loadttkh").innerHTML = s;
}
window.onload = function() {
    loadttkh();
    loadadmin();
}