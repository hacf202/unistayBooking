import React, { useState } from "react";
import {
	Search,
	Calendar,
	User,
	ChevronDown,
	Phone,
	Menu,
	MapPin,
	Star,
	ShieldCheck,
	Clock,
	ThumbsUp,
	X,
} from "lucide-react";

// ==========================================
// 1. DỮ LIỆU GIẢ LẬP (MOCK DATA)
// ==========================================

const travelStyles = [
	{
		id: 1,
		title: "Du Xuân Cầu An",
		desc: "Giữ trọn nét nguyên bản, dịch vụ chuẩn mực",
		hotels: 24,
		img: "https://images2.thanhnien.vn/528068263637045248/2024/2/11/9-1707648650119209407466.jpeg",
	},
	{
		id: 2,
		title: "UniStay Club",
		desc: "Nghỉ dưỡng trọn gói, không lo nghĩ",
		hotels: 18,
		img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400&q=80",
	},
	{
		id: 3,
		title: "Đón Gió Dịp Lễ",
		desc: "Khám phá thiên nhiên, tái tạo năng lượng",
		hotels: 120,
		img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&q=80",
	},
	{
		id: 4,
		title: "UniStay Luxury",
		desc: "Resort đẳng cấp thế giới, tiện nghi xa hoa",
		hotels: 38,
		img: "https://cdn1.UniStay.com/images/2025/06/09/15/02-01-0189_4BedroomPoolVillaAerial_7vcgig_5uty80_.webp",
	},
];

const domesticDestinations = [
	{
		id: 1,
		name: "Phú Quốc",
		hotels: 920,
		span: "col-span-1 md:col-span-2 row-span-1",
		img: "https://bcp.cdnchinhphu.vn/334894974524682240/2025/6/23/phu-quoc-17506756503251936667562.jpg",
	},
	{
		id: 2,
		name: "Vũng Tàu",
		hotels: 705,
		span: "col-span-1 row-span-2",
		img: "https://pystravel.vn/_next/image?url=https%3A%2F%2Fbooking.pystravel.vn%2Fuploads%2Fposts%2Favatar%2F1741497950.jpg&w=3840&q=75",
	},
	{
		id: 3,
		name: "Đà Lạt",
		hotels: 1180,
		span: "col-span-1 row-span-1",
		img: "https://vitracotour.com/wp-content/uploads/2024/02/du-lich-da-lat.jpg",
	},
	{
		id: 4,
		name: "Quy Nhơn",
		hotels: 333,
		span: "col-span-1 row-span-1",
		img: "https://bizweb.dktcdn.net/100/514/927/files/kinh-nghiem-du-lich-quy-nhon-phan-van-travel-1.webp?v=1759855393767",
	},
	{
		id: 5,
		name: "Nha Trang",
		hotels: 1023,
		span: "col-span-1 row-span-2",
		img: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&q=80",
	},
	{
		id: 6,
		name: "Đà Nẵng",
		hotels: 1358,
		span: "col-span-1 md:col-span-2 row-span-1",
		img: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80",
	},
	{
		id: 7,
		name: "Phan Thiết",
		hotels: 499,
		span: "col-span-1 row-span-1",
		img: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=400&q=80",
	},
	{
		id: 8,
		name: "Phú Yên",
		hotels: 18,
		span: "col-span-1 row-span-1",
		img: "https://bvhttdl.mediacdn.vn/291773308735864832/2024/12/24/phuyen1-1735028071185-17350280737392118739384.jpg",
	},
];

const foreignDestinations = [
	{
		id: 1,
		name: "Singapore",
		hotels: 765,
		img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&q=80",
	},
	{
		id: 2,
		name: "Bangkok",
		hotels: 4289,
		img: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&q=80",
	},
	{
		id: 3,
		name: "Seoul",
		hotels: 2471,
		img: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=400&q=80",
	},
	{
		id: 4,
		name: "Tokyo",
		hotels: 3870,
		img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=400&q=80",
	},
];

