// src/data/mockDb.js

const defaultRooms = [
	// ==========================================
	// HẠNG STANDARD (Tầng 2 - Tầng 10: View Thành Phố, Thiết kế hiện đại đồng nhất)
	// ==========================================
	{
		id: "R101",
		name: "Standard Double Tầng Thấp",
		category: "Standard",
		price: 450000,
		discountPrice: 400000,
		image:
			"https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800",
		features: ["Tầng 2-5", "View Thành Phố"],
		style: "Hiện đại, Tone gỗ ấm",
		area: "25m2",
		furniture: [
			"1 Giường đôi",
			"Bàn làm việc",
			"Tủ quần áo âm tường",
			"Smart TV 40 inch",
		],
		services: ["Wifi miễn phí", "Dọn phòng hàng ngày", "Nước suối miễn phí"],
		status: "Trống",
	},
	{
		id: "R102",
		name: "Standard Premium City View",
		category: "Standard",
		price: 550000,
		discountPrice: 500000,
		image:
			"https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800",
		features: ["Tầng 5-8", "Cửa sổ kính sát trần"],
		style: "Hiện đại, Tối giản",
		area: "28m2",
		furniture: [
			"1 Giường Queen",
			"Bàn làm việc",
			"Ghế tựa",
			"Smart TV 43 inch",
		],
		services: ["Wifi miễn phí", "Trà/Cà phê miễn phí", "Hỗ trợ hành lý"],
		status: "Đang sử dụng",
	},
	{
		id: "R103",
		name: "Standard Twin City View",
		category: "Standard",
		price: 550000,
		discountPrice: 550000,
		image:
			"https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800",
		features: ["Tầng 8-10", "View công viên nội khu"],
		style: "Hiện đại, Sáng sủa",
		area: "30m2",
		furniture: [
			"2 Giường đơn",
			"Bàn trà nhỏ",
			"Tủ quần áo",
			"Smart TV 43 inch",
		],
		services: ["Wifi tốc độ cao", "Dọn phòng 24/7", "Nước suối miễn phí"],
		status: "Trống",
	},
	{
		id: "R104",
		name: "Standard Góc Tiêu Chuẩn",
		category: "Standard",
		price: 600000,
		discountPrice: 550000,
		image:
			"https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=800",
		features: ["Vị trí góc", "Hai mặt kính thoáng", "Tầng 5-10"],
		style: "Hiện đại, Đương đại",
		area: "32m2",
		furniture: [
			"1 Giường Queen",
			"Sofa đơn",
			"Két sắt mini",
			"Smart TV 43 inch",
		],
		services: ["Wifi miễn phí", "Dọn phòng", "Máy sấy tóc cao cấp"],
		status: "Trống",
	},
	{
		id: "R105",
		name: "Standard Business",
		category: "Standard",
		price: 500000,
		discountPrice: 480000,
		image:
			"https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800",
		features: ["Tầng 8-10", "Khu vực làm việc chuyên dụng"],
		style: "Hiện đại, Doanh nhân",
		area: "28m2",
		furniture: [
			"1 Giường đôi",
			"Bàn làm việc lớn",
			"Đèn chống cận",
			"Smart TV 40 inch",
		],
		services: ["Wifi tốc độ cao", "Báo thức", "Bàn ủi tại phòng"],
		status: "Bảo trì",
	},

	// ==========================================
	// HẠNG SUPERIOR (Tầng 11 - Tầng 20: Bắt đầu có view biển/thành phố rộng, nội thất nâng cấp)
	// ==========================================
	{
		id: "R201",
		name: "Superior Partial Ocean View",
		category: "Superior",
		price: 850000,
		discountPrice: 750000,
		image:
			"https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800",
		features: ["Tầng 11-15", "Tầm nhìn 40% ra biển"],
		style: "Sang trọng, Thanh lịch",
		area: "35m2",
		furniture: [
			"1 Giường King",
			"Sofa văng",
			"Bàn trang điểm",
			"Smart TV 50 inch",
		],
		services: ["Ăn sáng Buffet", "Wifi tốc độ cao", "Dọn phòng 2 lần/ngày"],
		status: "Trống",
	},
	{
		id: "R202",
		name: "Superior City Panorama",
		category: "Superior",
		price: 800000,
		discountPrice: 800000,
		image:
			"https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&q=80&w=800",
		features: ["Tầng 15-20", "Kính tràn viền ngắm thành phố"],
		style: "Hiện đại, Cao cấp",
		area: "35m2",
		furniture: ["1 Giường King", "Ghế thư giãn", "Minibar", "Smart TV 50 inch"],
		services: ["Ăn sáng Buffet", "Trái cây chào mừng", "Nước ép miễn phí"],
		status: "Trống",
	},
	{
		id: "R203",
		name: "Superior Twin Ocean Breeze",
		category: "Superior",
		price: 850000,
		discountPrice: 790000,
		image:
			"https://images.unsplash.com/photo-1595526051245-4506e0005bd0?auto=format&fit=crop&q=80&w=800",
		features: ["Tầng 16-20", "Cách âm tuyệt đối"],
		style: "Hiện đại, Sang trọng",
		area: "38m2",
		furniture: [
			"2 Giường đơn lớn",
			"Bàn làm việc",
			"Tủ quần áo gỗ",
			"Smart TV 50 inch",
		],
		services: ["Ăn sáng Buffet", "Wifi tốc độ cao", "Máy pha cafe viên nén"],
		status: "Đang sử dụng",
	},
	{
		id: "R204",
		name: "Superior Balcony",
		category: "Superior",
		price: 950000,
		discountPrice: 900000,
		image:
			"https://images.unsplash.com/photo-1631049552240-59c37f38802b?auto=format&fit=crop&q=80&w=800",
		features: ["Ban công kính riêng", "Hướng hồ bơi vô cực"],
		style: "Hiện đại, Mở",
		area: "40m2",
		furniture: [
			"1 Giường King",
			"Bàn ghế ban công",
			"Két sắt",
			"Smart TV 50 inch",
		],
		services: [
			"Ăn sáng Buffet",
			"Giặt ủi (2 món/ngày)",
			"Phục vụ tại phòng 24/7",
		],
		status: "Đang sử dụng",
	},
	{
		id: "R205",
		name: "Superior Executive",
		category: "Superior",
		price: 900000,
		discountPrice: 850000,
		image:
			"https://images.unsplash.com/photo-1598928636135-d146006ff4be?auto=format&fit=crop&q=80&w=800",
		features: ["Không gian làm việc rộng", "Tầng 18-20"],
		style: "Sang trọng, Doanh nhân",
		area: "40m2",
		furniture: ["1 Giường King", "Sofa dài", "Bàn kính", "Smart TV 55 inch"],
		services: ["Ăn sáng Buffet", "Sử dụng Gym", "Đưa đón sân bay (tính phí)"],
		status: "Trống",
	},

	// ==========================================
	// HẠNG DELUXE (Tầng 21 - Tầng 30: Vách kính ngắm biển/thành phố toàn cảnh)
	// ==========================================
	{
		id: "R301",
		name: "Deluxe Oceanfront",
		category: "Deluxe",
		price: 1500000,
		discountPrice: 1200000,
		image:
			"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
		features: ["Tầng 21-25", "Ban công kính ngắm trọn đại dương"],
		style: "Siêu Sang Trọng (Ultra Luxury)",
		area: "48m2",
		furniture: [
			"1 Giường King",
			"Bồn tắm nằm sát kính",
			"Sofa Bed",
			"Smart TV 55 inch",
		],
		services: [
			"Ăn sáng Buffet",
			"Sử dụng Gym & Hồ bơi vô cực",
			"Welcome Drink",
		],
		status: "Trống",
	},
	{
		id: "R302",
		name: "Deluxe Corner Panorama",
		category: "Deluxe",
		price: 1600000,
		discountPrice: 1600000,
		image:
			"https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=800",
		features: ["Tầng 25-30", "Kính cong 2 mặt ngắm bình minh"],
		style: "Đương đại, Thượng lưu",
		area: "52m2",
		furniture: [
			"1 Giường King",
			"Bàn làm việc giám đốc",
			"Sofa góc bọc da",
			"Smart TV 65 inch",
		],
		services: [
			"Ăn sáng Buffet",
			"Trà chiều miễn phí tại Lounge",
			"Đánh giày miễn phí",
		],
		status: "Đang sử dụng",
	},
	{
		id: "R303",
		name: "Deluxe Twin Premium",
		category: "Deluxe",
		price: 1500000,
		discountPrice: 1450000,
		image:
			"https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?auto=format&fit=crop&q=80&w=800",
		features: ["Tầng 21-30", "View biển", "Bồn tắm đứng mưa"],
		style: "Sang trọng, Tinh tế",
		area: "48m2",
		furniture: [
			"2 Giường Queen",
			"Bàn trà đá hoa cương",
			"Tủ âm tường",
			"Smart TV 55 inch",
		],
		services: [
			"Ăn sáng Buffet",
			"Sử dụng Spa (giảm 15%)",
			"Trái cây tươi mỗi ngày",
		],
		status: "Trống",
	},
	{
		id: "R304",
		name: "Deluxe Club Access",
		category: "Deluxe",
		price: 1800000,
		discountPrice: 1500000,
		image:
			"https://images.unsplash.com/photo-1631049552057-403cdb8f0658?auto=format&fit=crop&q=80&w=800",
		features: ["Tầng 28", "Quyền truy cập Executive Club"],
		style: "Siêu Hiện Đại",
		area: "50m2",
		furniture: [
			"Giường King nệm cao cấp",
			"Ghế đọc sách",
			"Máy lọc không khí",
			"Loa Bluetooth Harman Kardon",
		],
		services: [
			"Ăn sáng tại Club",
			"Cocktail miễn phí buổi tối",
			"Check-in riêng biệt",
		],
		status: "Trống",
	},
	{
		id: "R305",
		name: "Deluxe Loft Studio",
		category: "Deluxe",
		price: 1900000,
		discountPrice: 1800000,
		image:
			"https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800",
		features: ["Tầng 30", "Trần cao 4.5m", "Cửa sổ sát trần khổng lồ"],
		style: "Loft Studio Đương Đại",
		area: "55m2",
		furniture: [
			"1 Giường King",
			"Sofa da nguyên tấm",
			"Quầy bar mini",
			"Smart TV 65 inch",
		],
		services: ["Ăn sáng Buffet", "Vé Club tầng thượng", "Minibar miễn phí"],
		status: "Trống",
	},

	// ==========================================
	// HẠNG FAMILY (Phân bổ các tầng: Không gian siêu rộng cho gia đình)
	// ==========================================
	{
		id: "R401",
		name: "Family Connecting Suite",
		category: "Family",
		price: 2600000,
		discountPrice: 2400000,
		image:
			"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800",
		features: ["Tầng 20-25", "2 Phòng ngủ thông cửa", "2 Phòng tắm cao cấp"],
		style: "Hiện đại, Tiện nghi",
		area: "90m2",
		furniture: [
			"1 Giường King",
			"2 Giường đơn",
			"Bàn ăn 4 người",
			"2 Smart TV",
		],
		services: ["Ăn sáng 4 người", "Đồ chơi & Lều cho bé", "Gói kênh TV trẻ em"],
		status: "Trống",
	},
	{
		id: "R402",
		name: "Family Premium Ocean View",
		category: "Family",
		price: 3500000,
		discountPrice: 3100000,
		image:
			"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
		features: ["Tầng 28", "Ban công ngắm biển", "Phòng khách sinh hoạt chung"],
		style: "Sang trọng, Đẳng cấp",
		area: "100m2",
		furniture: [
			"2 Giường King",
			"Khu vực ăn uống",
			"Máy chơi game Playstation 5",
		],
		services: [
			"Ăn sáng 4 người",
			"Xe đưa đón sân bay gia đình",
			"Trông trẻ (tính phí)",
		],
		status: "Trống",
	},
	{
		id: "R403",
		name: "Family Executive City View",
		category: "Family",
		price: 2800000,
		discountPrice: 2600000,
		image:
			"https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=800",
		features: ["Tầng 25", "Không gian mở liên thông", "Phòng thay đồ Walk-in"],
		style: "Tân cổ điển nhẹ nhàng",
		area: "95m2",
		furniture: [
			"1 Giường King",
			"2 Giường Twin",
			"Bếp nhỏ sang trọng (Microwave)",
		],
		services: [
			"Ăn sáng 4 người",
			"Đồ dùng cá nhân cao cấp cho bé",
			"Trái cây chào mừng",
		],
		status: "Trống",
	},

	// ==========================================
	// HẠNG SUITE (Tầng 31 - Tầng 38: Không gian quyền lực, Đặc quyền Lounge VIP)
	// ==========================================
	{
		id: "R501",
		name: "Junior Ocean Suite",
		category: "Suite",
		price: 3500000,
		discountPrice: 3200000,
		image:
			"https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800",
		features: [
			"Tầng 31-35",
			"Phòng khách riêng biệt",
			"Bồn tắm Jacuzzi sát cửa sổ",
		],
		style: "Sang trọng Đương Đại",
		area: "75m2",
		furniture: [
			"Giường Super King",
			"Sofa da cao cấp",
			"Bàn làm việc doanh nhân",
			"Máy pha cà phê Nespresso",
		],
		services: ["Đặc quyền VIP Lounge", "Quản gia riêng", "Giặt ủi miễn phí"],
		status: "Trống",
	},
	{
		id: "R502",
		name: "Executive Grand Suite",
		category: "Suite",
		price: 4500000,
		discountPrice: 4000000,
		image:
			"https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&q=80&w=800",
		features: [
			"Tầng 35-38",
			"Tầm nhìn 270 độ",
			"Phòng họp/Tiếp khách rộng lớn",
		],
		style: "Quyền lực, Tinh tế",
		area: "90m2",
		furniture: [
			"Giường Super King",
			"Bàn họp/ăn 6 người",
			"Sofa chữ L",
			"Quầy bar pha chế",
		],
		services: [
			"Check-in VIP tại phòng",
			"Xe Limousine đưa đón",
			"Rượu vang thượng hạng",
		],
		status: "Trống",
	},
	{
		id: "R503",
		name: "Romance Oasis Suite",
		category: "Suite",
		price: 3800000,
		discountPrice: 3500000,
		image:
			"https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800",
		features: [
			"Tầng 36",
			"Thiết kế riêng cho cặp đôi",
			"Bồn tắm đôi phủ hoa hồng",
		],
		style: "Lãng mạn, Tinh khôi",
		area: "70m2",
		furniture: [
			"Giường King lọng che lụa",
			"Ghế thư giãn đôi",
			"Hệ thống âm thanh vòm",
		],
		services: [
			"Set up nến & rượu vang",
			"Ăn sáng tại giường",
			"Spa cặp đôi miễn phí 60p",
		],
		status: "Trống",
	},

	// ==========================================
	// HẠNG PRESIDENT / PENTHOUSE (Tầng 39 - Tầng 40: Siêu căn hộ chân mây)
	// ==========================================
	{
		id: "R601",
		name: "Presidential Penthouse",
		category: "President",
		price: 15000000,
		discountPrice: 15000000,
		image:
			"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
		features: [
			"Chiếm 1/2 Tầng 40",
			"Thang máy thẻ từ riêng",
			"Phòng trợ lý đi kèm",
		],
		style: "Siêu Hiện Đại (Ultra-Luxury)",
		area: "280m2",
		furniture: [
			"Nội thất phiên bản giới hạn",
			"Bàn ăn 12 người",
			"Đàn Grand Piano",
			"Rạp chiếu phim mini",
		],
		services: [
			"Bảo vệ 24/7",
			"Đầu bếp chuẩn Michelin phục vụ riêng",
			"Xe Maybach đưa đón",
		],
		status: "Trống",
	},
	{
		id: "R602",
		name: "Sky Pool Penthouse",
		category: "President",
		price: 12000000,
		discountPrice: 10500000,
		image:
			"https://cf.bstatic.com/xdata/images/hotel/max1024x768/679643277.jpg?k=e8a51cd48c1733fb761a016919a012376d24e06fa2d9bd8c8d72237e21031bc7&o=",
		features: [
			"Tầng 39",
			"Hồ bơi vô cực bằng kính trên không",
			"Sân hiên nướng BBQ",
		],
		style: "Resort Chân Mây",
		area: "320m2",
		furniture: [
			"3 Phòng ngủ Master",
			"Bếp mở đảo đá cẩm thạch",
			"Sofa chìm ngoài trời",
			"Ghế tắm nắng",
		],
		services: [
			"Tổ chức tiệc BBQ riêng",
			"Quản gia trực 24/24",
			"DJ theo yêu cầu",
		],
		status: "Đang sử dụng",
	},
	{
		id: "R603",
		name: "Royal Ambassador Suite",
		category: "President",
		price: 14000000,
		discountPrice: 12500000,
		image:
			"https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?auto=format&fit=crop&q=80&w=800",
		features: [
			"Tầng 39",
			"Nội thất mạ vàng",
			"Tầm nhìn bao quát toàn vịnh biển",
		],
		style: "Cổ điển sang trọng Châu Âu",
		area: "220m2",
		furniture: [
			"Giường Canopy siêu lớn",
			"Bộ bàn ghế uống trà kiểu Anh",
			"Đèn chùm pha lê nhập khẩu",
		],
		services: [
			"Dịch vụ trà chiều hoàng gia tại phòng",
			"Trị liệu Spa VIP",
			"Thẻ đen đặc quyền toàn hệ thống",
		],
		status: "Trống",
	},
	{
		id: "R604",
		name: "Starlight Penthouse",
		category: "President",
		price: 18000000,
		discountPrice: 16000000,
		image:
			"https://cf.bstatic.com/xdata/images/hotel/max1024x768/796797469.jpg?k=83ac0bcf4fe4f5141d0a48bfa763964ccb836508edd684d2dac304d43069a6ae&o=",
		features: [
			"Đỉnh chóp Tầng 40",
			"Trần kính ngắm sao",
			"Sân thượng riêng tư",
		],
		style: "Vị lai (Futuristic)",
		area: "250m2",
		furniture: [
			"Giường thông minh",
			"Bể sục Jacuzzi ngoài ban công",
			"Phòng thay đồ khổng lồ",
		],
		services: [
			"Tổ chức tiệc tối riêng tư",
			"Rượu Champagne thượng hạng",
			"Nhiếp ảnh gia chụp hình lưu niệm",
		],
		status: "Bảo trì",
	},
];

