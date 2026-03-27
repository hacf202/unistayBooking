// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getRooms } from "../data/mockDb";
import {
	MapPin,
	Phone,
	Mail,
	Facebook,
	Instagram,
	Twitter,
	ChevronRight,
	ChevronLeft, // Thêm icon ChevronLeft để làm nút trượt về trước
} from "lucide-react";

export default function Home() {
	const [rooms, setRooms] = useState([]);
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		// Lấy toàn bộ danh sách phòng từ Local Storage
		setRooms(getRooms());
	}, []);

	// Lọc ra 4 phòng cao cấp nhất (dựa trên giá) để làm Banner Trượt
	const sliderRooms = [...rooms].sort((a, b) => b.price - a.price).slice(0, 4);

	// Tách 5 phòng tiếp theo để hiển thị trên Bento Layout
	const featuredRooms = rooms.slice(0, 5);
	// Các phòng còn lại hiển thị ở dạng lưới thông thường
	const otherRooms = rooms.slice(5);

	// Hiệu ứng tự động trượt Banner mỗi 5 giây
	useEffect(() => {
		if (sliderRooms.length === 0) return;
		const timer = setInterval(() => {
			setCurrentSlide(prev => (prev === sliderRooms.length - 1 ? 0 : prev + 1));
		}, 5000);
		return () => clearInterval(timer); // Dọn dẹp interval khi component unmount
	}, [sliderRooms.length]);

	const nextSlide = () => {
		setCurrentSlide(prev => (prev === sliderRooms.length - 1 ? 0 : prev + 1));
	};

	const prevSlide = () => {
		setCurrentSlide(prev => (prev === 0 ? sliderRooms.length - 1 : prev - 1));
	};

	return (
		<div className='flex flex-col min-h-screen'>
			<div className='flex-grow space-y-12 mb-12'>
				{/* Section 1: Banner Trượt Ngang (Carousel) */}
				{sliderRooms.length > 0 && (
					<div className='relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl group'>
						{sliderRooms.map((room, index) => (
							<div
								key={room.id}
								className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
									index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
								}`}
							>
								{/* Ảnh nền */}
								<img
									src={room.image}
									alt={room.name}
									className='w-full h-full object-cover transform scale-105 transition-transform duration-[10000ms] ease-linear'
									style={{
										transform:
											index === currentSlide ? "scale(1.1)" : "scale(1)",
									}}
								/>

								{/* Lớp phủ Gradient đen để làm nổi bật chữ */}
								<div className='absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent'></div>

								{/* Nội dung Banner */}
								<div className='absolute inset-0 flex flex-col justify-center px-8 md:px-16 text-white max-w-4xl'>
									<span className='uppercase tracking-widest text-sm font-bold text-yellow-400 mb-3 drop-shadow-md'>
										🌟 Trải nghiệm không gian đẳng cấp
									</span>
									<h1 className='text-4xl md:text-6xl font-black mb-4 leading-tight drop-shadow-lg'>
										{room.name}
									</h1>
									<p className='text-lg md:text-xl text-gray-200 mb-8 max-w-2xl line-clamp-2 drop-shadow-md'>
										{room.features.join(" • ")} | {room.area}
									</p>
									<div className='flex items-end gap-4 mb-8'>
										<div>
											<span className='text-4xl md:text-5xl font-black text-white drop-shadow-md'>
												{room.discountPrice.toLocaleString()}đ
											</span>
											<span className='text-lg text-gray-300 ml-2'>/ đêm</span>
										</div>
										{room.discountPrice < room.price && (
											<span className='text-xl text-gray-400 line-through mb-1 drop-shadow-md'>
												{room.price.toLocaleString()}đ
											</span>
										)}
									</div>
									<Link
										to={`/room/${room.id}`}
										className='bg-blue-600/90 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition shadow-[0_0_20px_rgba(37,99,235,0.4)] w-fit flex items-center gap-2 transform hover:-translate-y-1'
									>
										Khám Phá Ngay <ChevronRight className='w-5 h-5' />
									</Link>
								</div>
							</div>
						))}

						{/* Nút Điều Hướng Trái/Phải (Hiện khi hover vào banner) */}
						<button
							onClick={prevSlide}
							className='absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/50 backdrop-blur-md text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110'
						>
							<ChevronLeft className='w-6 h-6' />
						</button>
						<button
							onClick={nextSlide}
							className='absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/50 backdrop-blur-md text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110'
						>
							<ChevronRight className='w-6 h-6' />
						</button>

						{/* Các dấu chấm (Dots) chỉ báo trang */}
						<div className='absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3'>
							{sliderRooms.map((_, index) => (
								<button
									key={index}
									onClick={() => setCurrentSlide(index)}
									className={`transition-all duration-300 rounded-full h-2 shadow-sm ${
										index === currentSlide
											? "w-10 bg-blue-500"
											: "w-2 bg-white/60 hover:bg-white"
									}`}
								/>
							))}
						</div>
					</div>
				)}

				{/* Section 2: Danh mục phòng nổi bật - Bento Layout */}
				{featuredRooms.length > 0 && (
					<div>
						<div className='flex justify-between items-end mb-6'>
							<div>
								<h2 className='text-3xl font-bold text-gray-900'>
									Không Gian Được Yêu Thích
								</h2>
								<p className='text-gray-500 mt-2'>
									Khám phá những căn phòng được đặt nhiều nhất tại Khách Sạn
									Việt.
								</p>
							</div>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]'>
							{featuredRooms.map((room, index) => {
								const isFeatured = index === 0;
								return (
									<Link
										to={`/room/${room.id}`}
										key={room.id}
										className={`relative group rounded-2xl overflow-hidden shadow-lg block ${isFeatured ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1"}`}
									>
										<img
											src={room.image}
											alt={room.name}
											className='w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-in-out'
										/>
										<div className='absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent flex flex-col justify-end p-6 transition duration-300 group-hover:from-gray-900/95'>
											{room.discountPrice < room.price && (
												<span className='bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-3 shadow-md'>
													HOT DEAL
												</span>
											)}
											<h3
												className={`text-white font-bold ${isFeatured ? "text-3xl mb-2" : "text-xl mb-1"}`}
											>
												{room.name}
											</h3>
											<div className='flex items-center gap-2 mt-1'>
												<span
													className={`text-green-400 font-extrabold ${isFeatured ? "text-2xl" : "text-lg"}`}
												>
													{room.discountPrice.toLocaleString()}đ
												</span>
												{room.discountPrice < room.price && (
													<span className='text-gray-400 line-through text-sm'>
														{room.price.toLocaleString()}đ
													</span>
												)}
												<span className='text-gray-300 text-sm font-medium'>
													/ đêm
												</span>
											</div>
											<div className='mt-3 flex items-center justify-between'>
												<span
													className={`text-sm font-medium px-2 py-1 rounded ${room.status === "Trống" ? "bg-green-500/20 text-green-300" : room.status === "Bảo trì" ? "bg-yellow-500/20 text-yellow-300" : "bg-red-500/20 text-red-300"}`}
												>
													{room.status}
												</span>
												{isFeatured && (
													<span className='text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm underline underline-offset-4'>
														Xem chi tiết
													</span>
												)}
											</div>
										</div>
									</Link>
								);
							})}
						</div>
					</div>
				)}

				{/* Section 3: Danh sách các phòng khác */}
				{otherRooms.length > 0 && (
					<div>
						<h2 className='text-3xl font-bold text-gray-900 mb-6'>
							Khám Phá Tất Cả Các Phòng
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{otherRooms.map(room => (
								<Link
									to={`/room/${room.id}`}
									key={room.id}
									className='bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition flex flex-col h-full border border-gray-100 group'
								>
									<div className='relative h-56 overflow-hidden'>
										<img
											src={room.image}
											alt={room.name}
											className='w-full h-full object-cover group-hover:scale-105 transition duration-500'
										/>
										<div className='absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-gray-800 shadow'>
											{room.category}
										</div>
									</div>
									<div className='p-6 flex flex-col flex-grow'>
										<h3 className='text-xl font-bold text-gray-900 mb-2 line-clamp-1'>
											{room.name}
										</h3>
										<p className='text-gray-500 text-sm mb-4 line-clamp-2'>
											{room.features.join(" • ")}
										</p>

										<div className='mt-auto pt-4 border-t border-gray-100 flex items-end justify-between'>
											<div>
												{room.discountPrice < room.price && (
													<p className='text-gray-400 line-through text-sm'>
														{room.price.toLocaleString()}đ
													</p>
												)}
												<p className='text-blue-600 font-black text-xl'>
													{room.discountPrice.toLocaleString()}đ{" "}
													<span className='text-sm font-normal text-gray-500'>
														/ đêm
													</span>
												</p>
											</div>
											<span
												className={`text-sm font-bold ${room.status === "Trống" ? "text-green-500" : "text-red-400"}`}
											>
												{room.status}
											</span>
										</div>
									</div>
								</Link>
							))}
						</div>
					</div>
				)}
			</div>

			{/* Footer */}
			<footer className='bg-gray-900 text-gray-300 pt-16 pb-8 rounded-t-3xl mt-auto'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>
						<div className='space-y-4'>
							<Link
								to='/'
								className='text-2xl font-black text-white flex items-center gap-2'
							>
								<span className='text-blue-500'>
									<img className='w-10 h-10' src='/logo.png' alt='' /> Khách Sạn
									Việt
								</span>
							</Link>
							<p className='text-gray-400 leading-relaxed text-sm'>
								Trải nghiệm không gian nghỉ dưỡng đẳng cấp, dịch vụ tận tâm và
								những kỷ niệm khó quên tại hệ thống Khách Sạn Việt trên toàn
								quốc.
							</p>
							<div className='flex space-x-4 pt-2'>
								<a
									href='#'
									className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition'
								>
									<Facebook className='w-5 h-5' />
								</a>
								<a
									href='#'
									className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition'
								>
									<Instagram className='w-5 h-5' />
								</a>
								<a
									href='#'
									className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 hover:text-white transition'
								>
									<Twitter className='w-5 h-5' />
								</a>
							</div>
						</div>

						<div>
							<h3 className='text-white font-bold text-lg mb-6 uppercase tracking-wider'>
								Khám Phá
							</h3>
							<ul className='space-y-3'>
								<li>
									<Link
										to='/'
										className='hover:text-blue-400 transition flex items-center gap-2'
									>
										<ChevronRight className='w-4 h-4' /> Về chúng tôi
									</Link>
								</li>
								<li>
									<Link
										to='/'
										className='hover:text-blue-400 transition flex items-center gap-2'
									>
										<ChevronRight className='w-4 h-4' /> Hệ thống phòng nghỉ
									</Link>
								</li>
								<li>
									<Link
										to='/'
										className='hover:text-blue-400 transition flex items-center gap-2'
									>
										<ChevronRight className='w-4 h-4' /> Dịch vụ & Tiện ích
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h3 className='text-white font-bold text-lg mb-6 uppercase tracking-wider'>
								Hỗ Trợ
							</h3>
							<ul className='space-y-3'>
								<li>
									<Link
										to='/'
										className='hover:text-blue-400 transition flex items-center gap-2'
									>
										<ChevronRight className='w-4 h-4' /> Hướng dẫn đặt phòng
									</Link>
								</li>
								<li>
									<Link
										to='/'
										className='hover:text-blue-400 transition flex items-center gap-2'
									>
										<ChevronRight className='w-4 h-4' /> Chính sách hủy phòng
									</Link>
								</li>
								<li>
									<Link
										to='/'
										className='hover:text-blue-400 transition flex items-center gap-2'
									>
										<ChevronRight className='w-4 h-4' /> Câu hỏi thường gặp
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h3 className='text-white font-bold text-lg mb-6 uppercase tracking-wider'>
								Liên Hệ
							</h3>
							<ul className='space-y-4'>
								<li className='flex items-start gap-3'>
									<MapPin className='w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0' />
									<span className='text-sm'>
										123 Đường Tôn Đức Thắng, Phường Bến Nghé, Quận 1, TP. Hồ Chí
										Minh
									</span>
								</li>
								<li className='flex items-center gap-3'>
									<Phone className='w-5 h-5 text-blue-500 flex-shrink-0' />
									<span className='text-sm'>Hotline: 1900 6868 (24/7)</span>
								</li>
								<li className='flex items-center gap-3'>
									<Mail className='w-5 h-5 text-blue-500 flex-shrink-0' />
									<span className='text-sm'>
										Email: booking@khachsanviet.vn
									</span>
								</li>
							</ul>
						</div>
					</div>

					<div className='border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500'>
						<p>
							&copy; {new Date().getFullYear()} Khách Sạn Việt. Đã đăng ký bản
							quyền.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