const flashDeals = [
	{
		id: 1,
		name: "Vinpearl Resort & Spa Phú Quốc",
		location: "Phú Quốc",
		oldPrice: "3.200.000",
		newPrice: "1.850.000",
		discount: "-42%",
		img: "https://5saotravel.vn/wp-content/uploads/2021/03/vinpearl-resort-spa-phu-quoc-2.jpeg",
	},
	{
		id: 2,
		name: "InterContinental Đà Nẵng",
		location: "Bán đảo Sơn Trà",
		oldPrice: "8.500.000",
		newPrice: "6.200.000",
		discount: "-27%",
		img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80",
	},
	{
		id: 3,
		name: "Hôtel des Arts Saigon",
		location: "Quận 3, TP.HCM",
		oldPrice: "4.100.000",
		newPrice: "2.950.000",
		discount: "-28%",
		img: "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/92/2023/11/15040321/Social-Club-Rooftop-Bar_0919-AJS-NOI-Hotel-des-Arts-SGN-DJI_0215-Web-1500x1000.jpg",
	},
	{
		id: 4,
		name: "Amiana Resort Nha Trang",
		location: "Nha Trang",
		oldPrice: "3.800.000",
		newPrice: "2.100.000",
		discount: "-44%",
		img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400&q=80",
	},
	{
		id: 5,
		name: "Swiss-Belresort Tuyền Lâm",
		location: "Đà Lạt",
		oldPrice: "2.500.000",
		newPrice: "1.350.000",
		discount: "-46%",
		img: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400&q=80",
	},
];

const travelArticles = [
	{
		id: 1,
		title: "Kinh nghiệm du lịch Phú Quốc tự túc từ A-Z năm 2024",
		category: "Cẩm nang",
		date: "12/03/2024",
		img: "https://dulich9.com/wp-content/uploads/2023/06/Kinh-nghiem-du-lich-Phu-Quoc-Cover.png",
	},
	{
		id: 2,
		title: "Top 5 Resort có hồ bơi vô cực đẹp nhất Việt Nam",
		category: "Review",
		date: "10/03/2024",
		img: "https://letsflytravel.vn/wp-content/uploads/2025/03/khach-san-co-be-boi-nha-trang-the-empyrean-scaled.webp",
	},
	{
		id: 3,
		title: "Lịch trình khám phá Đà Lạt 3 ngày 2 đêm siêu tiết kiệm",
		category: "Lịch trình",
		date: "08/03/2024",
		img: "https://tourdalattravel.com/wp-content/uploads/2017/11/Tour-Da-Lat-3-Ngay-2-Dem-Ngay-3.png",
	},
];

// DỮ LIỆU MỚI: Các loại phong cảnh và khách sạn gợi ý
const sceneryTypes = [
	{ id: "all", label: "Tất cả" },
	{ id: "beach", label: "Biển xanh vẫy gọi" },
	{ id: "mountain", label: "Núi rừng hùng vĩ" },
	{ id: "city", label: "Thành thị sôi động" },
	{ id: "nature", label: "Gần gũi thiên nhiên" },
];