// Các hàm thao tác cơ sở dữ liệu giả lập (sử dụng Local Storage)
export const initDB = () => {
	if (!localStorage.getItem("rooms")) {
		localStorage.setItem("rooms", JSON.stringify(defaultRooms));
	}
	if (!localStorage.getItem("bookings")) {
		localStorage.setItem("bookings", JSON.stringify([]));
	}
	if (!localStorage.getItem("users")) {
		localStorage.setItem(
			"users",
			JSON.stringify([
				{ id: "U1", phone: "0123456789", role: "user", name: "Khách hàng 1" },
				{ id: "O1", phone: "owner", role: "owner", name: "Chủ Khách Sạn" },
				{ id: "A1", phone: "admin", role: "admin", name: "Quản Trị Viên" },
			]),
		);
	}
};

export const getRooms = () => JSON.parse(localStorage.getItem("rooms")) || [];
export const saveRooms = rooms =>
	localStorage.setItem("rooms", JSON.stringify(rooms));
export const getBookings = () =>
	JSON.parse(localStorage.getItem("bookings")) || [];
export const saveBookings = bookings =>
	localStorage.setItem("bookings", JSON.stringify(bookings));
export const getCurrentUser = () =>
	JSON.parse(localStorage.getItem("currentUser")) || null;
export const setCurrentUser = user =>
	localStorage.setItem("currentUser", JSON.stringify(user));
export const logout = () => localStorage.removeItem("currentUser");
