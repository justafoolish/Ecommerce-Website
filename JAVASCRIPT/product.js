function searchbyName() {
    var keyword = document.getElementById('searchbox').value;
    window.location.href = "search.html";
}
function producttype(typeID, name) {
    this.typeID = typeID;
    this.name = name;
}
var showProductType = new Array();
showProductType[0] = new producttype("BA", "Balo");
showProductType[1] = new producttype("HO", "Hoodie");
showProductType[2] = new producttype("PA", "Quần dài");
showProductType[3] = new producttype("SW", "Sweater");
showProductType[4] = new producttype("TS", "Áo Thun");

function product(producttypeID, productID, img, name, price, describe) {
    this.price = price;
    this.describe = describe;
    this.producttypeID = producttypeID;
    this.productID = productID;
    this.img = img;
    this.name = name;
}
var ProductList = new Array();

// -----------Balo----------------
ProductList[0] = new product("BA", "BA01", "../IMG/hinhSP/BALO/01a.png", "Balo MX1", "250.000 đ", "Chất liệu: được làm từ chất liệu vải bố bền bỉ, độc đáo và bắt mắt. Kích thước  lớn 45x35cm, đựng được tài liệu size A4 lớn, LAPTOP thích hợp cho học sinh, sinh viên thậm chí là người trẻ trung, năng động đang đi làm. Mút quai, mút lưng và đáy balo giúp balo cứng cáp. Ngoài ra, balo có ngăn đựng laptop nên rất phù hợp để đi học, đi làm, đi du lịch.");
ProductList[1] = new product("BA", "BA02", "../IMG/hinhSP/BALO/01c.png", "Balo MX2", "250.000 đ", "Chất liệu: được làm từ chất liệu vải bố bền bỉ, độc đáo và bắt mắt. Kích thước  lớn 45x35cm, đựng được tài liệu size A4 lớn, LAPTOP thích hợp cho học sinh, sinh viên thậm chí là người trẻ trung, năng động đang đi làm. Mút quai, mút lưng và đáy balo giúp balo cứng cáp. Ngoài ra, balo có ngăn đựng laptop nên rất phù hợp để đi học, đi làm, đi du lịch.");
ProductList[2] = new product("BA", "BA03", "../IMG/hinhSP/BALO/02a.png", "Balo MX3", "250.000 đ", "Chất liệu: được làm từ chất liệu vải bố bền bỉ, độc đáo và bắt mắt. Kích thước  lớn 45x35cm, đựng được tài liệu size A4 lớn, LAPTOP thích hợp cho học sinh, sinh viên thậm chí là người trẻ trung, năng động đang đi làm. Mút quai, mút lưng và đáy balo giúp balo cứng cáp. Ngoài ra, balo có ngăn đựng laptop nên rất phù hợp để đi học, đi làm, đi du lịch.");
ProductList[3] = new product("BA", "BA04", "../IMG/hinhSP/BALO/03a.png", "Balo MX4", "250.000 đ", "Chất liệu: được làm từ chất liệu vải bố bền bỉ, độc đáo và bắt mắt. Kích thước  lớn 45x35cm, đựng được tài liệu size A4 lớn, LAPTOP thích hợp cho học sinh, sinh viên thậm chí là người trẻ trung, năng động đang đi làm. Mút quai, mút lưng và đáy balo giúp balo cứng cáp. Ngoài ra, balo có ngăn đựng laptop nên rất phù hợp để đi học, đi làm, đi du lịch.");
ProductList[4] = new product("BA", "BA05", "../IMG/hinhSP/BALO/03c.png", "Balo MX5", "250.000 đ", "Chất liệu: được làm từ chất liệu vải bố bền bỉ, độc đáo và bắt mắt. Kích thước  lớn 45x35cm, đựng được tài liệu size A4 lớn, LAPTOP thích hợp cho học sinh, sinh viên thậm chí là người trẻ trung, năng động đang đi làm. Mút quai, mút lưng và đáy balo giúp balo cứng cáp. Ngoài ra, balo có ngăn đựng laptop nên rất phù hợp để đi học, đi làm, đi du lịch.");
ProductList[5] = new product("BA", "BA06", "../IMG/hinhSP/BALO/04a.jpg", "Balo MX6", "250.000 đ", "Chất liệu: được làm từ chất liệu vải bố bền bỉ, độc đáo và bắt mắt. Kích thước  lớn 45x35cm, đựng được tài liệu size A4 lớn, LAPTOP thích hợp cho học sinh, sinh viên thậm chí là người trẻ trung, năng động đang đi làm. Mút quai, mút lưng và đáy balo giúp balo cứng cáp. Ngoài ra, balo có ngăn đựng laptop nên rất phù hợp để đi học, đi làm, đi du lịch.");
ProductList[6] = new product("BA", "BA07", "../IMG/hinhSP/BALO/01a.png", "Balo MX7", "250.000 đ", "Chất liệu: được làm từ chất liệu vải bố bền bỉ, độc đáo và bắt mắt. Kích thước  lớn 45x35cm, đựng được tài liệu size A4 lớn, LAPTOP thích hợp cho học sinh, sinh viên thậm chí là người trẻ trung, năng động đang đi làm. Mút quai, mút lưng và đáy balo giúp balo cứng cáp. Ngoài ra, balo có ngăn đựng laptop nên rất phù hợp để đi học, đi làm, đi du lịch.");
ProductList[7] = new product("BA", "BA08", "../IMG/hinhSP/BALO/01c.png", "Balo MX8", "250.000 đ", "Chất liệu: được làm từ chất liệu vải bố bền bỉ, độc đáo và bắt mắt. Kích thước  lớn 45x35cm, đựng được tài liệu size A4 lớn, LAPTOP thích hợp cho học sinh, sinh viên thậm chí là người trẻ trung, năng động đang đi làm. Mút quai, mút lưng và đáy balo giúp balo cứng cáp. Ngoài ra, balo có ngăn đựng laptop nên rất phù hợp để đi học, đi làm, đi du lịch.");
ProductList[8] = new product("BA", "BA09", "../IMG/hinhSP/BALO/02a.png", "Balo MX9", "250.000 đ", "Chất liệu: được làm từ chất liệu vải bố bền bỉ, độc đáo và bắt mắt. Kích thước  lớn 45x35cm, đựng được tài liệu size A4 lớn, LAPTOP thích hợp cho học sinh, sinh viên thậm chí là người trẻ trung, năng động đang đi làm. Mút quai, mút lưng và đáy balo giúp balo cứng cáp. Ngoài ra, balo có ngăn đựng laptop nên rất phù hợp để đi học, đi làm, đi du lịch.");
ProductList[9] = new product("BA", "BA10", "../IMG/hinhSP/BALO/03a.png", "Balo MX10", "250.000 đ", "Chất liệu: được làm từ chất liệu vải bố bền bỉ, độc đáo và bắt mắt. Kích thước  lớn 45x35cm, đựng được tài liệu size A4 lớn, LAPTOP thích hợp cho học sinh, sinh viên thậm chí là người trẻ trung, năng động đang đi làm. Mút quai, mút lưng và đáy balo giúp balo cứng cáp. Ngoài ra, balo có ngăn đựng laptop nên rất phù hợp để đi học, đi làm, đi du lịch.");
ProductList[10] = new product("BA", "BA11", "../IMG/hinhSP/BALO/03c.png", "Balo MX11", "250.000 đ", "Chất liệu: được làm từ chất liệu vải bố bền bỉ, độc đáo và bắt mắt. Kích thước  lớn 45x35cm, đựng được tài liệu size A4 lớn, LAPTOP thích hợp cho học sinh, sinh viên thậm chí là người trẻ trung, năng động đang đi làm. Mút quai, mút lưng và đáy balo giúp balo cứng cáp. Ngoài ra, balo có ngăn đựng laptop nên rất phù hợp để đi học, đi làm, đi du lịch.");
ProductList[11] = new product("BA", "BA12", "../IMG/hinhSP/BALO/04a.jpg", "Balo MX11", "250.000 đ", "Chất liệu: được làm từ chất liệu vải bố bền bỉ, độc đáo và bắt mắt. Kích thước  lớn 45x35cm, đựng được tài liệu size A4 lớn, LAPTOP thích hợp cho học sinh, sinh viên thậm chí là người trẻ trung, năng động đang đi làm. Mút quai, mút lưng và đáy balo giúp balo cứng cáp. Ngoài ra, balo có ngăn đựng laptop nên rất phù hợp để đi học, đi làm, đi du lịch.");