const sceneryHotels = [
	{
		id: "h1",
		name: "Amiana Resort Nha Trang",
		location: "Nha Trang, Khánh Hòa",
		type: "beach",
		price: "2.100.000",
		rating: 4.9,
		img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
		desc: "Amiana Resort Nha Trang mang đến không gian nghỉ dưỡng sang trọng với bãi biển riêng nước trong vắt, hồ bơi nước mặn tuyệt đẹp và các dịch vụ spa đẳng cấp. Chắc chắn sẽ làm hài lòng những du khách khó tính nhất.",
		amenities: [
			"Bãi biển riêng",
			"Hồ bơi nước mặn",
			"Spa & Massage",
			"Nhà hàng 5 sao",
		],
	},
	{
		id: "h2",
		name: "Topas Ecolodge Sapa",
		location: "Sapa, Lào Cai",
		type: "mountain",
		price: "4.500.000",
		rating: 4.8,
		img: "https://topasecolodge.com/wp-content/uploads/2025/10/TEL_Infinity-Pool_-Best-Pool-in-Sapa-2.jpg",
		desc: "Nằm vươn mình trên đỉnh đồi tuyệt đẹp, Topas Ecolodge cung cấp các bungalow độc đáo với tầm nhìn toàn cảnh ra những thửa ruộng bậc thang kỳ vĩ. Điểm đến lý tưởng để trốn khỏi nhịp sống hối hả.",
		amenities: ["Hồ bơi vô cực", "Trekking", "Nhà hàng bản địa", "Xe đưa đón"],
	},
	{
		id: "h3",
		name: "Vinpearl Landmark 81",
		location: "Quận Bình Thạnh, TP.HCM",
		type: "city",
		price: "3.200.000",
		rating: 4.7,
		img: "https://vietnamland.vn/wp-content/uploads/2023/02/landmark-81-1.jpg",
		desc: "Khách sạn cao nhất Việt Nam mang đến trải nghiệm lưu trú xa hoa giữa tầng mây. Thưởng thức tầm nhìn ngoạn mục bao quát toàn thành phố ngay từ phòng ngủ của bạn.",
		amenities: ["Bar trên cao", "Hồ bơi vô cực", "Gym", "Trung tâm thương mại"],
	},
	{
		id: "h4",
		name: "Pu Luong Retreat",
		location: "Bá Thước, Thanh Hóa",
		type: "nature",
		price: "1.500.000",
		rating: 4.6,
		img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
		desc: "Ẩn mình giữa khu bảo tồn thiên nhiên Pù Luông nguyên sơ. Mang đến không gian tĩnh lặng, yên bình hòa quyện với văn hóa truyền thống dân tộc Thái.",
		amenities: ["Bể bơi sinh thái", "Tour khám phá rừng", "Đạp xe", "Tiệc BBQ"],
	},
	{
		id: "h5",
		name: "InterContinental Phú Quốc",
		location: "Bãi Trường, Phú Quốc",
		type: "beach",
		price: "5.100.000",
		rating: 4.9,
		img: "https://cdn1.UniStay.com/UniStay/2019/06/17/18/1.webp?o=jpg&w=767",
		desc: "Khu nghỉ dưỡng đẳng cấp quốc tế tọa lạc ngay sát Bãi Trường tuyệt đẹp. Nổi bật với quán bar INK 360 cao nhất đảo và hệ thống nhà hàng đa dạng ẩm thực.",
		amenities: ["Bãi biển riêng", "Kids Club", "Spa cao cấp", "4 Nhà hàng"],
	},
	{
		id: "h6",
		name: "Swiss-Belresort Tuyền Lâm",
		location: "Đà Lạt, Lâm Đồng",
		type: "mountain",
		price: "1.350.000",
		rating: 4.5,
		img: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80",
		desc: "Được bao quanh bởi những đồi thông trập trùng và sân golf 18 lỗ tuyệt đẹp, mang đậm kiến trúc Anglo-Normand đặc trưng của vùng nông thôn Anh-Pháp.",
		amenities: [
			"Sân Golf",
			"Hồ bơi trong nhà",
			"Phòng Xông hơi",
			"Xe đưa đón trung tâm",
		],
	},
];

// ==========================================
// 2. CÁC COMPONENT GIAO DIỆN CHÍNH
// ==========================================

const Header = () => (
	<header className='absolute top-0 left-0 w-full z-50 px-4 py-3 text-white flex justify-between items-center max-w-7xl mx-auto right-0'>
		<div className='flex items-center gap-8'>
			<h1 className='text-3xl font-extrabold tracking-tighter text-blue-100 cursor-pointer'>
				UniStay<span className='text-sm font-normal'>.com</span>
			</h1>
			<nav className='hidden md:flex gap-6 font-medium text-sm'>
				<a
					href='#'
					className='hover:text-blue-200 transition border-b-2 border-transparent hover:border-blue-200 pb-1'
				>
					Khách sạn
				</a>
				<a href='#' className='hover:text-blue-200 transition pb-1'>
					Tours
				</a>
				<a href='#' className='hover:text-blue-200 transition pb-1'>
					Vé máy bay
				</a>
				<a href='#' className='hover:text-blue-200 transition pb-1'>
					Vé vui chơi
				</a>
			</nav>
		</div>
		<div className='flex items-center gap-6'>
			<div className='hidden lg:flex items-center gap-2 text-sm font-medium'>
				<Phone size={18} className='animate-pulse' />
				<div className='flex flex-col'>
					<span className='font-bold text-lg leading-none'>1900 1870</span>
					<span className='text-[10px] text-gray-200'>📞 7h00 → 21h</span>
				</div>
			</div>
			<div className='flex items-center gap-1 cursor-pointer hover:bg-white/10 px-3 py-2 rounded-lg transition border border-transparent hover:border-white/20'>
				<User size={20} />
				<span className='text-sm font-medium hidden sm:block'>Tài khoản</span>
				<ChevronDown size={16} />
			</div>
			<Menu className='md:hidden cursor-pointer' />
		</div>
	</header>
);

