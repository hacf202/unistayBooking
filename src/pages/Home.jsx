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
} from "lucide-react";

export default function Home() {
	const [rooms, setRooms] = useState([]);

	useEffect(() => {
		// Lấy toàn bộ danh sách phòng từ Local Storage
		setRooms(getRooms());
	}, []);

	// Tách 5 phòng đầu tiên để hiển thị trên Bento Layout
	const featuredRooms = rooms.slice(0, 5);
	// Các phòng còn lại hiển thị ở dạng lưới thông thường
	const otherRooms = rooms.slice(5);

	return (
		<div className='flex flex-col min-h-screen'>
			<div className='flex-grow space-y-12 mb-12'>
				{/* Section 1: Banner Khuyến Mãi */}
				<div className='bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl flex flex-col md:flex-row justify-between items-center relative overflow-hidden'>
					<div className='relative z-10 text-center md:text-left mb-6 md:mb-0'>
						<h1 className='text-4xl md:text-5xl font-extrabold mb-4 leading-tight'>
							Mùa Hè Sôi Động <br /> Ưu Đãi Cực Khủng!
						</h1>
						<p className='text-lg md:text-xl opacity-90 mb-6 max-w-xl'>
							Nhập mã{" "}
							<span className='font-bold text-yellow-300'>SUMMER2026</span> để
							được giảm ngay 20% cho tất cả các hạng phòng Deluxe và Suite.
						</p>
						<button className='bg-white text-blue-700 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg flex items-center gap-2 mx-auto md:mx-0'>
							Săn Deal Ngay <ChevronRight className='w-5 h-5' />
						</button>
					</div>
					{/* Họa tiết trang trí cho Banner */}
					<div className='absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2'></div>
					<div className='absolute right-40 bottom-0 w-48 h-48 bg-purple-400 opacity-20 rounded-full blur-2xl transform translate-y-1/2'></div>
				</div>

				{/* Section 2: Danh mục phòng nổi bật - Bento Layout */}
				{featuredRooms.length > 0 && (
					<div>
						<div className='flex justify-between items-end mb-6'>
							<div>
								<h2 className='text-3xl font-bold text-gray-900'>
									Không Gian Đẳng Cấp
								</h2>
								<p className='text-gray-500 mt-2'>
									Trải nghiệm những căn phòng được yêu thích nhất tại Khách Sạn
									Việt.
								</p>
							</div>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]'>
							{featuredRooms.map((room, index) => {
								// Layout Bento: Phần tử đầu tiên chiếm 2 cột, 2 hàng
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

			{/* Footer Hoàn Chỉnh */}
			<footer className='bg-gray-900 text-gray-300 pt-16 pb-8 rounded-t-3xl mt-auto'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>
						{/* Cột 1: Thông tin thương hiệu */}
						<div className='space-y-4'>
							<Link
								to='/'
								className='text-2xl font-black text-white flex items-center gap-2'
							>
								<span className='text-blue-500'>🏢 Khách Sạn</span> Việt
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

						{/* Cột 2: Liên kết nhanh */}
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
								<li>
									<Link
										to='/'
										className='hover:text-blue-400 transition flex items-center gap-2'
									>
										<ChevronRight className='w-4 h-4' /> Khuyến mãi hiện có
									</Link>
								</li>
								<li>
									<Link
										to='/'
										className='hover:text-blue-400 transition flex items-center gap-2'
									>
										<ChevronRight className='w-4 h-4' /> Tuyển dụng
									</Link>
								</li>
							</ul>
						</div>

						{/* Cột 3: Hỗ trợ khách hàng */}
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
										(FAQ)
									</Link>
								</li>
								<li>
									<Link
										to='/'
										className='hover:text-blue-400 transition flex items-center gap-2'
									>
										<ChevronRight className='w-4 h-4' /> Chính sách bảo mật
									</Link>
								</li>
								<li>
									<Link
										to='/'
										className='hover:text-blue-400 transition flex items-center gap-2'
									>
										<ChevronRight className='w-4 h-4' /> Điều khoản sử dụng
									</Link>
								</li>
							</ul>
						</div>

						{/* Cột 4: Thông tin liên hệ */}
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

					{/* Dòng bản quyền */}
					<div className='border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500'>
						<p>
							&copy; {new Date().getFullYear()} Khách Sạn Việt. Đã đăng ký bản
							quyền.
						</p>
						<div className='mt-4 md:mt-0 flex gap-4'>
							<span className='hover:text-white cursor-pointer transition'>
								VN | VND
							</span>
							<span className='hover:text-white cursor-pointer transition'>
								EN | USD
							</span>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
