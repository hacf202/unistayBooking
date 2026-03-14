// src/data/mockDb.js

const defaultRooms = [
	// Hạng Standard (Tiêu chuẩn) - Phù hợp khách lẻ, đi công tác ngắn ngày
	{
		id: "R101",
		name: "Standard Giường Đơn",
		category: "Standard",
		price: 450000,
		discountPrice: 400000,
		image:
			"https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800",
		features: ["Không hút thuốc", "Cửa sổ nhỏ"],
		style: "Tối giản",
		area: "18m2",
		furniture: ["1 Giường đơn", "Bàn làm việc nhỏ", "Tủ quần áo", "TV 32 inch"],
		services: ["Wifi miễn phí", "Dọn phòng hàng ngày", "Nước suối miễn phí"],
		status: "Trống",
	},
	{
		id: "R102",
		name: "Standard Giường Đôi",
		category: "Standard",
		price: 550000,
		discountPrice: 500000,
		image:
			"https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800",
		features: ["Không hút thuốc", "Cửa sổ hướng phố"],
		style: "Tối giản",
		area: "20m2",
		furniture: ["1 Giường đôi", "Bàn làm việc", "Tủ quần áo", "TV 32 inch"],
		services: ["Wifi miễn phí", "Dọn phòng hàng ngày", "Trà/Cà phê miễn phí"],
		status: "Đang sử dụng",
	},
	{
		id: "R103",
		name: "Standard Twin",
		category: "Standard",
		price: 550000,
		discountPrice: 550000,
		image:
			"https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800",
		features: ["Cửa sổ hướng phố", "Cho phép hút thuốc (ban công)"],
		style: "Hiện đại",
		area: "22m2",
		furniture: ["2 Giường đơn", "Bàn trà nhỏ", "Tủ quần áo", "TV 40 inch"],
		services: ["Wifi miễn phí", "Dọn phòng hàng ngày", "Nước suối miễn phí"],
		status: "Trống",
	},
	{
		id: "R104",
		name: "Standard Góc",
		category: "Standard",
		price: 600000,
		discountPrice: 550000,
		image:
			"https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=800",
		features: ["Hai mặt thoáng", "Yên tĩnh"],
		style: "Hiện đại",
		area: "24m2",
		furniture: ["1 Giường đôi lớn", "Bàn làm việc", "Két sắt", "TV 40 inch"],
		services: ["Wifi miễn phí", "Dọn phòng hàng ngày", "Máy sấy tóc"],
		status: "Trống",
	},
	{
		id: "R105",
		name: "Standard Giường Đôi (Tầng trệt)",
		category: "Standard",
		price: 500000,
		discountPrice: 480000,
		image:
			"https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800",
		features: ["Gần sảnh chính", "Tiện lợi cho người lớn tuổi"],
		style: "Cổ điển",
		area: "20m2",
		furniture: ["1 Giường đôi", "Tủ đồ", "Ghế thư giãn"],
		services: ["Wifi miễn phí", "Hỗ trợ hành lý", "Nước suối"],
		status: "Bảo trì",
	},

	// Hạng Superior (Cao cấp hơn Standard)
	{
		id: "R201",
		name: "Superior View Thành Phố",
		category: "Superior",
		price: 850000,
		discountPrice: 750000,
		image:
			"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
		features: ["Cửa sổ toàn cảnh", "Cách âm tốt"],
		style: "Hiện đại, Tinh tế",
		area: "28m2",
		furniture: [
			"1 Giường Queen",
			"Sofa đơn",
			"Bàn làm việc lớn",
			"Smart TV 43 inch",
		],
		services: ["Wifi tốc độ cao", "Ăn sáng miễn phí", "Dọn phòng 2 lần/ngày"],
		status: "Trống",
	},
	{
		id: "R202",
		name: "Superior View Vườn",
		category: "Superior",
		price: 800000,
		discountPrice: 800000,
		image:
			"https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&q=80&w=800",
		features: ["Hướng khu vườn nội khu", "Rất yên tĩnh"],
		style: "Nhiệt đới (Tropical)",
		area: "28m2",
		furniture: ["1 Giường Queen", "Ghế mây", "Bàn trà", "Smart TV 43 inch"],
		services: ["Wifi tốc độ cao", "Ăn sáng", "Trái cây chào mừng"],
		status: "Trống",
	},
	{
		id: "R203",
		name: "Superior Twin View Thành Phố",
		category: "Superior",
		price: 850000,
		discountPrice: 790000,
		image:
			"https://images.unsplash.com/photo-1595526051245-4506e0005bd0?auto=format&fit=crop&q=80&w=800",
		features: ["Cửa sổ lớn", "Phù hợp bạn bè/đồng nghiệp"],
		style: "Hiện đại",
		area: "30m2",
		furniture: [
			"2 Giường đơn lớn",
			"Bàn làm việc",
			"Tủ quần áo gỗ",
			"Smart TV 43 inch",
		],
		services: ["Wifi tốc độ cao", "Ăn sáng", "Báo thức"],
		status: "Đang sử dụng",
	},
	{
		id: "R204",
		name: "Superior Ban Công",
		category: "Superior",
		price: 950000,
		discountPrice: 900000,
		image:
			"https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/169/2025/11/25035610/05.-Superior-Suite-1-King-Bed-with-Balcony.jpg",
		features: ["Ban công riêng", "Khu vực hút thuốc ngoài trời"],
		style: "Tối giản, Mở",
		area: "32m2",
		furniture: ["1 Giường Queen", "Bàn ghế ban công", "Két sắt", "Smart TV"],
		services: ["Ăn sáng", "Giặt ủi (tính phí)", "Minibar"],
		status: "Trống",
	},
	{
		id: "R205",
		name: "Superior Tầng Cao",
		category: "Superior",
		price: 900000,
		discountPrice: 850000,
		image:
			"https://images.unsplash.com/photo-1598928636135-d146006ff4be?auto=format&fit=crop&q=80&w=800",
		features: ["Tầng 15+", "Tầm nhìn cực đẹp"],
		style: "Sang trọng",
		area: "28m2",
		furniture: ["1 Giường Queen", "Sofa dài", "Bàn kính", "TV 50 inch"],
		services: ["Ăn sáng", "Buffet chiều", "Đưa đón sân bay (tính phí)"],
		status: "Trống",
	},

	// Hạng Deluxe (Sang trọng, không gian rộng)
	{
		id: "R301",
		name: "Deluxe Hướng Biển",
		category: "Deluxe",
		price: 1500000,
		discountPrice: 1200000,
		image:
			"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
		features: ["Ban công kính", "Bồn tắm nằm", "Ngắm bình minh"],
		style: "Hiện đại, Sang trọng",
		area: "40m2",
		furniture: [
			"1 Giường King",
			"Sofa Bed",
			"Bàn trang điểm",
			"Smart TV 55 inch",
		],
		services: [
			"Ăn sáng Buffet",
			"Sử dụng hồ bơi",
			"Gym miễn phí",
			"Nước ép chào mừng",
		],
		status: "Trống",
	},
	{
		id: "R302",
		name: "Deluxe Hướng Hồ Bơi",
		category: "Deluxe",
		price: 1400000,
		discountPrice: 1300000,
		image:
			"https://images.unsplash.com/photo-1631049552057-403cdb8f0658?auto=format&fit=crop&q=80&w=800",
		features: ["Tiện ra hồ bơi", "Cửa kính sát trần"],
		style: "Nhiệt đới",
		area: "38m2",
		furniture: [
			"1 Giường King",
			"Ghế thư giãn",
			"Minibar đầy đủ",
			"TV 50 inch",
		],
		services: ["Ăn sáng Buffet", "Khăn tắm hồ bơi riêng", "Spa giảm 10%"],
		status: "Trống",
	},
	{
		id: "R303",
		name: "Deluxe Góc Toàn Cảnh",
		category: "Deluxe",
		price: 1600000,
		discountPrice: 1600000,
		image:
			"https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=800",
		features: ["Kính 2 mặt", "Phòng tắm vách kính"],
		style: "Đương đại",
		area: "42m2",
		furniture: [
			"1 Giường King",
			"Bàn làm việc giám đốc",
			"Sofa góc",
			"Smart TV 55 inch",
		],
		services: ["Ăn sáng", "Trà chiều miễn phí", "Đánh giày miễn phí"],
		status: "Đang sử dụng",
	},
	{
		id: "R304",
		name: "Deluxe Twin Hướng Biển",
		category: "Deluxe",
		price: 1500000,
		discountPrice: 1450000,
		image:
			"https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?auto=format&fit=crop&q=80&w=800",
		features: ["Ban công rộng", "Bồn tắm đứng"],
		style: "Sang trọng, Ấm cúng",
		area: "40m2",
		furniture: ["2 Giường Queen nhỏ", "Bàn trà", "Tủ âm tường", "Smart TV"],
		services: [
			"Ăn sáng Buffet",
			"Sử dụng Gym/Hồ bơi",
			"Phục vụ tại phòng 24/7",
		],
		status: "Trống",
	},
	{
		id: "R305",
		name: "Deluxe Kiểu Nhật",
		category: "Deluxe",
		price: 1800000,
		discountPrice: 1500000,
		image:
			"https://mikazuki.com.vn/vnt_upload/product/08_2021/Deluxe___King_2.jpg",
		features: ["Sàn gỗ Tatami", "Bồn tắm gỗ", "Không gian thiền"],
		style: "Nhật Bản Truyền Thống",
		area: "45m2",
		furniture: ["Giường bệt kiểu Nhật", "Bàn trà bệt", "Đèn lồng", "TV ẩn"],
		services: ["Ăn sáng kiểu Á", "Trà đạo", "Kimono mặc trong phòng"],
		status: "Trống",
	},
	{
		id: "R306",
		name: "Deluxe Tầng Thượng",
		category: "Deluxe",
		price: 1900000,
		discountPrice: 1800000,
		image:
			"https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800",
		features: ["Trần cao", "Skylight (Giếng trời)"],
		style: "Loft Studio",
		area: "40m2",
		furniture: [
			"1 Giường King",
			"Sofa da",
			"Quầy bar mini",
			"Hệ thống âm thanh",
		],
		services: ["Ăn sáng", "Vé Club tầng thượng", "Cocktail miễn phí"],
		status: "Trống",
	},
	{
		id: "R307",
		name: "Deluxe Chống Ồn Tuyệt Đối",
		category: "Deluxe",
		price: 1600000,
		discountPrice: 1550000,
		image:
			"https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=800",
		features: ["Cách âm 100%", "Rèm cản sáng 100%"],
		style: "Dark Academia",
		area: "38m2",
		furniture: [
			"1 Giường King nệm cao cấp",
			"Bàn đọc sách",
			"Máy lọc không khí",
		],
		services: ["Menu gối ngủ", "Ăn sáng", "Sữa nóng trước khi ngủ"],
		status: "Bảo trì",
	},

	// Hạng Family (Gia đình)
	{
		id: "R401",
		name: "Family Suite Tiêu Chuẩn",
		category: "Family",
		price: 2500000,
		discountPrice: 2200000,
		image:
			"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800",
		features: ["2 Phòng ngủ thông nhau", "Phòng khách sinh hoạt chung"],
		style: "Ấm cúng, Gia đình",
		area: "65m2",
		furniture: [
			"1 Giường King",
			"2 Giường đơn",
			"Bàn ăn 4 ghế",
			"2 TV",
			"Bếp nhỏ",
		],
		services: [
			"Ăn sáng 4 người",
			"Giường cũi trẻ em (yêu cầu)",
			"Đồ chơi cho bé",
		],
		status: "Trống",
	},
	{
		id: "R402",
		name: "Family Căn Hộ",
		category: "Family",
		price: 2800000,
		discountPrice: 2800000,
		image:
			"https://sazihome.com/wp-content/uploads/sites/106/2025/02/HKH_4889-1-scaled.jpg",
		features: ["Bếp đầy đủ dụng cụ", "Máy giặt riêng"],
		style: "Bắc Âu (Scandinavian)",
		area: "75m2",
		furniture: [
			"1 Giường King",
			"1 Giường tầng",
			"Sofa góc lớn",
			"Tủ lạnh lớn",
		],
		services: ["Ăn sáng", "Dịch vụ đi chợ hộ", "Dọn phòng linh hoạt"],
		status: "Đang sử dụng",
	},
	{
		id: "R403",
		name: "Family Premium View Biển",
		category: "Family",
		price: 3500000,
		discountPrice: 3100000,
		image:
			"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
		features: ["Ban công siêu rộng", "Bồn tắm đôi"],
		style: "Sang trọng",
		area: "85m2",
		furniture: [
			"2 Giường King",
			"Khu vực ăn uống ngoài trời",
			"Hệ thống giải trí",
		],
		services: [
			"Ăn sáng 4 người",
			"Xe đưa đón sân bay gia đình",
			"Trông trẻ (tính phí)",
		],
		status: "Trống",
	},
	{
		id: "R404",
		name: "Family Kết Nối (Connecting Rooms)",
		category: "Family",
		price: 2600000,
		discountPrice: 2400000,
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQtTpuCZhRq5M1RhyJBspnKdexYDO_jMFmg&s",
		features: ["2 Phòng riêng biệt có cửa thông", "2 Phòng tắm"],
		style: "Hiện đại",
		area: "70m2",
		furniture: ["1 Giường King", "2 Giường Twin", "2 Minibar"],
		services: [
			"Ăn sáng 4 người",
			"Gói kênh TV trẻ em",
			"Đồ dùng cá nhân cho bé",
		],
		status: "Trống",
	},

	// Hạng Suite (Cực kỳ sang trọng)
	{
		id: "R501",
		name: "Junior Suite",
		category: "Suite",
		price: 3200000,
		discountPrice: 2900000,
		image:
			"https://product.hstatic.net/1000405477/product/junior_suite_001_1027e0b25ded4f848e5bdd5cabf5b5a0.jpg",
		features: ["Phòng khách và phòng ngủ tách biệt", "Bồn tắm sục Jacuzzi"],
		style: "Tân cổ điển",
		area: "60m2",
		furniture: [
			"Giường Super King",
			"Sofa da thật",
			"Bàn làm việc doanh nhân",
			"Máy pha cà phê Espresso",
		],
		services: [
			"Làm thủ tục nhận phòng tại phòng",
			"Quản gia riêng",
			"Giặt ủi 2 món/ngày miễn phí",
		],
		status: "Trống",
	},
	{
		id: "R502",
		name: "Executive Suite",
		category: "Suite",
		price: 4500000,
		discountPrice: 4000000,
		image:
			"https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800",
		features: [
			"View 360 độ",
			"Khu vực tiếp khách riêng biệt lớn",
			"Phòng họp nhỏ",
		],
		style: "Sang trọng quyền lực",
		area: "80m2",
		furniture: [
			"Giường Super King",
			"Bàn họp 4 người",
			"Sofa chữ L",
			"Quầy bar",
		],
		services: [
			"Đặc quyền Executive Lounge",
			"Đưa đón Limousine",
			"Trái cây tươi mỗi ngày",
		],
		status: "Trống",
	},
	{
		id: "R503",
		name: "Honeymoon Suite",
		category: "Suite",
		price: 3800000,
		discountPrice: 3500000,
		image:
			"https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800",
		features: ["Không gian lãng mạn", "Bồn tắm hoa hồng", "Nến và tinh dầu"],
		style: "Lãng mạn, Boutique",
		area: "65m2",
		furniture: [
			"Giường tròn hoặc giường King lọng che",
			"Ghế tình yêu",
			"Ban công ngắm sao",
		],
		services: [
			"Set up hoa tươi & rượu vang",
			"Bữa tối lãng mạn tại phòng",
			"Ăn sáng nổi tại hồ bơi",
		],
		status: "Trống",
	},
	{
		id: "R504",
		name: "Wellness Suite",
		category: "Suite",
		price: 4000000,
		discountPrice: 4000000,
		image:
			"https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800",
		features: ["Trang bị máy tập gym trong phòng", "Phòng xông hơi riêng"],
		style: "Mộc mạc, Thiên nhiên",
		area: "75m2",
		furniture: [
			"Giường King nệm cao su non",
			"Máy chạy bộ",
			"Thảm yoga",
			"Đèn đá muối",
		],
		services: [
			"Tư vấn dinh dưỡng",
			"Menu đồ ăn Healthy",
			"Spa 60 phút miễn phí",
		],
		status: "Trống",
	},

	// Hạng President / Villa (Đẳng cấp cao nhất)
	{
		id: "R601",
		name: "Presidential Suite (Phòng Tổng Thống)",
		category: "President",
		price: 15000000,
		discountPrice: 15000000,
		image:
			"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
		features: ["Toàn bộ tầng cao nhất", "Thang máy riêng", "Phòng vệ sĩ"],
		style: "Hoàng Gia Châu Âu",
		area: "250m2",
		furniture: [
			"Giường dập vàng",
			"Bàn ăn 12 người",
			"Piano đàn cơ",
			"Phòng chiếu phim riêng",
		],
		services: [
			"Bảo vệ 24/7",
			"Đầu bếp riêng",
			"Đội ngũ phục vụ chuyên trách",
			"Xe siêu sang đưa đón",
		],
		status: "Trống",
	},
	{
		id: "R602",
		name: "Villa Đại Dương (Có Hồ Bơi Riêng)",
		category: "President",
		price: 12000000,
		discountPrice: 10500000,
		image:
			"https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=800",
		features: [
			"Biệt thự độc lập ven biển",
			"Hồ bơi vô cực riêng",
			"Sân vườn nướng BBQ",
		],
		style: "Địa Trung Hải",
		area: "300m2",
		furniture: [
			"3 Phòng ngủ lớn",
			"Bếp mở hiện đại",
			"Sofa ngoài trời",
			"Ghế tắm nắng",
		],
		services: ["Setup BBQ tận nơi", "Quản gia Villa", "Yoga sáng tại vườn"],
		status: "Đang sử dụng",
	},
	{
		id: "R603",
		name: "Penthouse Ánh Sao",
		category: "President",
		price: 18000000,
		discountPrice: 16000000,
		image:
			"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
		features: ["Căn hộ áp mái", "Trần kính ngắm sao", "Sân thượng riêng"],
		style: "Siêu Hiện Đại (Ultra-modern)",
		area: "200m2",
		furniture: [
			"Giường thông minh",
			"Bể sục Jacuzzi ngoài trời",
			"Phòng thay đồ Walk-in closet",
		],
		services: [
			"Tổ chức tiệc riêng",
			"DJ (theo yêu cầu)",
			"Rượu Champagne thượng hạng chào mừng",
		],
		status: "Trống",
	},
	{
		id: "R604",
		name: "Villa Rừng Nhiệt Đới",
		category: "President",
		price: 10000000,
		discountPrice: 9000000,
		image:
			"https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&q=80&w=800",
		features: [
			"Biệt thự ẩn trong đồi cây",
			"Suối nhân tạo",
			"Gần gũi thiên nhiên tuyệt đối",
		],
		style: "Eco-Lodge Cao Cấp",
		area: "400m2 (gồm vườn)",
		furniture: [
			"2 Phòng ngủ gỗ",
			"Bồn tắm đá tự nhiên ngoài trời",
			"Võng lưới qua suối",
		],
		services: [
			"Đưa đón bằng xe điện Buggy",
			"Trị liệu Spa tại Villa",
			"Không sử dụng rác thải nhựa",
		],
		status: "Bảo trì",
	},
	{
		id: "R605",
		name: "Royal Suite",
		category: "President",
		price: 14000000,
		discountPrice: 12500000,
		image:
			"https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?auto=format&fit=crop&q=80&w=800",
		features: [
			"Nội thất dát vàng",
			"Tranh nghệ thuật nguyên bản",
			"Tầm nhìn bao quát toàn khu vực",
		],
		style: "Cổ điển sang trọng",
		area: "180m2",
		furniture: [
			"Giường Canopy siêu lớn",
			"Bộ bàn ghế uống trà kiểu Anh",
			"Thư viện mini",
		],
		services: [
			"Dịch vụ trà chiều hoàng gia",
			"Xe Rolls Royce đưa đón",
			"Thẻ đen đặc quyền hệ thống",
		],
		status: "Trống",
	},
];