/* Hoodie */
ProductList[12] = new product("HO", "HO07", "../IMG/hinhSP/HOODIE/01a.jpg", "Time Never Hoodie", "350.000 đ", "áo hoodie nam nữ form rộng tay dài dạng trơn ,áo có mũ to rộng, phối túi 2 bên cách điệu, thể hiện sự cá tính, hợp xu hướng thời trang đang được giới trẻ ưa chuộng hiện nay. Kiểu túi thọc rộng rãi vừa giúp bạn đựng được những vật nhỏ cần thiết, vừa nhấn nhá làm tăng vẻ thời trang cho sản phẩm.");
ProductList[13] = new product("HO", "HO08", "../IMG/hinhSP/HOODIE/02a.png", "YT LightHoodie", "350.000 đ", "áo hoodie nam nữ form rộng tay dài dạng trơn ,áo có mũ to rộng, phối túi 2 bên cách điệu, thể hiện sự cá tính, hợp xu hướng thời trang đang được giới trẻ ưa chuộng hiện nay. Kiểu túi thọc rộng rãi vừa giúp bạn đựng được những vật nhỏ cần thiết, vừa nhấn nhá làm tăng vẻ thời trang cho sản phẩm.");
ProductList[14] = new product("HO", "HO09", "../IMG/hinhSP/HOODIE/02c.png", "YT Dark Hoodie", "350.000 đ", "áo hoodie nam nữ form rộng tay dài dạng trơn ,áo có mũ to rộng, phối túi 2 bên cách điệu, thể hiện sự cá tính, hợp xu hướng thời trang đang được giới trẻ ưa chuộng hiện nay. Kiểu túi thọc rộng rãi vừa giúp bạn đựng được những vật nhỏ cần thiết, vừa nhấn nhá làm tăng vẻ thời trang cho sản phẩm.");
ProductList[15] = new product("HO", "HO10", "../IMG/hinhSP/HOODIE/02e.png", "YT Ranibow Hoodie", "350.000 đ", "áo hoodie nam nữ form rộng tay dài dạng trơn ,áo có mũ to rộng, phối túi 2 bên cách điệu, thể hiện sự cá tính, hợp xu hướng thời trang đang được giới trẻ ưa chuộng hiện nay. Kiểu túi thọc rộng rãi vừa giúp bạn đựng được những vật nhỏ cần thiết, vừa nhấn nhá làm tăng vẻ thời trang cho sản phẩm.");
ProductList[16] = new product("HO", "HO11", "../IMG/hinhSP/HOODIE/03a.png", "Blue Dirty Coin Hoodie", "350.000 đ", "áo hoodie nam nữ form rộng tay dài dạng trơn ,áo có mũ to rộng, phối túi 2 bên cách điệu, thể hiện sự cá tính, hợp xu hướng thời trang đang được giới trẻ ưa chuộng hiện nay. Kiểu túi thọc rộng rãi vừa giúp bạn đựng được những vật nhỏ cần thiết, vừa nhấn nhá làm tăng vẻ thời trang cho sản phẩm.");
ProductList[17] = new product("HO", "HO12", "../IMG/hinhSP/HOODIE/03c.png", "BLack Dirty Coin Hoodie", "350.000 đ", "áo hoodie nam nữ form rộng tay dài dạng trơn ,áo có mũ to rộng, phối túi 2 bên cách điệu, thể hiện sự cá tính, hợp xu hướng thời trang đang được giới trẻ ưa chuộng hiện nay. Kiểu túi thọc rộng rãi vừa giúp bạn đựng được những vật nhỏ cần thiết, vừa nhấn nhá làm tăng vẻ thời trang cho sản phẩm.");
ProductList[18] = new product("HO", "HO13", "../IMG/hinhSP/HOODIE/03e.png", "White Dirty Coin Hoodie", "350.000 đ", "áo hoodie nam nữ form rộng tay dài dạng trơn ,áo có mũ to rộng, phối túi 2 bên cách điệu, thể hiện sự cá tính, hợp xu hướng thời trang đang được giới trẻ ưa chuộng hiện nay. Kiểu túi thọc rộng rãi vừa giúp bạn đựng được những vật nhỏ cần thiết, vừa nhấn nhá làm tăng vẻ thời trang cho sản phẩm.");
ProductList[19] = new product("HO", "HO14", "../IMG/hinhSP/HOODIE/04a.png", "Purple Dirty Coin Hoodie", "350.000 đ", "áo hoodie nam nữ form rộng tay dài dạng trơn ,áo có mũ to rộng, phối túi 2 bên cách điệu, thể hiện sự cá tính, hợp xu hướng thời trang đang được giới trẻ ưa chuộng hiện nay. Kiểu túi thọc rộng rãi vừa giúp bạn đựng được những vật nhỏ cần thiết, vừa nhấn nhá làm tăng vẻ thời trang cho sản phẩm.");
ProductList[20] = new product("HO", "HO15", "../IMG/hinhSP/HOODIE/05a.jpg", "Dirty Coin For Love Hoodie", "350.000 đ", "áo hoodie nam nữ form rộng tay dài dạng trơn ,áo có mũ to rộng, phối túi 2 bên cách điệu, thể hiện sự cá tính, hợp xu hướng thời trang đang được giới trẻ ưa chuộng hiện nay. Kiểu túi thọc rộng rãi vừa giúp bạn đựng được những vật nhỏ cần thiết, vừa nhấn nhá làm tăng vẻ thời trang cho sản phẩm.");
ProductList[21] = new product("HO", "HO16", "../IMG/hinhSP/HOODIE/01a.jpg", "Time Never Hoodie", "350.000 đ", "áo hoodie nam nữ form rộng tay dài dạng trơn ,áo có mũ to rộng, phối túi 2 bên cách điệu, thể hiện sự cá tính, hợp xu hướng thời trang đang được giới trẻ ưa chuộng hiện nay. Kiểu túi thọc rộng rãi vừa giúp bạn đựng được những vật nhỏ cần thiết, vừa nhấn nhá làm tăng vẻ thời trang cho sản phẩm.");
ProductList[22] = new product("HO", "HO17", "../IMG/hinhSP/HOODIE/02c.png", "YT Dark Hoodie", "350.000 đ", "áo hoodie nam nữ form rộng tay dài dạng trơn ,áo có mũ to rộng, phối túi 2 bên cách điệu, thể hiện sự cá tính, hợp xu hướng thời trang đang được giới trẻ ưa chuộng hiện nay. Kiểu túi thọc rộng rãi vừa giúp bạn đựng được những vật nhỏ cần thiết, vừa nhấn nhá làm tăng vẻ thời trang cho sản phẩm.");
ProductList[23] = new product("HO", "HO18", "../IMG/hinhSP/HOODIE/03e.png", "White Dirty Coin Hoodie", "350.000 đ", "áo hoodie nam nữ form rộng tay dài dạng trơn ,áo có mũ to rộng, phối túi 2 bên cách điệu, thể hiện sự cá tính, hợp xu hướng thời trang đang được giới trẻ ưa chuộng hiện nay. Kiểu túi thọc rộng rãi vừa giúp bạn đựng được những vật nhỏ cần thiết, vừa nhấn nhá làm tăng vẻ thời trang cho sản phẩm.");


