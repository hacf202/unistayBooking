// src/pages/Admin.jsx
import React, { useState, useEffect } from "react";
import { getRooms, getBookings } from "../data/mockDb";
import {
	TrendingUp,
	Users,
	DollarSign,
	Activity,
	AlertCircle,
	Calendar,
} from "lucide-react";

export default function Admin() {
	const [rooms, setRooms] = useState([]);
	const [bookings, setBookings] = useState([]);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		setRooms(getRooms());
		setBookings(getBookings());
		// Lấy danh sách user từ Local Storage (được khởi tạo trong mockDb)
		const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
		setUsers(storedUsers);
	}, []);

	// Tính toán dữ liệu hệ thống
	const totalRevenue = bookings.reduce(
		(sum, b) => sum + Number(b.totalPrice),
		0,
	);
	const activeBookings = bookings.filter(
		b => b.status === "Đã thanh toán" || b.status === "Đã nhận phòng",
	).length;
	const occupancyRate =
		rooms.length > 0
			? Math.round(
					((rooms.length - rooms.filter(r => r.status === "Trống").length) /
						rooms.length) *
						100,
				)
			: 0;

	// Tính số ngày còn lại cho khách đang ở
	const getRemainingDays = roomId => {
		// Tìm giao dịch gần nhất của phòng này
		const activeBooking = bookings
			.slice()
			.reverse()
			.find(
				b =>
					b.roomId === roomId &&
					(b.status === "Đã thanh toán" || b.status === "Đã nhận phòng"),
			);
		if (!activeBooking) return null;

		const end = new Date(activeBooking.checkOut);
		const now = new Date();
		const diff = Math.ceil((end - now) / (1000 * 60 * 60 * 24));
		return { days: diff > 0 ? diff : 0, info: activeBooking };
	};

	return (
		<div className='space-y-8 min-h-screen'>
			<div className='flex justify-between items-end'>
				<div>
					<h1 className='text-3xl font-black text-gray-900'>
						System Admin Dashboard
					</h1>
					<p className='text-gray-500 mt-1'>
						Quản trị viên cấp cao • Hệ thống lõi Khách Sạn Việt
					</p>
				</div>
				<div className='flex items-center gap-2 text-sm font-bold text-green-600 bg-green-50 px-4 py-2 rounded-full border border-green-200'>
					<Activity className='w-4 h-4' /> Hệ thống hoạt động ổn định
				</div>
			</div>

			{/* 4 Thẻ Báo cáo Thống kê Cấp cao */}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
				<div className='bg-gradient-to-br from-indigo-600 to-blue-700 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden'>
					<DollarSign className='absolute right-[-10px] bottom-[-10px] w-24 h-24 text-white opacity-20' />
					<h3 className='text-sm font-semibold opacity-80 uppercase tracking-wider mb-2'>
						Tổng Doanh Thu Lũy Kế
					</h3>
					<p className='text-3xl font-black'>
						{totalRevenue.toLocaleString()}đ
					</p>
					<p className='text-xs mt-3 flex items-center gap-1 opacity-90'>
						<TrendingUp className='w-3 h-3' /> Tăng trưởng ổn định
					</p>
				</div>

				<div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative'>
					<div className='absolute top-6 right-6 p-3 bg-purple-50 rounded-xl text-purple-600'>
						<Calendar className='w-6 h-6' />
					</div>
					<h3 className='text-sm font-bold text-gray-500 uppercase tracking-wider mb-2'>
						Tổng Lượt Đặt Phòng
					</h3>
					<p className='text-3xl font-black text-gray-900'>{bookings.length}</p>
					<p className='text-xs mt-3 text-purple-600 font-bold'>
						{activeBookings} giao dịch đang xử lý
					</p>
				</div>

				<div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative'>
					<div className='absolute top-6 right-6 p-3 bg-blue-50 rounded-xl text-blue-600'>
						<Activity className='w-6 h-6' />
					</div>
					<h3 className='text-sm font-bold text-gray-500 uppercase tracking-wider mb-2'>
						Tỷ Lệ Lấp Đầy
					</h3>
					<p className='text-3xl font-black text-gray-900'>{occupancyRate}%</p>
					<div className='w-full bg-gray-200 rounded-full h-1.5 mt-4'>
						<div
							className='bg-blue-600 h-1.5 rounded-full'
							style={{ width: `${occupancyRate}%` }}
						></div>
					</div>
				</div>

				<div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative'>
					<div className='absolute top-6 right-6 p-3 bg-orange-50 rounded-xl text-orange-600'>
						<Users className='w-6 h-6' />
					</div>
					<h3 className='text-sm font-bold text-gray-500 uppercase tracking-wider mb-2'>
						Người Dùng Đăng Ký
					</h3>
					<p className='text-3xl font-black text-gray-900'>{users.length}</p>
					<p className='text-xs mt-3 text-gray-500 font-medium'>
						Bao gồm User, Owner và Admin
					</p>
				</div>
			</div>

			<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
				{/* Cột trái: Giám sát phòng (Chiếm 2/3) */}
				<div className='lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden'>
					<div className='p-6 border-b bg-gray-50 flex justify-between items-center'>
						<h2 className='text-lg font-bold text-gray-900'>
							Giám sát trạng thái phòng Real-time
						</h2>
						<AlertCircle className='w-5 h-5 text-gray-400' />
					</div>
					<div className='overflow-x-auto max-h-[500px] overflow-y-auto'>
						<table className='w-full text-left'>
							<thead className='sticky top-0 bg-white shadow-sm'>
								<tr className='text-gray-500 text-xs uppercase tracking-wider'>
									<th className='p-4 font-bold'>Mã & Tên Phòng</th>
									<th className='p-4 font-bold'>Trạng thái</th>
									<th className='p-4 font-bold'>Khách Hàng Đang Ở</th>
									<th className='p-4 font-bold'>Thời hạn</th>
								</tr>
							</thead>
							<tbody className='text-sm divide-y divide-gray-100'>
								{rooms.map(room => {
									const occupancy =
										room.status === "Đang sử dụng" || room.status === "Bảo trì"
											? getRemainingDays(room.id)
											: null;
									return (
										<tr key={room.id} className='hover:bg-gray-50'>
											<td className='p-4'>
												<p className='font-bold text-gray-900'>{room.id}</p>
												<p className='text-xs text-gray-500'>{room.name}</p>
											</td>
											<td className='p-4'>
												<span
													className={`px-2.5 py-1 rounded-md text-xs font-bold ${
														room.status === "Trống"
															? "bg-green-100 text-green-700"
															: room.status === "Đang sử dụng"
																? "bg-red-100 text-red-700"
																: "bg-yellow-100 text-yellow-700"
													}`}
												>
													{room.status}
												</span>
											</td>
											<td className='p-4'>
												{occupancy ? (
													<div>
														<p className='font-bold text-gray-800'>
															{occupancy.info.customerName}
														</p>
														<p className='text-xs text-blue-600 font-mono mt-0.5'>
															Code: {occupancy.info.bookingCode}
														</p>
													</div>
												) : (
													<span className='text-gray-400 italic'>Không có</span>
												)}
											</td>
											<td className='p-4'>
												{occupancy ? (
													<span
														className={`font-bold ${occupancy.days <= 1 ? "text-red-600" : "text-gray-700"}`}
													>
														{occupancy.days} ngày nữa
													</span>
												) : (
													"-"
												)}
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>

				{/* Cột phải: Quản lý User (Chiếm 1/3) */}
				<div className='bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col'>
					<div className='p-6 border-b bg-gray-50'>
						<h2 className='text-lg font-bold text-gray-900'>
							Tài khoản hệ thống
						</h2>
					</div>
					<div className='p-2 flex-1 overflow-y-auto'>
						<ul className='divide-y divide-gray-100'>
							{users.map(user => (
								<li
									key={user.id}
									className='p-4 flex items-center justify-between hover:bg-gray-50 rounded-xl transition'
								>
									<div className='flex items-center gap-3'>
										<div
											className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
												user.role === "admin"
													? "bg-red-500"
													: user.role === "owner"
														? "bg-blue-500"
														: "bg-gray-400"
											}`}
										>
											{user.name.charAt(0)}
										</div>
										<div>
											<p className='font-bold text-gray-900'>{user.name}</p>
											<p className='text-xs text-gray-500 font-mono'>
												SĐT/ID: {user.phone}
											</p>
										</div>
									</div>
									<span
										className={`text-xs font-bold px-2 py-1 rounded border uppercase ${
											user.role === "admin"
												? "border-red-200 text-red-600 bg-red-50"
												: user.role === "owner"
													? "border-blue-200 text-blue-600 bg-blue-50"
													: "border-gray-200 text-gray-600 bg-gray-50"
										}`}
									>
										{user.role}
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