const SearchBox = () => (
	<div className='bg-white p-2 rounded-2xl shadow-2xl w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-2 border-4 border-white/20 backdrop-blur-md'>
		{/* Input Điểm đến */}
		<div className='flex-1 flex items-center border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 hover:bg-white focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500 transition cursor-text relative'>
			<Search className='text-blue-600 mr-3' size={24} />
			<div className='flex flex-col w-full'>
				<span className='text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1'>
					Điểm đến / Khách sạn
				</span>
				<input
					type='text'
					placeholder='Bạn muốn đi đâu?'
					className='outline-none w-full text-gray-900 font-bold bg-transparent placeholder-gray-400'
				/>
			</div>
		</div>

		{/* Nhóm Ngày tháng */}
		<div className='flex flex-1 border border-gray-200 rounded-xl bg-gray-50 hover:bg-white transition cursor-pointer divide-x divide-gray-200 group hover:ring-2 hover:ring-blue-500'>
			<div className='flex-1 flex items-center px-4 py-3'>
				<Calendar className='text-blue-600 mr-3' size={24} />
				<div className='flex flex-col'>
					<span className='text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1'>
						Nhận phòng
					</span>
					<span className='font-bold text-gray-900 text-sm'>18 Thg 03</span>
				</div>
			</div>
			<div className='flex-1 flex items-center px-4 py-3'>
				<div className='flex flex-col pl-2'>
					<span className='text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1'>
						Trả phòng
					</span>
					<span className='font-bold text-gray-900 text-sm'>21 Thg 03</span>
				</div>
			</div>
		</div>

		{/* Input Số người */}
		<div className='flex-1 flex items-center border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 hover:bg-white hover:ring-2 hover:ring-blue-500 transition cursor-pointer'>
			<User className='text-blue-600 mr-3' size={24} />
			<div className='flex flex-col'>
				<span className='text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1'>
					Khách & Phòng
				</span>
				<span className='font-bold text-gray-900 text-sm'>
					2 người lớn, 1 phòng
				</span>
			</div>
		</div>

		{/* Nút Tìm kiếm */}
		<button className='bg-secondary hover:bg-yellow-500 text-blue-900 font-extrabold text-lg px-8 py-3 rounded-xl transition duration-200 md:w-auto w-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'>
			Tìm kiếm
		</button>
	</div>
);

const SectionTitle = ({ title, subtitle, badge }) => (
	<div className='mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4'>
		<div>
			<h2 className='text-3xl font-extrabold text-gray-900 mb-2'>{title}</h2>
			{subtitle && <p className='text-gray-500 text-base'>{subtitle}</p>}
		</div>
		{badge && (
			<span className='bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 border border-red-100 shadow-sm'>
				<span className='animate-pulse'>🔥</span> {badge}
			</span>
		)}
	</div>
);

// ==========================================
// 3. COMPONENT CHÍNH (APP)
// ==========================================