/* Pants */
ProductList[24] = new product("PA", "PA01", "../IMG/hinhSP/PANTS/01a.jpg", "Quần dài TheNorthFace Dark", "250.000 đ", "Chất liệu: Thun cao cấp mềm mịn, ít xù lông. Kích thước: Freesize từ 40- 55kg, cao dưới từ 1m50 đến 1m65. Phù hợp mặc nhà, đi dạo, đi học , đi chơi.");
ProductList[25] = new product("PA", "PA02", "../IMG/hinhSP/PANTS/02a.jpg", "Quần dài TheNorthFace Light", "250.000 đ", "Chất liệu: Thun cao cấp mềm mịn, ít xù lông. Kích thước: Freesize từ 40- 55kg, cao dưới từ 1m50 đến 1m65. Phù hợp mặc nhà, đi dạo, đi học , đi chơi.");
ProductList[26] = new product("PA", "PA03", "../IMG/hinhSP/PANTS/03a.jpg", "Quần dài Runaway", "250.000 đ", "Chất liệu: Thun cao cấp mềm mịn, ít xù lông. Kích thước: Freesize từ 40- 55kg, cao dưới từ 1m50 đến 1m65. Phù hợp mặc nhà, đi dạo, đi học , đi chơi.");
ProductList[27] = new product("PA", "PA04", "../IMG/hinhSP/PANTS/04a.jpg", "Quần dài TSUN", "250.000 đ", "Chất liệu: Thun cao cấp mềm mịn, ít xù lông. Kích thước: Freesize từ 40- 55kg, cao dưới từ 1m50 đến 1m65. Phù hợp mặc nhà, đi dạo, đi học , đi chơi.");
ProductList[28] = new product("PA", "PA05", "../IMG/hinhSP/PANTS/05a.png", "Quần dài DirtyCoin TS", "250.000 đ", "Chất liệu: Thun cao cấp mềm mịn, ít xù lông. Kích thước: Freesize từ 40- 55kg, cao dưới từ 1m50 đến 1m65. Phù hợp mặc nhà, đi dạo, đi học , đi chơi.");
ProductList[29] = new product("PA", "PA06", "../IMG/hinhSP/PANTS/05c.png", "Quần dài DirtyCoin Red", "250.000 đ", "Chất liệu: Thun cao cấp mềm mịn, ít xù lông. Kích thước: Freesize từ 40- 55kg, cao dưới từ 1m50 đến 1m65. Phù hợp mặc nhà, đi dạo, đi học , đi chơi.");
ProductList[30] = new product("PA", "PA07", "../IMG/hinhSP/PANTS/05e.png", "Quần dài DirtyCoin Blue", "250.000 đ", "Chất liệu: Thun cao cấp mềm mịn, ít xù lông. Kích thước: Freesize từ 40- 55kg, cao dưới từ 1m50 đến 1m65. Phù hợp mặc nhà, đi dạo, đi học , đi chơi.");
ProductList[31] = new product("PA", "PA08", "../IMG/hinhSP/PANTS/06a.png", "Quần dài DirtyCoin Black", "250.000 đ", "Chất liệu: Thun cao cấp mềm mịn, ít xù lông. Kích thước: Freesize từ 40- 55kg, cao dưới từ 1m50 đến 1m65. Phù hợp mặc nhà, đi dạo, đi học , đi chơi.");
ProductList[32] = new product("PA", "PA09", "../IMG/hinhSP/PANTS/06c.png", "Quần dài DirtyCoin White", "250.000 đ", "Chất liệu: Thun cao cấp mềm mịn, ít xù lông. Kích thước: Freesize từ 40- 55kg, cao dưới từ 1m50 đến 1m65. Phù hợp mặc nhà, đi dạo, đi học , đi chơi.");
ProductList[33] = new product("PA", "PA10", "../IMG/hinhSP/PANTS/07a.jpg", "Quần dài YT Caro", "250.000 đ", "Chất liệu: Thun cao cấp mềm mịn, ít xù lông. Kích thước: Freesize từ 40- 55kg, cao dưới từ 1m50 đến 1m65. Phù hợp mặc nhà, đi dạo, đi học , đi chơi.");

