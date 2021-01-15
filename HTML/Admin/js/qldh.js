function xuatdonhang(){
	var s= "";
	var u = 0;
	for(var j = 1; j < localStorage.TDH; j++){
		u++;
		var trangthai = "Đã xử lý";
		if(j>7){
			trangthai = "Đang xử lý";
		}
		s = s + '<tr><td>'+u+'</td><td>'+localStorage.getItem("madonhang"+j)+'</td><td>'+localStorage.getItem("qlngaydat["+j+"]")+'</td><td>'+localStorage.getItem("qldiachi["+j+"]")+'</td><td>'+localStorage.getItem("qltongtien["+j+"]")+'</td><td>'+trangthai+'</td><td><button onclick="xemchitiet('+j+')">Xem chi tiết</button></td></tr>';
		document.getElementById("tableorders").innerHTML=s;
	}
}
function xemchitiet(x){
	var s= "";
	var name="";
	var sdt="";
	var diachi="";
	var mail="";
    for(var j = 1; j < localStorage.TDH; j++){
		if(x==j){
			name = localStorage.getItem("qlusername["+x+"]");
			sdt = localStorage.getItem("qlsdt["+x+"]");
			diachi = localStorage.getItem("qldiachi["+x+"]");
			mail = localStorage.getItem("qlmail["+x+"]");
		}
	}
	document.getElementById("admincontainer").style.opacity = '0.3';
    document.getElementById("xemchitiet").style='position: absolute;background-color:white;border: 3px solid rgb(18, 83, 139);border-radius: 5px;position: absolute;width: 500px;top: 150px;right: 450px;';
    document.getElementById("xemchitiet").innerHTML='<span id="ctdh">Chi tiết đơn hàng</span><span id="spanclose1"><button id="buttonclose" onclick="Close();">&times;</button></span><div id="nameuser1"><img src="images/user-shape.png" alt="user-shape" width="16px" height="16px">:'+name+'</div><div id="telephone1"><b>Điện Thoại:</b> '+sdt+'</div><div id="divdichi1"><b>Địa chỉ:</b> '+diachi+'</div><div id="divmail1"><b>Mail:</b> '+mail+'</div><table id="tablethongtin1"  border="1" cellpadding="0" cellspacing="0"><thead><tr><th style="width: 8%">Stt</th><th style="width: 55%">Tên sản phẩm</th><th style="width: 15%">Giá/Cuốn</th><th style="width: 15%">Số lượng</th></tr></thead><tbody id="hienthichitiet"></tbody></table>';
    var ss="";
    var u = 0;
    for(var i = 0; i <= Number(localStorage.getItem("qlsosp["+x+"]")); i++)
    {
    	for(var ii in book){
	    	if(localStorage.getItem("qlthem["+x+"/"+i+"]")==book[ii].masach){
	    		u++;
	    		ss= ss + '<tr><td>'+u+'</td><td>'+book[ii].ten+'</td><td>'+book[ii].gia+'</td><td>'+localStorage.getItem("qlsoluongsp["+x+"/"+i+"]")+'</td></tr>';
	    	}
	    }
    }
    document.getElementById("hienthichitiet").innerHTML = ss;
}
function Close(){
	document.getElementById("admincontainer").style.opacity='1';
	document.getElementById("xemchitiet").style='';
	document.getElementById("xemchitiet").innerHTML='';
}
window.onload = function(){
	loadadmin();
	xuatdonhang();
}