// Các hàm thao tác cơ sở dữ liệu giả lập (sử dụng Local Storage)
// Khởi tạo DB nếu chưa có hoặc nếu mảng phòng bị thiếu sót
export const initDB = () => {
	// Bạn có thể xóa key 'rooms' trong F12 -> Application -> Local Storage để nó load lại 30 phòng này
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

// Lấy danh sách phòng
export const getRooms = () => {
	return JSON.parse(localStorage.getItem("rooms")) || [];
};

// Cập nhật danh sách phòng
export const saveRooms = rooms => {
	localStorage.setItem("rooms", JSON.stringify(rooms));
};

// Lấy danh sách hóa đơn/đặt phòng
export const getBookings = () => {
	return JSON.parse(localStorage.getItem("bookings")) || [];
};

// Cập nhật hóa đơn/đặt phòng
export const saveBookings = bookings => {
	localStorage.setItem("bookings", JSON.stringify(bookings));
};

// Lấy thông tin người dùng đang đăng nhập hiện tại
export const getCurrentUser = () => {
	return JSON.parse(localStorage.getItem("currentUser")) || null;
};

// Lưu trạng thái đăng nhập
export const setCurrentUser = user => {
	localStorage.setItem("currentUser", JSON.stringify(user));
};

// Đăng xuất
export const logout = () => {
	localStorage.removeItem("currentUser");
};
