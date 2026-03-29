// src/App.jsx
import React, { useEffect, useState } from "react";
import {
	BrowserRouter,
	Routes,
	Route,
	Link,
	useNavigate,
} from "react-router-dom";
import { Search, User, LogOut, ClipboardList, MapPin } from "lucide-react";
import { initDB, getCurrentUser, logout, getRooms } from "./data/mockDb";

import Home from "./pages/Home";
import RoomDetail from "./pages/RoomDetail";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Login from "./pages/Login";
import Owner from "./pages/Owner";
import Admin from "./pages/Admin";
import MyBookings from "./pages/MyBookings";

// KHẮC PHỤC: Chạy initDB() ngay khi file được nạp vào bộ nhớ.
// Đảm bảo Local Storage có dữ liệu trước khi bất kỳ Component nào được render.
initDB();

const Header = () => {
	const navigate = useNavigate();

	// KHẮC PHỤC CASCADING RENDER:
	// Sử dụng Lazy Initialization (Truyền một function vào useState).
	// Cách này giúp React chỉ đọc Local Storage 1 lần duy nhất lúc khởi tạo, không gây re-render dư thừa.
	const [user, setUser] = useState(() => getCurrentUser());
	const [allRooms, setAllRooms] = useState(() => getRooms() || []);

	// State cho thanh tìm kiếm thông minh
	const [searchValue, setSearchValue] = useState("");
	const [isSearchFocused, setIsSearchFocused] = useState(false);

	useEffect(() => {
		// Vẫn giữ lại interval để update trạng thái login động nếu có nhiều tab
		const interval = setInterval(() => {
			const currentUser = getCurrentUser();
			// Chỉ update state nếu thực sự có sự thay đổi để tránh re-render
			setUser(prevUser => {
				if (JSON.stringify(prevUser) !== JSON.stringify(currentUser))
					return currentUser;
				return prevUser;
			});
		}, 1000);

		return () => clearInterval(interval);
	}, []); // Đã dọn dẹp sạch sẽ, không còn cảnh báo ESLint

	const handleLogout = () => {
		logout();
		navigate("/");
	};

	// Lọc kết quả tìm kiếm dựa trên chữ người dùng gõ
	const searchResults = allRooms
		.filter(
			room =>
				room.name.toLowerCase().includes(searchValue.toLowerCase()) ||
				room.category.toLowerCase().includes(searchValue.toLowerCase()),
		)
		.slice(0, 5); // Chỉ lấy 5 kết quả đầu tiên cho gọn

	// Gợi ý tìm kiếm mặc định
	const popularSearches = [
		"View Biển",
		"Deluxe",
		"Family",
		"Hồ bơi riêng",
		"Suite",
	];

	return (
		<header className='bg-white shadow-md sticky top-0 z-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-4'>
				{/* Chức năng 1: Logo click về Trang chủ */}
				<Link
					to='/'
					className='text-2xl font-black text-blue-600 flex items-center gap-2 hover:opacity-80 transition transform hover:scale-105 active:scale-95'
				>
					<img
						className='w-10 h-10'
						src='https://images.pocguide.top/easteregg/Screenshot-2026-03-29-155503.webp'
						alt=''
					/>
					Khách Sạn Việt
				</Link>

				{/* Chức năng 2: Thanh tìm kiếm có hiển thị đề xuất */}
				<div className='flex-1 w-full max-w-xl md:mx-8 relative'>
					<div className='relative group'>
						<input
							type='text'
							value={searchValue}
							onChange={e => setSearchValue(e.target.value)}
							onFocus={() => setIsSearchFocused(true)}
							// Dùng setTimeout để tránh việc menu bị đóng trước khi người dùng kịp click vào link bên trong
							onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
							placeholder='Tìm kiếm khách sạn, tên phòng, hạng phòng...'
							className='w-full pl-12 pr-4 py-3 bg-gray-100 border-transparent rounded-full focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none shadow-inner'
						/>
						<Search className='absolute left-4 top-3.5 text-gray-400 group-focus-within:text-blue-500 w-5 h-5 transition-colors' />
					</div>

					{/* Khung Dropdown Đề Xuất Tìm Kiếm */}
					{isSearchFocused && (
						<div className='absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200'>
							{searchValue.trim() === "" ? (
								// Trạng thái chưa nhập chữ: Hiện gợi ý phổ biến
								<div className='p-5'>
									<h4 className='text-xs font-bold text-gray-400 uppercase tracking-wider mb-3'>
										🔥 Tìm kiếm phổ biến
									</h4>
									<div className='flex flex-wrap gap-2'>
										{popularSearches.map((tag, idx) => (
											<span
												key={idx}
												onMouseDown={e => {
													e.preventDefault();
													setSearchValue(tag);
												}} // Set chữ vào ô input khi click
												className='bg-gray-50 hover:bg-blue-50 hover:text-blue-600 border border-gray-100 cursor-pointer px-4 py-2 rounded-xl text-sm font-semibold transition text-gray-700'
											>
												{tag}
											</span>
										))}
									</div>
								</div>
							) : searchResults.length > 0 ? (
								// Trạng thái có chữ nhập vào: Hiện kết quả lọc Real-time
								<div className='py-2'>
									<h4 className='text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-5 pt-2'>
										Kết quả cho "{searchValue}"
									</h4>
									<ul className='max-h-[300px] overflow-y-auto'>
										{searchResults.map(room => (
											<li key={room.id}>
												<Link
													to={`/room/${room.id}`}
													onClick={() => {
														setIsSearchFocused(false);
														setSearchValue(""); // Xóa ô tìm kiếm sau khi click
													}}
													className='flex items-center gap-4 px-5 py-3 hover:bg-blue-50 transition border-l-4 border-transparent hover:border-blue-500'
												>
													<img
														src={room.image}
														alt={room.name}
														className='w-12 h-12 rounded-lg object-cover shadow-sm'
													/>
													<div className='flex-1'>
														<p className='text-sm font-bold text-gray-900 line-clamp-1'>
															{room.name}
														</p>
														<div className='flex items-center gap-2 mt-1'>
															<span className='text-xs font-semibold px-2 py-0.5 bg-gray-100 rounded text-gray-600'>
																{room.category}
															</span>
															<span className='text-xs text-gray-500 flex items-center gap-1'>
																<MapPin className='w-3 h-3' /> Xem chi tiết
															</span>
														</div>
													</div>
													<div className='text-right'>
														<p className='text-sm font-black text-blue-600'>
															{room.discountPrice.toLocaleString()}đ
														</p>
														{room.discountPrice < room.price && (
															<p className='text-[10px] text-gray-400 line-through'>
																{room.price.toLocaleString()}đ
															</p>
														)}
													</div>
												</Link>
											</li>
										))}
									</ul>
								</div>
							) : (
								// Trạng thái nhập chữ nhưng không tìm thấy
								<div className='p-8 text-center'>
									<Search className='w-8 h-8 text-gray-300 mx-auto mb-3' />
									<p className='text-sm font-bold text-gray-700'>
										Không tìm thấy kết quả nào
									</p>
									<p className='text-xs text-gray-500 mt-1'>
										Rất tiếc, không có phòng nào phù hợp với "{searchValue}".
									</p>
								</div>
							)}
						</div>
					)}
				</div>

				<div>
					{user ? (
						<div className='flex items-center gap-6'>
							<div className='flex flex-col text-right hidden md:flex'>
								<span className='font-bold text-gray-900'>{user.name}</span>
								<span className='text-[10px] font-black tracking-widest text-gray-500 uppercase'>
									{user.role}
								</span>
							</div>

							<div className='flex items-center gap-3 border-l pl-4'>
								{user.role === "user" && (
									<Link
										to='/my-bookings'
										className='text-gray-600 hover:text-blue-600 font-semibold flex items-center gap-2 transition px-3 py-2 rounded-lg hover:bg-gray-50'
									>
										<ClipboardList className='w-5 h-5' /> Đơn của tôi
									</Link>
								)}

								{user.role === "owner" && (
									<Link
										to='/owner'
										className='bg-blue-50 text-blue-700 border border-blue-200 px-4 py-2 rounded-xl font-bold hover:bg-blue-100 transition shadow-sm'
									>
										Quản lý Vận hành
									</Link>
								)}

								{user.role === "admin" && (
									<Link
										to='/admin'
										className='bg-red-50 text-red-700 border border-red-200 px-4 py-2 rounded-xl font-bold hover:bg-red-100 transition shadow-sm'
									>
										Hệ Thống Admin
									</Link>
								)}

								<button
									onClick={handleLogout}
									className='text-gray-400 hover:text-red-500 flex items-center gap-1 transition p-2.5 rounded-full hover:bg-red-50 bg-gray-50 border border-gray-100'
									title='Đăng xuất'
								>
									<LogOut className='w-5 h-5' />
								</button>
							</div>
						</div>
					) : (
						<Link
							to='/login'
							className='bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 flex items-center gap-2 shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5'
						>
							<User className='w-5 h-5' /> Đăng nhập / Đăng ký
						</Link>
					)}
				</div>
			</div>
		</header>
	);
};

export default function App() {
	// Không cần gọi initDB() trong useEffect ở đây nữa vì đã được gọi ở module level phía trên

	return (
		<BrowserRouter>
			<div className='min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans'>
				<Header />
				<main className='flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/room/:id' element={<RoomDetail />} />
						<Route path='/checkout/:id' element={<Checkout />} />
						<Route path='/success/:bookingId' element={<Success />} />
						<Route path='/login' element={<Login />} />
						<Route path='/owner' element={<Owner />} />
						<Route path='/admin' element={<Admin />} />
						<Route path='/my-bookings' element={<MyBookings />} />
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	);
}
