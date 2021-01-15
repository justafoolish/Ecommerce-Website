var getURL = location.href.split("/");
var x = getURL[getURL.length - 1];

function showShirtList() {
    var getProduct="";
    var i = 0;
    var count = 0;
    if(x == 'aothun.html') {
        while (count < 8) {
            if(ProductList[i].producttypeID == "TE")
            {
                getProduct += '<div class="col-md-3 my-3"><a id="remove-underline" href="detailP.html?'+ProductList[i].productID+'"><div class="card"><img class="card-img-top" src="'+ProductList[i].img+'" alt=""><div class="card-body"><div class="card-tittle"><h6 class="font-weight-bold">'+ProductList[i].name+'</h6><div class="font-weight-bold text-danger">'+ProductList[i].price+'</div></a><button class="btn btn-primary w-100 mt-3" onclick="addtocart('+"'"+ProductList[i].productID+"'"+')">Thêm vào giỏ</button></div></div></div></div>';
                document.getElementById("shirtList").innerHTML = getProduct;
                i++;
                count++;        
            }   
            else i++;
        }
    }
    if(x == 'aothun2.html') {
        while (count < 16) {
            if(ProductList[i].producttypeID == "TE")
            {
                if(count >= 8) {
                    getProduct += '<div class="col-md-3 my-3"><a id="remove-underline" href="detailP.html?'+ProductList[i].productID+'"><div class="card"><img class="card-img-top" src="'+ProductList[i].img+'" alt=""><div class="card-body"><div class="card-tittle"><h6 class="font-weight-bold">'+ProductList[i].name+'</h6><div class="font-weight-bold text-danger">'+ProductList[i].price+'</div></a><button class="btn btn-primary w-100 mt-3" onclick="addtocart('+"'"+ProductList[i].productID+"'"+')">Thêm vào giỏ</button></div></div></div></div>';
                    document.getElementById("shirtList").innerHTML = getProduct;
                    i++;
                    count++;    
                }
                else {
                    count++;
                    i++;
                }              
            }   
            else i++;
        }
    }
    if(x == 'aothun3.html') {
        while (count < 24) {
            if(ProductList[i].producttypeID == "TE")
            {
                if(count >= 16) {
                    getProduct += '<div class="col-md-3 my-3"><a id="remove-underline" href="detailP.html?'+ProductList[i].productID+'"><div class="card"><img class="card-img-top" src="'+ProductList[i].img+'" alt=""><div class="card-body"><div class="card-tittle"><h6 class="font-weight-bold">'+ProductList[i].name+'</h6><div class="font-weight-bold text-danger">'+ProductList[i].price+'</div></a><button class="btn btn-primary w-100 mt-3" onclick="addtocart('+"'"+ProductList[i].productID+"'"+')">Thêm vào giỏ</button></div></div></div></div>';
                    document.getElementById("shirtList").innerHTML = getProduct;
                    i++;
                    count++;    
                }
                else {
                    count++;
                    i++;
                }              
            }   
            else i++;
        }
    }
}

function showSweaterList() {
    var getProduct="";
    var i = 0;
    var count = 0;
    if(x == 'sweater.html') {
        while (count < 8) {
            if(ProductList[i].producttypeID == "SW")
            {
                getProduct += '<div class="col-md-3 my-3"><a id="remove-underline" href="detailP.html?'+ProductList[i].productID+'"><div class="card"><img class="card-img-top" src="'+ProductList[i].img+'" alt=""><div class="card-body"><div class="card-tittle"><h6 class="font-weight-bold">'+ProductList[i].name+'</h6><div class="font-weight-bold text-danger">'+ProductList[i].price+'</div></a><button class="btn btn-primary w-100 mt-3" onclick="addtocart('+"'"+ProductList[i].productID+"'"+')">Thêm vào giỏ</button></div></div></div></div>';
                document.getElementById("sweaterList").innerHTML = getProduct;
                i++;
                count++;        
            }   
            else i++;
        }
    }
    if(x == 'sweater2.html') {
        while (count < 16) {
            if(ProductList[i].producttypeID == "SW")
            {
                if(count >= 8) {
                    getProduct += '<div class="col-md-3 my-3"><a id="remove-underline" href="detailP.html?'+ProductList[i].productID+'"><div class="card"><img class="card-img-top" src="'+ProductList[i].img+'" alt=""><div class="card-body"><div class="card-tittle"><h6 class="font-weight-bold">'+ProductList[i].name+'</h6><div class="font-weight-bold text-danger">'+ProductList[i].price+'</div></a><button class="btn btn-primary w-100 mt-3" onclick="addtocart('+"'"+ProductList[i].productID+"'"+')">Thêm vào giỏ</button></div></div></div></div>';
                    document.getElementById("sweaterList").innerHTML = getProduct;
                    i++;
                    count++;    
                }
                else {
                    count++;
                    i++;
                }              
            }   
            else i++;
        }
    }
}

