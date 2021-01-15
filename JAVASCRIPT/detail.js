function getDetailURL() {
    var url = window.location.href;
    var type = url.split("?");
    get_breadcrumb(type[1]);
    print_detail(type[1]);


}
function get_breadcrumb(productID) {
    var s = "";
    for(var i = 0;i<ProductList.length; i++) {
        if(ProductList[i].productID == productID) {
            var typeP = ProductList[i].producttypeID;
            var address = ''
            switch(typeP) {
                case 'TE':
                    typeP = 'ÁO THUN';
                    address = 'aothun.html';
                    break;
                case 'SW':
                    typeP = 'ÁO LEN';
                    address = 'sweater.html';
                    break;
                case 'HO':
                    typeP = 'ÁO LEN CÓ MŨ';
                    address = 'hoodie.html';
                    break;
                case 'PA':
                    typeP = 'QUẦN';
                    address = 'pants.html';
                    break;
                case 'BA':
                    typeP = 'PHỤ KIỆN';
                    address = 'phukien.html';
                    break;
            }
            s += '<ol id="breadcrumb" class="breadcrumb"><li class="breadcrumb-item"><a href="../index.html">TRANG CHỦ</a></li><li class="breadcrumb-item"><a href="#">SẢN PHẨM</a><li class="breadcrumb-item"><a href="'+address+'">'+typeP+'</a></ol>';
            break;
        }
    }
    document.getElementById("bcaddress").innerHTML = s;
}

function print_detail(productID) {
    var s = "";
    for(var i = 0; i < ProductList.length; i++) {
        if(ProductList[i].productID == productID) {
            s += '<div class="col-md-8"><img class="img-fluid" src="'+ProductList[i].img+'" alt=""></div><div class="col-md-4 mt-5"><h2 class="my-3 font-weight-bold mt-5">'+ProductList[i].name+'</h2><h3 class="text-danger mt-5 mb-5">'+ProductList[i].price+'</h3>';
            s += '<h4>Thông tin sản phẩm: </h4><p>'+ProductList[i].describe+'</p><div class="my-5 text-center" style="vertical-algin: center;">';
            s += '<form action=""><div class="d-flex flex-row"><div class="col-xs-9 mr-4"><h4>Số Lượng</h4></div><div class="col-xs-1 p-0 mr-2">';
            s += '<button type="button" class="btn-secondary quantity-left-minus btn-sm btn-number float-left" onclick="decrease()" data-type="minus" data-field=""><i class="p-1 fa fa-minus"></i></button></div>';
            s += '<div class="col-xs-1"><input type="number" id="number" name="number" class="text-center form-control input-number p-2" value="1" min="1" max="100"></div>';
            s += '<div class="col-xs-1 p-0 ml-2 align-items-center"><button type="button" class="btn-secondary quantity-right-plus btn-sm btn-number float-right" onclick="increase()" data-type="plus" data-field=""><i class="p-1 fa fa-plus"></i></button></div></div></form></div><button class="btn btn-primary btn-block mt-5 font-weight-bold py-3" onclick="addtocart('+"'"+ProductList[i].productID+"'"+')">Thêm vào giỏ</button></div></div>';
        }
    }
    document.getElementById("detailProduct").innerHTML=s;
}

function increase() {
    var value = parseInt(document.getElementById('number').value);
    value++;
    document.getElementById('number').value = value;
}

function decrease() {
    var value = parseInt(document.getElementById('number').value);
    if(value != 1)
        value--;
    document.getElementById('number').value = value;
}

window.onload = function() {
    getDetailURL();
}
