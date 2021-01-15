var getURL = location.href.split("/");
var x = getURL[getURL.length - 1];

function searchbyName() {
    var keyword = document.getElementById('searchbox').value;
    if(keyword == "")
        alert("Không Hợp Lệ");
    else 
    
    if(x == 'user_cart.html' || x == 'user_index.html')
        window.location.href = "search.html";
    else
    window.location.href = "HTML/search.html";
}