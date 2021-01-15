let deletee=document.body.getElementsByClassName('button3');
for(let a of deletee)
{
	a.onclick=function(){
		confirm("Xóa sản phẩm này ?");		
	};
}