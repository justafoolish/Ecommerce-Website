var count = 0;
var NewProduct = new Array();
for (var i = ProductList.length - 1; i > 0; i--){
    if (i%10 == 0){
        NewProduct[count++] = ProductList[i];
    }
    if(count == 4)
        break;
}

count = 0;
var BestSeller = new Array();
for (var i = 0; i < ProductList.length; i++){
    if (i%7 == 0){
        BestSeller[count++] = ProductList[i];
    }
    if(count == 4)
        break;
}

count = 0;
var RandProduct = new Array();
for (var i = 0; i < ProductList.length; i++){
    if (i%11 == 0){
        RandProduct[count++] = ProductList[i];
    }
    if(count == 4)
        break;
}

function getNewProduct() {
    var getProduct="";
    for(var i=0;i<4;i++) {
        getProduct += '<div class="col-md-3"><a id="remove-underline" href="detailP.html?'+NewProduct[i].productID+'"><div class="card"><img class="card-img-top w-100" src="'+NewProduct[i].img+'" alt=""><div class="card-body"><div class="cart-tittle"><h6 id="product-name" class="font-weight-bold">'+NewProduct[i].name+'</h6> </div><div id="price" class=" font-weight-bold text-danger">'+NewProduct[i].price+'</div></a><button class="btn btn-primary w-100 mt-3" onclick="addtocart('+"'"+NewProduct[i].productID+"'"+')">Thêm vào giỏ</button></div></div></div>';
        document.getElementById("newProduct").innerHTML = getProduct;
    }
}
function getBestSeller() {
    var getProduct="";
    for(var i=0;i<4;i++) {
        getProduct += '<div class="col-md-3"><a id="remove-underline" href="detailP.html?'+BestSeller[i].productID+'"><div class="card"><img class="card-img-top w-100" src="'+BestSeller[i].img+'" alt=""><div class="card-body"><div class="cart-tittle"><h6 id="product-name" class="font-weight-bold">'+BestSeller[i].name+'</h6> </div><div id="price" class=" font-weight-bold text-danger">'+BestSeller[i].price+'</div></a><button class="btn btn-primary w-100 mt-3" onclick="addtocart('+"'"+BestSeller[i].productID+"'"+')">Thêm vào giỏ</button></div></div></div>';
        document.getElementById("bestSeller").innerHTML = getProduct;
    }
}
function getRecommend() {
    var getProduct="";
    for(var i=0;i<4;i++) {
        getProduct += '<div class="col-md-3"><a id="remove-underline" href="detailP.html?'+RandProduct[i].productID+'"><div class="card"><img class="card-img-top w-100" src="'+RandProduct[i].img+'" alt=""><div class="card-body"><div class="cart-tittle"><h6 id="product-name" class="font-weight-bold">'+RandProduct[i].name+'</h6> </div><div id="price" class=" font-weight-bold text-danger">'+RandProduct[i].price+'</div></a><button class="btn btn-primary w-100 mt-3" onclick="addtocart('+"'"+RandProduct[i].productID+"'"+')">Thêm vào giỏ</button></div></div></div>';
        document.getElementById("recommend").innerHTML = getProduct;
    }
}
window.onload = function() {
    getNewProduct();
    getBestSeller();
    getRecommend();
}