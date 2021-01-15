function addtocart(productID) {
    var flag = false;
    for (var j = 0; j<= Number(sessionStorage.getItem("totalproduct")); j++)
    {
        if(sessionStorage.getItem("add["+j+"]") == productID)
        {
            alert('Sản phẩm đã được thêm!');
            flag = true;
            return;
        }
    }
    if(sessionStorage.i != null)
    {
        sessionStorage.setItem("add["+sessionStorage.i+"]",productID);
        sessionStorage.setItem("quantity["+sessionStorage.i+"]",1);
        sessionStorage.setItem("totalproduct",sessionStorage.i);
        sessionStorage.i = Number(sessionStorage.i) + 1;
        //document.getElementById("qtt").innerHTML = '( ' + sessionStorage.getItem("i") + ' )';
    }
    else 
    {
        sessionStorage.i = 0;
        sessionStorage.setItem("add["+sessionStorage.i+"]",productID);
        sessionStorage.setItem("quantity["+sessionStorage.i+"]",1);
        sessionStorage.setItem("totalproduct",sessionStorage.i);
        sessionStorage.i = Number(sessionStorage.i) + 1;
        //document.getElementById("qtt").innerHTML = '( ' + sessionStorage.getItem("i") + ' )';
    }
    alert('Thêm thành công.');
}

function deleterow1() {
    alert("Xóa sản phẩm thành công");
    document.getElementById('row1').innerHTML = "";

    if(document.getElementById('sub-total-S2').textContent == null)
        document.getElementById('total-price').innerHTML = "0";
    else
    document.getElementById('total-price').innerHTML = document.getElementById('sub-total-S2').textContent;
    
}

function deleterow2() {
    alert("Xóa sản phẩm thành công");
    document.getElementById('row2').innerHTML = "";
    
    if(document.getElementById('sub-total-S1').textContent == null)
        document.getElementById('total-price').innerHTML = "0";
    else
        document.getElementById('total-price').innerHTML = document.getElementById('sub-total-S1').textContent;


}

function convertPrice(text) {
    var arr = text.split(".");
    var xPrice = parseInt(arr[0])*1000 + parseInt(arr[1]);
    return xPrice;
}

function increase1() {
    var value = parseInt(document.getElementById('number1').value);
    value++;
    document.getElementById('number1').value = value;


    var xPrice1 = convertPrice(document.getElementById('price1').textContent);
    document.getElementById('sub-price-S1').innerHTML = (xPrice1*value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

    var xPrice2 = convertPrice(document.getElementById('sub-price-S2').textContent);
    document.getElementById('total-price').innerHTML = (xPrice1*value + xPrice2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}


function increase2() {
    var value = parseInt(document.getElementById('number2').value);
    value++;
    document.getElementById('number2').value = value;


    var xPrice1 = convertPrice(document.getElementById('price2').textContent);
    document.getElementById('sub-price-S2').innerHTML = (xPrice1*value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

    var xPrice2 = convertPrice(document.getElementById('sub-price-S2').textContent);
    document.getElementById('total-price').innerHTML = (xPrice1*value + xPrice2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

function decrease1() {
    var value = parseInt(document.getElementById('number1').value);
    if(value != 1)
        value--;
    document.getElementById('number1').value = value;

    var xPrice1 = convertPrice(document.getElementById('price1').textContent);
    document.getElementById('sub-price-S1').innerHTML = (xPrice1*value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

    var xPrice2 = convertPrice(document.getElementById('sub-price-S2').textContent);
    document.getElementById('total-price').innerHTML = (xPrice1*value + xPrice2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

function decrease2() {
    var value = parseInt(document.getElementById('number2').value);
    if(value != 1)
        value--;
    document.getElementById('number2').value = value;

    var xPrice1 = convertPrice(document.getElementById('price2').textContent);
    document.getElementById('sub-price-S2').innerHTML = (xPrice1*value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

    var xPrice2 = convertPrice(document.getElementById('sub-price-S1').textContent);
    document.getElementById('total-price').innerHTML = (xPrice1*value + xPrice2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}


function getSubPrice() {
    document.getElementById('sub-price-S1').innerHTML = convertPrice(document.getElementById('price1').textContent).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    document.getElementById('sub-price-S2').innerHTML = convertPrice(document.getElementById('price2').textContent).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


function getTotalPrice() {
    var price1 = convertPrice(document.getElementById('sub-price-S1').textContent);
    var price2 = convertPrice(document.getElementById('sub-price-S2').textContent);

    var total = price2 + price1;

    document.getElementById('total-price').innerHTML = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
function confirm_cart() {
    alert("Đặt hàng thành công. Quay về trang chủ tiếp tục mua sắm.");
    window.location.href = "user_index.html"
}
window.onload = function() {
      getSubPrice();
      getTotalPrice();
  }