function showHoodieList() {
    var getProduct="";
    var i = 0;
    var count = 0;
    if(x == 'hoodie.html') {
        while (count < 8) {
            if(ProductList[i].producttypeID == "HO")
            {
                getProduct += '<div class="col-md-3 my-3"><a id="remove-underline" href="detailP.html?'+ProductList[i].productID+'"><div class="card"><img class="card-img-top" src="'+ProductList[i].img+'" alt=""><div class="card-body"><div class="card-tittle"><h6 class="font-weight-bold">'+ProductList[i].name+'</h6><div class="font-weight-bold text-danger">'+ProductList[i].price+'</div></a><button class="btn btn-primary w-100 mt-3" onclick="addtocart('+"'"+ProductList[i].productID+"'"+')">Thêm vào giỏ</button></div></div></div></div>';
                document.getElementById("hoodieList").innerHTML = getProduct;
                i++;
                count++;        
            }   
            else i++;
        }
    }
    if(x == 'hoodie2.html') {
        while (count < 12) {
            if(ProductList[i].producttypeID == "HO")
            {
                if(count >= 8) {
                    getProduct += '<div class="col-md-3 my-3"><a id="remove-underline" href="detailP.html?'+ProductList[i].productID+'"><div class="card"><img class="card-img-top" src="'+ProductList[i].img+'" alt=""><div class="card-body"><div class="card-tittle"><h6 class="font-weight-bold">'+ProductList[i].name+'</h6><div class="font-weight-bold text-danger">'+ProductList[i].price+'</div></a><button class="btn btn-primary w-100 mt-3" onclick="addtocart('+"'"+ProductList[i].productID+"'"+')">Thêm vào giỏ</button></div></div></div></div>';
                    document.getElementById("hoodieList").innerHTML = getProduct;
                    i++;
                    count++;    
                }
                else {
                    count++;
                    i++;
                }              
            }   
            else i++;
        }
    }
}

function showPantList() {
    var getProduct="";
    var i = 0;
    var count = 0;
    if(x == 'pants.html') {
        while (count < 8) {
            if(ProductList[i].producttypeID == "PA")
            {
                getProduct += '<div class="col-md-3 my-3"><a id="remove-underline" href="detailP.html?'+ProductList[i].productID+'"><div class="card"><img class="card-img-top" src="'+ProductList[i].img+'" alt=""><div class="card-body"><div class="card-tittle"><h6 class="font-weight-bold">'+ProductList[i].name+'</h6><div class="font-weight-bold text-danger">'+ProductList[i].price+'</div></a><button class="btn btn-primary w-100 mt-3" onclick="addtocart('+"'"+ProductList[i].productID+"'"+')">Thêm vào giỏ</button></div></div></div></div>';
                document.getElementById("pantList").innerHTML = getProduct;
                i++;
                count++;        
            }   
            else i++;
        }
    }
    if(x == 'pants2.html') {
        while (count < 10) {
            if(ProductList[i].producttypeID == "PA")
            {
                if(count >= 8) {
                    getProduct += '<div class="col-md-3 my-3"><a id="remove-underline" href="detailP.html?'+ProductList[i].productID+'"><div class="card"><img class="card-img-top" src="'+ProductList[i].img+'" alt=""><div class="card-body"><div class="card-tittle"><h6 class="font-weight-bold">'+ProductList[i].name+'</h6><div class="font-weight-bold text-danger">'+ProductList[i].price+'</div></a><button class="btn btn-primary w-100 mt-3" onclick="addtocart('+"'"+ProductList[i].productID+"'"+')">Thêm vào giỏ</button></div></div></div></div>';
                    document.getElementById("pantList").innerHTML = getProduct;
                    i++;
                    count++;    
                }
                else {
                    count++;
                    i++;
                }              
            }   
            else i++;
        }
    }

}

function showAccesoryList() {
    var getProduct="";
    var i = 0;
    var count = 0;
    if(x == 'phukien.html') {
        while (count < 8) {
            if(ProductList[i].producttypeID == "BA")
            {
                getProduct += '<div class="col-md-3 my-3"><a id="remove-underline" href="detailP.html?'+ProductList[i].productID+'"><div class="card"><img class="card-img-top" src="'+ProductList[i].img+'" alt=""><div class="card-body"><div class="card-tittle"><h6 class="font-weight-bold">'+ProductList[i].name+'</h6><div class="font-weight-bold text-danger">'+ProductList[i].price+'</div></a><button class="btn btn-primary w-100 mt-3" onclick="addtocart('+"'"+ProductList[i].productID+"'"+')">Thêm vào giỏ</button></div></div></div></div>';
                document.getElementById("accesoryList").innerHTML = getProduct;
                i++;
                count++;        
            }   
            else i++;
        }
    }
    if(x == 'phukien2.html') {
        while (count < 12) {
            if(ProductList[i].producttypeID == "BA")
            {
                if(count >= 8) {
                    getProduct += '<div class="col-md-3 my-3"><a id="remove-underline" href="detailP.html?'+ProductList[i].productID+'"><div class="card"><img class="card-img-top" src="'+ProductList[i].img+'" alt=""><div class="card-body"><div class="card-tittle"><h6 class="font-weight-bold">'+ProductList[i].name+'</h6><div class="font-weight-bold text-danger">'+ProductList[i].price+'</div></a><button class="btn btn-primary w-100 mt-3" onclick="addtocart('+"'"+ProductList[i].productID+"'"+')">Thêm vào giỏ</button></div></div></div></div>';
                    document.getElementById("accesoryList").innerHTML = getProduct;
                    i++;
                    count++;    
                }
                else {
                    count++;
                    i++;
                }              
            }   
            else i++;
        }
    }
}

window.onload = function() {
    switch(x) {
    case 'aothun.html':
    case 'aothun2.html':
    case 'aothun3.html':
        showShirtList();
        break;
    case 'sweater.html':
    case 'sweater2.html':
        showSweaterList();
        break;
    case 'hoodie.html':
    case 'hoodie2.html':
        showHoodieList();
        break ;
    case 'pants.html':
    case 'pants2.html':
        showPantList();
        break;
    case 'phukien.html':
    case 'phukien2.html':
        showAccesoryList();
        break;               
    }
}