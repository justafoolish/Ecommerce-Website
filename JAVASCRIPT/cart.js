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

function increase() {
    var value = parseInt(document.getElementById('number').value);
    //value = isNaN(value) ? 1 : value;
    value++;
    document.getElementById('number').value = value;
  }
  
  function decrease() {
    var value = parseInt(document.getElementById('number').value);
    //value = isNaN(value) ? 1 : value;
    //value < 1 ? value = 1 : '';
    if(value != 1)
        value--;
    document.getElementById('number').value = value;
  }