// Sweater
ProductList[34] = new product("SW", "SW01", "../IMG/hinhSP/SWEATER/01a.jpg", "Áo len AYN Dark", "335.000 đ", "Thiết kế thời trang, đơn giản không kém phần hiện đại. Kiểu dáng gọn nhẹ, năng động. Chất vải mềm mại, dễ thấm hút mồ hôi. Kiểu dáng trẻ trung, cảm giác thoải mái");
ProductList[35] = new product("SW", "SW02", "../IMG/hinhSP/SWEATER/01c.jpg", "Áo len AYN Light", "335.000 đ", "Thiết kế thời trang, đơn giản không kém phần hiện đại. Kiểu dáng gọn nhẹ, năng động. Chất vải mềm mại, dễ thấm hút mồ hôi. Kiểu dáng trẻ trung, cảm giác thoải mái");
ProductList[36] = new product("SW", "SW03", "../IMG/hinhSP/SWEATER/02a.jpg", "Áo len TSUN Kid", "335.000 đ", "Thiết kế thời trang, đơn giản không kém phần hiện đại. Kiểu dáng gọn nhẹ, năng động. Chất vải mềm mại, dễ thấm hút mồ hôi. Kiểu dáng trẻ trung, cảm giác thoải mái");
ProductList[37] = new product("SW", "SW04", "../IMG/hinhSP/SWEATER/03a.jpg", "Áo len TSUN Noodle", "335.000 đ", "Thiết kế thời trang, đơn giản không kém phần hiện đại. Kiểu dáng gọn nhẹ, năng động. Chất vải mềm mại, dễ thấm hút mồ hôi. Kiểu dáng trẻ trung, cảm giác thoải mái");
ProductList[38] = new product("SW", "SW05", "../IMG/hinhSP/SWEATER/04a.jpg", "Áo len TSUN Rainbow", "335.000 đ", "Thiết kế thời trang, đơn giản không kém phần hiện đại. Kiểu dáng gọn nhẹ, năng động. Chất vải mềm mại, dễ thấm hút mồ hôi. Kiểu dáng trẻ trung, cảm giác thoải mái");
ProductList[39] = new product("SW", "SW06", "../IMG/hinhSP/SWEATER/05a.png", "Áo len SpaceDonut Pirple", "335.000 đ", "Thiết kế thời trang, đơn giản không kém phần hiện đại. Kiểu dáng gọn nhẹ, năng động. Chất vải mềm mại, dễ thấm hút mồ hôi. Kiểu dáng trẻ trung, cảm giác thoải mái");
ProductList[40] = new product("SW", "SW07", "../IMG/hinhSP/SWEATER/05c.png", "Áo len SpaceDonut Blue", "335.000 đ", "Thiết kế thời trang, đơn giản không kém phần hiện đại. Kiểu dáng gọn nhẹ, năng động. Chất vải mềm mại, dễ thấm hút mồ hôi. Kiểu dáng trẻ trung, cảm giác thoải mái");
ProductList[41] = new product("SW", "SW08", "../IMG/hinhSP/SWEATER/05e.png", "Áo len SpaceDonut Pink", "335.000 đ", "Thiết kế thời trang, đơn giản không kém phần hiện đại. Kiểu dáng gọn nhẹ, năng động. Chất vải mềm mại, dễ thấm hút mồ hôi. Kiểu dáng trẻ trung, cảm giác thoải mái");
ProductList[42] = new product("SW", "SW09", "../IMG/hinhSP/SWEATER/06a.png", "Áo len DirtyCoin Yellow", "335.000 đ", "Thiết kế thời trang, đơn giản không kém phần hiện đại. Kiểu dáng gọn nhẹ, năng động. Chất vải mềm mại, dễ thấm hút mồ hôi. Kiểu dáng trẻ trung, cảm giác thoải mái");
ProductList[43] = new product("SW", "SW10", "../IMG/hinhSP/SWEATER/06f.png", "Áo len DirtyCoin Black", "335.000 đ", "Thiết kế thời trang, đơn giản không kém phần hiện đại. Kiểu dáng gọn nhẹ, năng động. Chất vải mềm mại, dễ thấm hút mồ hôi. Kiểu dáng trẻ trung, cảm giác thoải mái");
ProductList[44] = new product("SW", "SW11", "../IMG/hinhSP/SWEATER/06e.png", "Áo len DirtyCoin Black", "335.000 đ", "Thiết kế thời trang, đơn giản không kém phần hiện đại. Kiểu dáng gọn nhẹ, năng động. Chất vải mềm mại, dễ thấm hút mồ hôi. Kiểu dáng trẻ trung, cảm giác thoải mái");
ProductList[45] = new product("SW", "SW12", "../IMG/hinhSP/SWEATER/06c.png", "Áo len DirtyCoin Red", "335.000 đ", "Thiết kế thời trang, đơn giản không kém phần hiện đại. Kiểu dáng gọn nhẹ, năng động. Chất vải mềm mại, dễ thấm hút mồ hôi. Kiểu dáng trẻ trung, cảm giác thoải mái");
ProductList[46] = new product("SW", "SW13", "../IMG/hinhSP/SWEATER/03a.jpg", "Áo len TSUN Noodle", "335.000 đ", "Thiết kế thời trang, đơn giản không kém phần hiện đại. Kiểu dáng gọn nhẹ, năng động. Chất vải mềm mại, dễ thấm hút mồ hôi. Kiểu dáng trẻ trung, cảm giác thoải mái");
ProductList[47] = new product("SW", "SW14", "../IMG/hinhSP/SWEATER/04a.jpg", "Áo len TSUN Rainbow", "335.000 đ", "Thiết kế thời trang, đơn giản không kém phần hiện đại. Kiểu dáng gọn nhẹ, năng động. Chất vải mềm mại, dễ thấm hút mồ hôi. Kiểu dáng trẻ trung, cảm giác thoải mái");
ProductList[48] = new product("SW", "SW15", "../IMG/hinhSP/SWEATER/05a.png", "Áo len SpaceDonut Pirple", "335.000 đ", "Thiết kế thời trang, đơn giản không kém phần hiện đại. Kiểu dáng gọn nhẹ, năng động. Chất vải mềm mại, dễ thấm hút mồ hôi. Kiểu dáng trẻ trung, cảm giác thoải mái");
ProductList[49] = new product("SW", "SW16", "../IMG/hinhSP/SWEATER/05c.png", "Áo len SpaceDonut Blue", "335.000 đ", "Thiết kế thời trang, đơn giản không kém phần hiện đại. Kiểu dáng gọn nhẹ, năng động. Chất vải mềm mại, dễ thấm hút mồ hôi. Kiểu dáng trẻ trung, cảm giác thoải mái");

