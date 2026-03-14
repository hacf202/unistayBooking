// src/pages/MyBookings.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
	getBookings,
	saveBookings,
	getRooms,
	saveRooms,
	getCurrentUser,
} from "../data/mockDb";
import {
	Calendar,
	MapPin,
	XCircle,
	CheckCircle,
	Clock,
	QrCode,
	ChevronRight,
	AlertTriangle,
	Home,
} from "lucide-react";

export default function MyBookings() {
	const user = getCurrentUser();
	const navigate = useNavigate();

	// KHẮC PHỤC CASCADING RENDER: Sử dụng Lazy Initialization
	// Dữ liệu được đọc từ Local Storage ngay lúc khởi tạo Component,
	// không cần chờ useEffect chạy rồi mới setState nữa.
	const [myBookings, setMyBookings] = useState(() => {
		if (!user) return [];
		const allBookings = getBookings();
		return allBookings.filter(b => b.customerName === user.name).reverse();
	});

	const [activeFilter, setActiveFilter] = useState("all"); // 'all', 'success', 'cancelled'

	// useEffect bây giờ CHỈ dùng để làm đúng 1 nhiệm vụ:
	// Điều hướng người dùng (External System/Routing) nếu họ chưa đăng nhập.
	useEffect(() => {
		if (!user) {
			navigate("/login");
		}
	}, [user, navigate]);

	const handleCancelBooking = (bookingId, roomId) => {
		const isConfirm = window.confirm(
			"Bạn có chắc chắn muốn hủy đặt phòng này? Lưu ý: Hệ thống sẽ hoàn tiền lại cho bạn trong vòng 24h.",
		);

		if (isConfirm) {
			// 1. Chuyển trạng thái đơn thành "Đã hủy"
			const allBookings = getBookings();
			const updatedBookings = allBookings.map(b =>
				b.id === bookingId ? { ...b, status: "Đã hủy" } : b,
			);
			saveBookings(updatedBookings);

			// 2. Giải phóng phòng (Chuyển về "Trống")
			const allRooms = getRooms();
			const updatedRooms = allRooms.map(r =>
				r.id === roomId ? { ...r, status: "Trống" } : r,
			);
			saveRooms(updatedRooms);

			// 3. Cập nhật lại state trực tiếp để UI thay đổi ngay lập tức
			const newUserBookings = updatedBookings
				.filter(b => b.customerName === user.name)
				.reverse();
			setMyBookings(newUserBookings);

			alert("Hủy phòng thành công!");
		}
	};

	// Logic lọc danh sách hiển thị dựa trên Tab đang chọn
	const filteredBookings = myBookings.filter(booking => {
		if (activeFilter === "all") return true;
		if (activeFilter === "success")
			return (
				booking.status === "Đã thanh toán" || booking.status === "Đã nhận phòng"
			);
		if (activeFilter === "cancelled") return booking.status === "Đã hủy";
		return true;
	});

	return (
		<div className='max-w-5xl mx-auto py-8'>
			{/* THANH ĐIỀU HƯỚNG (BREADCRUMB) */}
			<nav className='flex items-center text-sm text-gray-500 mb-6 space-x-2'>
				<Link
					to='/'
					className='flex items-center gap-1 hover:text-blue-600 transition font-medium'
				>
					<Home className='w-4 h-4' /> Trang chủ
				</Link>
				<ChevronRight className='w-4 h-4 text-gray-400' />
				<span className='text-gray-900 font-bold'>Chuyến đi của tôi</span>
			</nav>

			{/* Header Trang */}
			<div className='mb-8'>
				<h1 className='text-3xl font-black text-gray-900'>Chuyến Đi Của Tôi</h1>
				<p className='text-gray-500 mt-2'>
					Xem lại lịch sử, lấy mã nhận phòng và quản lý các lịch trình sắp tới.
				</p>
			</div>

			{/* Thanh Tabs Lọc Trạng Thái */}
			<div className='flex items-center gap-2 mb-8 border-b border-gray-200 pb-px overflow-x-auto hide-scrollbar'>
				<button
					onClick={() => setActiveFilter("all")}
					className={`pb-3 px-4 font-bold text-sm whitespace-nowrap border-b-2 transition-colors ${activeFilter === "all" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"}`}
				>
					Tất cả chuyến đi
				</button>
				<button
					onClick={() => setActiveFilter("success")}
					className={`pb-3 px-4 font-bold text-sm whitespace-nowrap border-b-2 transition-colors ${activeFilter === "success" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"}`}
				>
					Thành công / Sắp đi
				</button>
				<button
					onClick={() => setActiveFilter("cancelled")}
					className={`pb-3 px-4 font-bold text-sm whitespace-nowrap border-b-2 transition-colors ${activeFilter === "cancelled" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"}`}
				>
					Đã hủy
				</button>
			</div>

			{/* Trạng thái trống (Không có đơn nào) */}
			{filteredBookings.length === 0 ? (
				<div className='bg-white p-16 rounded-3xl shadow-sm border border-gray-100 text-center flex flex-col items-center'>
					<div className='w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6'>
						<Calendar className='w-10 h-10 text-gray-400' />
					</div>
					<h2 className='text-2xl font-bold text-gray-800 mb-2'>
						Chưa có giao dịch nào ở mục này
					</h2>
					<p className='text-gray-500 mb-8 max-w-md'>
						Lịch sử trống trải quá. Hãy bắt đầu lên kế hoạch cho kỳ nghỉ tiếp
						theo của bạn ngay hôm nay!
					</p>
					<Link
						to='/'
						className='bg-blue-600 text-white px-8 py-3.5 rounded-full font-bold hover:bg-blue-700 transition shadow-md hover:shadow-lg flex items-center gap-2'
					>
						Tìm phòng ngay <ChevronRight className='w-5 h-5' />
					</Link>
				</div>
			) : (
				/* Danh sách Đơn Đặt Phòng */
				<div className='space-y-6'>
					{filteredBookings.map(booking => (
						<div
							key={booking.id}
							className='bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row overflow-hidden hover:shadow-md transition duration-300'
						>
							{/* Cột Trái: Thông tin phòng & Lịch trình */}
							<div className='p-6 md:w-2/3 flex flex-col justify-between'>
								<div>
									<div className='flex justify-between items-start mb-4'>
										<div>
											<div className='flex items-center gap-3 mb-3'>
												<span
													className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold ${
														booking.status === "Đã thanh toán"
															? "bg-green-50 text-green-700 border border-green-200"
															: booking.status === "Đã nhận phòng"
																? "bg-blue-50 text-blue-700 border border-blue-200"
																: booking.status === "Đã trả phòng"
																	? "bg-gray-100 text-gray-600 border border-gray-200"
																	: "bg-red-50 text-red-700 border border-red-200"
													}`}
												>
													{booking.status === "Đã thanh toán" ||
													booking.status === "Đã nhận phòng" ? (
														<CheckCircle className='w-3.5 h-3.5' />
													) : booking.status === "Đã hủy" ? (
														<XCircle className='w-3.5 h-3.5' />
													) : (
														<Clock className='w-3.5 h-3.5' />
													)}
													{booking.status}
												</span>
												<span className='text-sm text-gray-500 font-mono flex items-center gap-1'>
													Code:{" "}
													<span className='font-bold text-gray-900'>
														{booking.bookingCode}
													</span>
												</span>
											</div>

											<Link
												to={`/room/${booking.roomId}`}
												className='text-xl font-bold text-gray-900 leading-tight hover:text-blue-600 transition cursor-pointer block'
											>
												{booking.roomName}
											</Link>
										</div>
									</div>

									{/* Khung Lịch Trình */}
									<div className='grid grid-cols-2 gap-4 bg-gray-50/50 border border-gray-100 p-4 rounded-xl mt-4'>
										<div className='relative'>
											<p className='text-xs text-gray-500 uppercase font-bold tracking-wider mb-1'>
												Nhận phòng (14:00)
											</p>
											<p className='font-bold text-gray-900 flex items-center gap-2 text-lg'>
												<MapPin className='w-5 h-5 text-blue-500' />{" "}
												{booking.checkIn}
											</p>
										</div>
										<div className='border-l pl-4'>
											<p className='text-xs text-gray-500 uppercase font-bold tracking-wider mb-1'>
												Trả phòng (12:00)
											</p>
											<p className='font-bold text-gray-900 flex items-center gap-2 text-lg'>
												<Calendar className='w-5 h-5 text-blue-500' />{" "}
												{booking.checkOut}
											</p>
										</div>
									</div>
								</div>

								<div className='mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-600'>
									<div className='flex gap-4'>
										<span>
											Khách:{" "}
											<strong className='text-gray-900'>
												{booking.customerName}
											</strong>
										</span>
										<span>
											Thời gian lưu trú:{" "}
											<strong className='text-gray-900'>
												{booking.days} đêm
											</strong>
										</span>
									</div>
								</div>
							</div>

							{/* Cột Phải: Giá tiền & Nút Hành Động */}
							<div className='p-6 md:w-1/3 bg-gray-50 border-t md:border-t-0 md:border-l border-gray-100 flex flex-col justify-between'>
								<div>
									<p className='text-sm text-gray-500 mb-1 font-medium'>
										Tổng chi phí
									</p>
									<p
										className={`text-3xl font-black ${booking.status === "Đã hủy" ? "text-gray-400 line-through" : "text-blue-600"}`}
									>
										{Number(booking.totalPrice).toLocaleString()}đ
									</p>
									<p className='text-xs text-gray-500 mt-1'>
										Đã bao gồm thuế và phí dịch vụ
									</p>
								</div>

								<div className='mt-6 flex flex-col gap-3'>
									{/* Nút Xem QR */}
									{(booking.status === "Đã thanh toán" ||
										booking.status === "Đã nhận phòng") && (
										<Link
											to={`/success/${booking.id}`}
											className='w-full bg-white border border-blue-200 text-blue-600 py-3 rounded-xl font-bold text-center flex items-center justify-center gap-2 hover:bg-blue-50 hover:border-blue-300 transition shadow-sm'
										>
											<QrCode className='w-5 h-5' /> Mã Quét Quầy Lễ Tân
										</Link>
									)}

									{/* Nút Hủy Phòng */}
									{booking.status === "Đã thanh toán" && (
										<button
											onClick={() =>
												handleCancelBooking(booking.id, booking.roomId)
											}
											className='w-full text-red-500 font-bold py-3 rounded-xl text-center hover:bg-red-50 transition border border-transparent hover:border-red-100 flex items-center justify-center gap-2'
										>
											Yêu cầu Hủy Phòng
										</button>
									)}

									{/* Thông báo đã hủy */}
									{booking.status === "Đã hủy" && (
										<div className='text-center text-sm font-bold text-red-600 bg-red-50 border border-red-100 py-3 rounded-xl flex items-center justify-center gap-2'>
											<AlertTriangle className='w-4 h-4' /> Đã hủy và hoàn tiền
										</div>
									)}

									{/* Đã hoàn thành */}
									{booking.status === "Đã trả phòng" && (
										<button className='w-full bg-white border border-gray-200 text-gray-600 py-3 rounded-xl font-bold text-center hover:bg-gray-50 transition shadow-sm'>
											Đánh giá chuyến đi
										</button>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