function App() {
	// State cho bộ lọc phong cảnh và chi tiết khách sạn
	const [activeScenery, setActiveScenery] = useState("all");
	const [selectedHotelDetail, setSelectedHotelDetail] = useState(null);

	// Lọc danh sách khách sạn theo phong cảnh
	const filteredHotels =
		activeScenery === "all"
			? sceneryHotels
			: sceneryHotels.filter(hotel => hotel.type === activeScenery);

	return (
		<div className='min-h-screen bg-gray-50 font-sans text-gray-800 selection:bg-blue-200 selection:text-blue-900 relative'>
			{/* --- HERO SECTION --- */}
			<section className='relative h-[650px] flex items-center justify-center'>
				<div
					className='absolute inset-0 z-0 bg-cover bg-center bg-no-repeat'
					style={{
						backgroundImage:
							"url('https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1600&q=80')",
					}}
				>
					<div className='absolute inset-0 bg-gradient-to-b from-[#003b95]/90 via-[#003b95]/50 to-[#f9fafb]'></div>
				</div>

				<Header />

				<div className='relative z-10 w-full max-w-7xl mx-auto px-4 mt-10'>
					<div className='text-center md:text-left mb-10'>
						<h1 className='text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-lg tracking-tight'>
							Trải nghiệm kỳ nghỉ tuyệt vời
						</h1>
						<p className='text-xl text-blue-100 font-medium drop-shadow-md'>
							Combo khách sạn - vé máy bay - đưa đón sân bay giá tốt nhất
						</p>
					</div>
					<SearchBox />
				</div>
			</section>

			{/* --- NỘI DUNG CHÍNH --- */}
			<main className='max-w-7xl mx-auto px-4 py-12 space-y-24'>
				{/* BANNER KHUYẾN MÃI */}
				<section>
					<SectionTitle
						title='Combo tốt nhất hôm nay'
						subtitle='Nhanh tay đặt ngay. Để mai sẽ lỡ'
						badge='1.014 khách đã đặt phòng trong 24h qua'
					/>
					<div className='rounded-2xl overflow-hidden shadow-lg cursor-pointer relative group'>
						<img
							src='https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/482601ldB/anh-mo-ta.png'
							alt='Promo Banner'
							className='w-full h-[250px] md:h-[300px] object-cover group-hover:scale-105 transition duration-700 ease-in-out'
						/>
						<div className='absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center'>
							<div className='p-8 md:p-12 text-white'>
								<span className='bg-secondary text-blue-900 font-bold px-3 py-1 rounded text-sm mb-4 inline-block'>
									Khuyến mãi Độc quyền
								</span>
								<h3 className='text-3xl md:text-4xl font-black mb-2'>
									Mùa hè rực rỡ
								</h3>
								<p className='text-lg text-gray-200 mb-6'>
									Giảm đến 50% cho các resort sát biển
								</p>
								<button className='bg-white text-blue-900 font-bold px-6 py-2 rounded-lg hover:bg-gray-100 transition'>
									Khám phá ngay
								</button>
							</div>
						</div>
					</div>
				</section>

				{/* FLASH SALE */}
				<section>
					<SectionTitle
						title='Giá Tốt Mỗi Ngày'
						subtitle='Cơ hội chớp nhoáng, đặt phòng giá siêu tiết kiệm'
					/>
					<div className='flex overflow-x-auto gap-6 pb-6 snap-x no-scrollbar -mx-4 px-4 md:mx-0 md:px-0'>
						{flashDeals.map(deal => (
							<div
								key={deal.id}
								className='min-w-[280px] md:min-w-[320px] bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden snap-start flex flex-col group cursor-pointer'
							>
								<div className='relative h-48 overflow-hidden'>
									<img
										src={deal.img}
										alt={deal.name}
										className='w-full h-full object-cover group-hover:scale-110 transition duration-500'
									/>
									<span className='absolute top-3 left-3 bg-red-500 text-white font-black px-2 py-1 rounded text-sm shadow-md'>
										{deal.discount}
									</span>
								</div>
								<div className='p-5 flex flex-col flex-1 justify-between'>
									<div>
										<h3 className='font-bold text-gray-900 text-lg mb-1 line-clamp-1'>
											{deal.name}
										</h3>
										<div className='flex items-center text-gray-500 text-sm mb-4'>
											<MapPin size={14} className='mr-1' /> {deal.location}
										</div>
									</div>
									<div className='flex flex-col items-end border-t border-gray-100 pt-3'>
										<span className='text-gray-400 line-through text-sm'>
											{deal.oldPrice} ₫
										</span>
										<span className='text-xl font-black text-blue-600'>
											{deal.newPrice} ₫
										</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* TÍNH NĂNG MỚI NÂNG CẤP: BẠN MUỐN ĐI ĐÂU? (Bộ lọc phong cảnh & Xem chi tiết) */}
				<section>
					<SectionTitle
						title='Bạn muốn đi đâu?'
						subtitle='Khám phá và lựa chọn điểm lưu trú theo phong cảnh yêu thích của bạn'
					/>

					{/* Thanh lọc (Filter Tabs) */}
					<div className='flex flex-wrap gap-3 mb-8'>
						{sceneryTypes.map(type => (
							<button
								key={type.id}
								onClick={() => setActiveScenery(type.id)}
								className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-sm border ${
									activeScenery === type.id
										? "bg-blue-600 text-white border-blue-600"
										: "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border-gray-200"
								}`}
							>
								{type.label}
							</button>
						))}
					</div>

					{/* Lưới danh sách khách sạn được đề xuất */}
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{filteredHotels.map(hotel => (
							<div
								key={hotel.id}
								className='bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group flex flex-col'
							>
								<div
									className='relative h-56 overflow-hidden cursor-pointer'
									onClick={() => setSelectedHotelDetail(hotel)}
								>
									<img
										src={hotel.img}
										alt={hotel.name}
										className='w-full h-full object-cover group-hover:scale-110 transition duration-700'
									/>
									<div className='absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1.5 rounded-lg flex items-center gap-1 shadow-md'>
										<Star
											size={14}
											className='text-yellow-500 fill-yellow-500'
										/>
										<span className='text-sm font-black text-gray-800'>
											{hotel.rating}
										</span>
									</div>
								</div>

								<div className='p-5 flex flex-col flex-1'>
									<h3
										className='font-bold text-gray-900 text-xl mb-2 line-clamp-1 cursor-pointer group-hover:text-blue-600 transition'
										onClick={() => setSelectedHotelDetail(hotel)}
									>
										{hotel.name}
									</h3>
									<p className='flex items-center text-gray-500 text-sm mb-5'>
										<MapPin size={16} className='mr-1.5 text-gray-400' />{" "}
										{hotel.location}
									</p>
									<div className='mt-auto flex items-end justify-between border-t border-gray-100 pt-5'>
										<div>
											<span className='text-xs font-medium text-gray-500 block mb-0.5'>
												Giá từ
											</span>
											<span className='text-xl font-black text-blue-600'>
												{hotel.price} ₫
											</span>
										</div>
										<button
											onClick={() => setSelectedHotelDetail(hotel)}
											className='bg-blue-50 text-blue-700 font-bold px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300'
										>
											Xem chi tiết
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* PHONG CÁCH DU LỊCH */}
				<section>
					<SectionTitle
						title='Phong cách du lịch'
						subtitle='Đặc quyền chọn lọc, dịch vụ tận tâm cho kỳ nghỉ nhẹ nhàng tinh tế.'
					/>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
						{travelStyles.map(style => (
							<div
								key={style.id}
								className='relative h-72 rounded-2xl overflow-hidden group cursor-pointer shadow-md'
							>
								<img
									src={style.img}
									alt={style.title}
									className='w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-5'>
									<h3 className='text-white font-black text-xl mb-1 translate-y-2 group-hover:translate-y-0 transition'>
										{style.title}
									</h3>
									<p className='text-gray-300 text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2'>
										{style.desc}
									</p>
									<span className='text-white text-xs font-bold bg-white/20 w-fit px-3 py-1.5 rounded-full backdrop-blur-md'>
										{style.hotels} khách sạn
									</span>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* ĐIỂM ĐẾN TRONG NƯỚC (BENTO GRID) */}
				<section>
					<SectionTitle
						title='Điểm đến yêu thích trong nước'
						subtitle='Lên rừng xuống biển. Trọn vẹn Việt Nam'
					/>
					<div className='grid grid-cols-1 md:grid-cols-3 grid-rows-[repeat(4,220px)] gap-4'>
						{domesticDestinations.map(dest => (
							<div
								key={dest.id}
								className={`relative rounded-2xl overflow-hidden group cursor-pointer shadow-sm ${dest.span}`}
							>
								<img
									src={dest.img}
									alt={dest.name}
									className='w-full h-full object-cover group-hover:scale-105 transition duration-700'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6'>
									<h3 className='text-white font-black text-2xl drop-shadow-md'>
										{dest.name}
									</h3>
									<p className='text-gray-200 text-sm font-semibold mt-1'>
										{dest.hotels} khách sạn
									</p>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* ĐIỂM ĐẾN NƯỚC NGOÀI */}
				<section>
					<SectionTitle
						title='Điểm đến yêu thích nước ngoài'
						subtitle='Bao la thế giới. Bốn bể là nhà'
					/>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6'>
						{foreignDestinations.map(dest => (
							<div
								key={dest.id}
								className='relative h-56 rounded-2xl overflow-hidden group cursor-pointer shadow-sm'
							>
								<img
									src={dest.img}
									alt={dest.name}
									className='w-full h-full object-cover group-hover:scale-110 transition duration-700'
								/>
								<div className='absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-500'></div>
								<div className='absolute bottom-4 left-4 right-4 text-center'>
									<h3 className='text-white font-black text-xl md:text-2xl drop-shadow-lg'>
										{dest.name}
									</h3>
									<p className='text-white/90 text-sm font-medium drop-shadow-md'>
										{dest.hotels} khách sạn
									</p>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* VÌ SAO CHỌN CHÚNG TÔI */}
				<section className='bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100'>
					<div className='text-center mb-10'>
						<h2 className='text-3xl font-extrabold text-blue-900 mb-2'>
							Vì sao chọn UniStay?
						</h2>
						<p className='text-gray-600'>
							Những giá trị chúng tôi mang lại cho chuyến đi của bạn
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
						<div className='flex flex-col items-center text-center'>
							<div className='w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md text-blue-600 mb-4'>
								<Star size={32} />
							</div>
							<h4 className='font-bold text-lg mb-2 text-gray-900'>
								Mạng lưới rộng lớn
							</h4>
							<p className='text-sm text-gray-600'>
								Hàng ngàn khách sạn và resort đối tác trên toàn thế giới.
							</p>
						</div>
						<div className='flex flex-col items-center text-center'>
							<div className='w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md text-blue-600 mb-4'>
								<ShieldCheck size={32} />
							</div>
							<h4 className='font-bold text-lg mb-2 text-gray-900'>
								Thanh toán an toàn
							</h4>
							<p className='text-sm text-gray-600'>
								Hệ thống bảo mật tối đa, đa dạng phương thức thanh toán.
							</p>
						</div>
						<div className='flex flex-col items-center text-center'>
							<div className='w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md text-blue-600 mb-4'>
								<Clock size={32} />
							</div>
							<h4 className='font-bold text-lg mb-2 text-gray-900'>
								Hỗ trợ 24/7
							</h4>
							<p className='text-sm text-gray-600'>
								Đội ngũ chuyên viên tư vấn luôn sẵn sàng giải đáp mọi lúc.
							</p>
						</div>
						<div className='flex flex-col items-center text-center'>
							<div className='w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md text-blue-600 mb-4'>
								<ThumbsUp size={32} />
							</div>
							<h4 className='font-bold text-lg mb-2 text-gray-900'>
								Đảm bảo giá tốt nhất
							</h4>
							<p className='text-sm text-gray-600'>
								Cam kết hoàn tiền nếu bạn tìm thấy giá rẻ hơn ở nơi khác.
							</p>
						</div>
					</div>
				</section>

				{/* CẨM NANG DU LỊCH */}
				<section>
					<SectionTitle
						title='Cẩm nang du lịch'
						subtitle='Cập nhật những xu hướng và kinh nghiệm du lịch mới nhất'
					/>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						{travelArticles.map(article => (
							<div
								key={article.id}
								className='bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group cursor-pointer'
							>
								<div className='h-48 overflow-hidden relative'>
									<img
										src={article.img}
										alt={article.title}
										className='w-full h-full object-cover group-hover:scale-105 transition duration-500'
									/>
									<span className='absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-blue-800 font-bold px-3 py-1 rounded text-xs shadow-sm'>
										{article.category}
									</span>
								</div>
								<div className='p-5'>
									<p className='text-xs text-gray-400 mb-2'>{article.date}</p>
									<h3 className='font-bold text-gray-900 text-lg leading-snug group-hover:text-blue-600 transition'>
										{article.title}
									</h3>
								</div>
							</div>
						))}
					</div>
				</section>
			</main>

			{/* --- FOOTER CHI TIẾT --- */}
			<footer className='bg-[#0f172a] text-gray-400 py-16 mt-20 border-t-4 border-secondary'>
				<div className='max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-10'>
					<div className='md:col-span-2'>
						<h1 className='text-3xl font-extrabold text-white mb-4'>
							UniStay
							<span className='text-sm font-normal text-gray-400'>.com</span>
						</h1>
						<p className='text-sm mb-6 leading-relaxed max-w-sm'>
							Hệ thống đặt phòng khách sạn, vé máy bay, tour du lịch uy tín hàng
							đầu Việt Nam. Mang đến cho bạn những trải nghiệm tuyệt vời nhất.
						</p>
						<div className='flex gap-4'>
							{/* Các nút mạng xã hội mô phỏng */}
							<div className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition cursor-pointer'>
								FB
							</div>
							<div className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition cursor-pointer'>
								IG
							</div>
							<div className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition cursor-pointer'>
								YT
							</div>
						</div>
					</div>

					<div>
						<h4 className='text-white font-bold mb-6 text-lg'>Về chúng tôi</h4>
						<ul className='space-y-3 text-sm font-medium'>
							<li>
								<a
									href='#'
									className='hover:text-secondary transition flex items-center gap-2'
								>
									<span>›</span> Giới thiệu UniStay
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-secondary transition flex items-center gap-2'
								>
									<span>›</span> Tuyển dụng
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-secondary transition flex items-center gap-2'
								>
									<span>›</span> Liên hệ
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className='text-white font-bold mb-6 text-lg'>
							Thông tin cần biết
						</h4>
						<ul className='space-y-3 text-sm font-medium'>
							<li>
								<a
									href='#'
									className='hover:text-secondary transition flex items-center gap-2'
								>
									<span>›</span> Điều kiện & Điều khoản
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-secondary transition flex items-center gap-2'
								>
									<span>›</span> Quy chế hoạt động
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-secondary transition flex items-center gap-2'
								>
									<span>›</span> Chính sách bảo mật
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className='text-white font-bold mb-6 text-lg'>Tải ứng dụng</h4>
						<div className='flex flex-col gap-3'>
							<button className='bg-gray-800 text-white px-5 py-3 rounded-xl border border-gray-700 hover:bg-gray-700 hover:border-gray-500 transition text-sm flex items-center justify-center gap-2 font-bold shadow-md'>
								<span></span> App Store
							</button>
							<button className='bg-gray-800 text-white px-5 py-3 rounded-xl border border-gray-700 hover:bg-gray-700 hover:border-gray-500 transition text-sm flex items-center justify-center gap-2 font-bold shadow-md'>
								<span></span> Google Play
							</button>
						</div>
					</div>
				</div>

				<div className='max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-gray-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center'>
					<p>© 2026 UniStay.com. Tất cả quyền được bảo lưu.</p>
					<p className='mt-2 md:mt-0'>DKKD: 0943288214, Cấp ngày 12/03/2024</p>
				</div>
			</footer>

			{/* MODAL CHI TIẾT KHÁCH SẠN */}
			{selectedHotelDetail && (
				<div className='fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity'>
					<div className='bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative'>
						{/* Nút Đóng Modal */}
						<button
							onClick={() => setSelectedHotelDetail(null)}
							className='absolute top-4 right-4 z-10 w-10 h-10 bg-black/30 hover:bg-black/60 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors'
						>
							<X size={24} />
						</button>

						<div className='flex flex-col md:flex-row h-full'>
							{/* Hình ảnh bên trái Modal */}
							<div className='md:w-1/2 h-64 md:h-auto min-h-[300px] relative'>
								<img
									src={selectedHotelDetail.img}
									alt={selectedHotelDetail.name}
									className='w-full h-full object-cover'
								/>
							</div>

							{/* Nội dung bên phải Modal */}
							<div className='md:w-1/2 p-6 md:p-8 flex flex-col'>
								<div className='flex items-center gap-3 mb-3'>
									<span className='bg-blue-100 text-blue-800 text-xs font-black px-2.5 py-1 rounded uppercase tracking-wider'>
										{
											sceneryTypes.find(t => t.id === selectedHotelDetail.type)
												?.label
										}
									</span>
									<div className='flex items-center bg-yellow-100 text-yellow-800 px-2.5 py-1 rounded text-xs font-black'>
										<Star
											size={12}
											className='mr-1 fill-yellow-500 text-yellow-500'
										/>{" "}
										{selectedHotelDetail.rating}
									</div>
								</div>

								<h2 className='text-3xl font-black text-gray-900 mb-2'>
									{selectedHotelDetail.name}
								</h2>
								<p className='flex items-center text-gray-600 mb-6 font-medium'>
									<MapPin size={18} className='mr-1.5 text-gray-400' />{" "}
									{selectedHotelDetail.location}
								</p>

								<div className='mb-6'>
									<h4 className='font-bold text-gray-900 mb-2 text-lg'>
										Mô tả
									</h4>
									<p className='text-gray-600 leading-relaxed text-sm md:text-base'>
										{selectedHotelDetail.desc}
									</p>
								</div>

								<div className='mb-8'>
									<h4 className='font-bold text-gray-900 mb-3 text-lg'>
										Tiện ích nổi bật
									</h4>
									<div className='flex flex-wrap gap-2'>
										{selectedHotelDetail.amenities.map((amenity, idx) => (
											<span
												key={idx}
												className='bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1.5 border border-gray-200'
											>
												<ShieldCheck size={16} className='text-green-500' />{" "}
												{amenity}
											</span>
										))}
									</div>
								</div>

								<div className='flex items-center justify-between mt-auto border-t border-gray-200 pt-6'>
									<div>
										<p className='text-sm font-medium text-gray-500 mb-1'>
											Giá phòng 1 đêm từ
										</p>
										<p className='text-3xl font-black text-blue-600'>
											{selectedHotelDetail.price} ₫
										</p>
									</div>
									<button className='bg-secondary text-blue-900 hover:bg-yellow-500 font-extrabold px-8 py-3.5 rounded-xl shadow-lg transition transform hover:-translate-y-1'>
										Đặt Ngay
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