// Tee
ProductList[50] = new product("TE", "TE01", "../IMG/hinhSP/TEE/01a.jpg", "Áo thun RatingHigh White", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[51] = new product("TE", "TE02", "../IMG/hinhSP/TEE/01c.jpg", "Áo thun RatingHigh Black", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[52] = new product("TE", "TE03", "../IMG/hinhSP/TEE/02a.jpg", "Áo thun Documentary Blue", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[53] = new product("TE", "TE04", "../IMG/hinhSP/TEE/02c.jpg", "Áo thun Documentary Black", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[54] = new product("TE", "TE05", "../IMG/hinhSP/TEE/03a.jpg", "Áo thun HadesPlay Pink", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[55] = new product("TE", "TE06", "../IMG/hinhSP/TEE/03c.jpg", "Áo thun 20XX", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[56] = new product("TE", "TE07", "../IMG/hinhSP/TEE/04a.jpg", "Áo thun LoneWolf 20XX", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[57] = new product("TE", "TE08", "../IMG/hinhSP/TEE/04c.jpg", "Áo thun LoneWolf Light", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[58] = new product("TE", "TE09", "../IMG/hinhSP/TEE/05a.jpg", "Áo thun NowhereLand Dark", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[59] = new product("TE", "TE10", "../IMG/hinhSP/TEE/05c.jpg", "Áo thun NowhereLand Light", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[60] = new product("TE", "TE11", "../IMG/hinhSP/TEE/06a.jpg", "Áo thun TCityD Dark", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[61] = new product("TE", "TE12", "../IMG/hinhSP/TEE/06c.jpg", "Áo thun TCityD Pink", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[62] = new product("TE", "TE13", "../IMG/hinhSP/TEE/07a.jpg", "Áo thun TCityD Red", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[63] = new product("TE", "TE14", "../IMG/hinhSP/TEE/07c.jpg", "Áo thun DirtyCoin Pink", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[64] = new product("TE", "TE15", "../IMG/hinhSP/TEE/07e.jpg", "Áo thun DirtyCoin Black", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[65] = new product("TE", "TE16", "../IMG/hinhSP/TEE/08a.jpg", "Áo thun Soda Blue", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[66] = new product("TE", "TE17", "../IMG/hinhSP/TEE/09a.jpg", "Áo thun TSUN SF", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[67] = new product("TE", "TE18", "../IMG/hinhSP/TEE/09c.jpg", "Áo thun TSUN Blue", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[68] = new product("TE", "TE19", "../IMG/hinhSP/TEE/09e.jpg", "Áo thun TSUN Pirple", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[69] = new product("TE", "TE20", "../IMG/hinhSP/TEE/10a.jpg", "Áo thun TSYN Red", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[70] = new product("TE", "TE21", "../IMG/hinhSP/TEE/10c.jpg", "Áo thun TSYN Black", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[71] = new product("TE", "TE22", "../IMG/hinhSP/TEE/11a.jpg", "Áo thun DirtyCoin Orange S", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[72] = new product("TE", "TE23", "../IMG/hinhSP/TEE/11c.jpg", "Áo thun DirtyCoin Purple S", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[73] = new product("TE", "TE24", "../IMG/hinhSP/TEE/11e.jpg", "Áo thun DirtyCoin Green S", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[74] = new product("TE", "TE25", "../IMG/hinhSP/TEE/12a.jpg", "Áo thun TSUN Fire", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[75] = new product("TE", "TE26", "../IMG/hinhSP/TEE/13a.jpg", "Áo thun TSUN Butterfly White", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[76] = new product("TE", "TE27", "../IMG/hinhSP/TEE/13c.jpg", "Áo thun TSUN Butterfly Black", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[77] = new product("TE", "TE28", "../IMG/hinhSP/TEE/14a.jpg", "Áo thun Lucky7 Black", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[78] = new product("TE", "TE29", "../IMG/hinhSP/TEE/14c.jpg", "Áo thun Luck 7 White", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[79] = new product("TE", "TE30", "../IMG/hinhSP/TEE/05a.jpg", "Áo thun NowhereLand Dark", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[80] = new product("TE", "TE31", "../IMG/hinhSP/TEE/05c.jpg", "Áo thun NowhereLand Light", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[81] = new product("TE", "TE32", "../IMG/hinhSP/TEE/06a.jpg", "Áo thun TCityD Dark", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[82] = new product("TE", "TE33", "../IMG/hinhSP/TEE/06c.jpg", "Áo thun TCityD Pink", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[83] = new product("TE", "TE34", "../IMG/hinhSP/TEE/07a.jpg", "Áo thun TCityD Red", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[84] = new product("TE", "TE35", "../IMG/hinhSP/TEE/07c.jpg", "Áo thun DirtyCoin Pink", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[85] = new product("TE", "TE36", "../IMG/hinhSP/TEE/07e.jpg", "Áo thun DirtyCoin Black", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[86] = new product("TE", "TE37", "../IMG/hinhSP/TEE/08a.jpg", "Áo thun Soda Blue", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");
ProductList[87] = new product("TE", "TE38", "../IMG/hinhSP/TEE/09a.jpg", "Áo thun TSUN SF", "175.000 đ", "Chất liệu thun mềm mại co giãn tốt , thoáng mát. Thiết kế thời trang phù hợp xu hướng hiện nay. Kiểu dáng đa phong cách, Đường may tinh tế sắc sảo. Size XS cho người từ 25-35 kg");