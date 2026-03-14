// src/pages/RoomDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getRooms, getCurrentUser } from "../data/mockDb";
import {
	CheckCircle2,
	Maximize,
	Home as HomeIcon,
	Coffee,
	Wifi,
	Tv,
	Wind,
	ShieldCheck,
	Clock,
	Info,
	ChevronRight,
	Star,
	Bath,
	MapPin,
} from "lucide-react";

export default function RoomDetail() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [room, setRoom] = useState(null);
	const [similarRooms, setSimilarRooms] = useState([]);

	useEffect(() => {
		// Cuộn lên đầu trang mỗi khi vào chi tiết phòng mới
		window.scrollTo(0, 0);

		const rooms = getRooms();
		const foundRoom = rooms.find(r => r.id === id);
		setRoom(foundRoom);

		// Tìm các phòng cùng category (loại trừ phòng hiện tại) để làm gợi ý
		if (foundRoom) {
			const suggested = rooms
				.filter(r => r.category === foundRoom.category && r.id !== foundRoom.id)
				.slice(0, 3);
			setSimilarRooms(suggested);
		}
	}, [id]);

	const handleBookingClick = () => {
		const user = getCurrentUser();
		if (!user) {
			alert("Bạn cần đăng nhập để tiến hành đặt phòng!");
			navigate("/login");
		} else {
			navigate(`/checkout/${id}`);
		}
	};

	if (!room)
		return (
			<div className='flex justify-center items-center h-96'>
				<div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
			</div>
		);

	return (
		<div className='max-w-7xl mx-auto pb-16'>
			{/* Breadcrumbs */}
			<nav className='flex items-center text-sm text-gray-500 mb-6 space-x-2'>
				<Link to='/' className='hover:text-blue-600 transition'>
					Trang chủ
				</Link>
				<ChevronRight className='w-4 h-4' />
				<span className='cursor-pointer hover:text-blue-600 transition'>
					{room.category}
				</span>
				<ChevronRight className='w-4 h-4' />
				<span className='text-gray-900 font-semibold'>{room.name}</span>
			</nav>

			{/* Gallery Layout */}
			<div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 h-auto md:h-[500px] rounded-2xl overflow-hidden'>
				<div className='md:col-span-2 h-64 md:h-full group overflow-hidden relative'>
					<img
						src={room.image}
						alt={room.name}
						className='w-full h-full object-cover group-hover:scale-105 transition duration-700'
					/>
					<div className='absolute top-4 left-4'>
						<span
							className={`px-4 py-1.5 rounded-full text-sm font-bold shadow-md ${room.status === "Trống" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
						>
							{room.status}
						</span>
					</div>
				</div>
				<div className='hidden md:flex flex-col gap-4 h-full'>
					{/* Dùng ảnh placeholder ngẫu nhiên phong cách kiến trúc để làm gallery phụ */}
					<div className='h-1/2 overflow-hidden rounded-tr-2xl group'>
						<img
							src={`https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600`}
							alt='Chi tiết phòng 1'
							className='w-full h-full object-cover group-hover:scale-105 transition duration-500'
						/>
					</div>
					<div className='h-1/2 overflow-hidden rounded-br-2xl group relative'>
						<img
							src={`https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=600`}
							alt='Chi tiết phòng 2'
							className='w-full h-full object-cover group-hover:scale-105 transition duration-500'
						/>
						<div className='absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer hover:bg-black/50 transition'>
							<span className='text-white font-bold text-lg flex items-center gap-2'>
								<Maximize className='w-5 h-5' /> Xem tất cả ảnh
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
				{/* Cột trái: Thông tin chi tiết */}
				<div className='lg:col-span-2 space-y-10'>
					{/* Tiêu đề & Thông tin cơ bản */}
					<div className='border-b pb-8'>
						<div className='flex justify-between items-start mb-4'>
							<h1 className='text-3xl md:text-4xl font-extrabold text-gray-900'>
								{room.name}
							</h1>
						</div>
						<div className='flex flex-wrap items-center gap-4 text-gray-600 mt-2'>
							<span className='flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold'>
								<Star className='w-4 h-4 fill-current' /> Hạng {room.category}
							</span>
							<span className='flex items-center gap-1.5'>
								<Maximize className='w-4 h-4' /> {room.area}
							</span>
							<span className='flex items-center gap-1.5'>
								<MapPin className='w-4 h-4' /> Tầng cao / View đẹp
							</span>
						</div>
						<p className='mt-6 text-gray-700 leading-relaxed text-lg'>
							Được thiết kế theo phong cách <strong>{room.style}</strong>, phòng{" "}
							{room.name} mang đến không gian lưu trú tuyệt vời với diện tích
							rộng rãi {room.area}. Đây là sự lựa chọn hoàn hảo với các đặc điểm
							nổi bật như: {room.features.join(", ")}.
						</p>
					</div>

					{/* Tiện nghi phòng */}
					<div>
						<h2 className='text-2xl font-bold mb-6'>
							Tiện nghi có sẵn trong phòng
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8'>
							{room.furniture.map((item, idx) => (
								<div
									key={`furn-${idx}`}
									className='flex items-center gap-3 text-gray-700'
								>
									<HomeIcon className='w-5 h-5 text-gray-400' />
									<span className='font-medium'>{item}</span>
								</div>
							))}
							{room.services.map((item, idx) => (
								<div
									key={`serv-${idx}`}
									className='flex items-center gap-3 text-gray-700'
								>
									<CheckCircle2 className='w-5 h-5 text-green-500' />
									<span className='font-medium'>{item}</span>
								</div>
							))}
							{/* Thêm một số icon ảo để tăng độ phong phú cho UI */}
							<div className='flex items-center gap-3 text-gray-700'>
								<Wifi className='w-5 h-5 text-blue-500' />{" "}
								<span className='font-medium'>Wifi tốc độ cao miễn phí</span>
							</div>
							<div className='flex items-center gap-3 text-gray-700'>
								<Wind className='w-5 h-5 text-teal-500' />{" "}
								<span className='font-medium'>Điều hòa nhiệt độ 2 chiều</span>
							</div>
							<div className='flex items-center gap-3 text-gray-700'>
								<Bath className='w-5 h-5 text-blue-400' />{" "}
								<span className='font-medium'>Phòng tắm nóng lạnh</span>
							</div>
						</div>
					</div>

					{/* Chính sách khách sạn */}
					<div className='bg-gray-50 p-6 rounded-2xl border border-gray-100'>
						<h2 className='text-xl font-bold mb-6'>Chính sách & Quy định</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
							<div className='flex gap-4'>
								<Clock className='w-6 h-6 text-blue-600 flex-shrink-0' />
								<div>
									<h4 className='font-bold text-gray-900'>Nhận / Trả phòng</h4>
									<p className='text-sm text-gray-600 mt-1'>
										Nhận phòng: Từ 14:00
										<br />
										Trả phòng: Trước 12:00
									</p>
								</div>
							</div>
							<div className='flex gap-4'>
								<Info className='w-6 h-6 text-blue-600 flex-shrink-0' />
								<div>
									<h4 className='font-bold text-gray-900'>
										Trẻ em & Giường phụ
									</h4>
									<p className='text-sm text-gray-600 mt-1'>
										Miễn phí cho 1 trẻ em dưới 6 tuổi dùng chung giường với bố
										mẹ.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Cột phải: Khung đặt phòng (Sticky) */}
				<div className='lg:col-span-1'>
					<div className='bg-white border shadow-xl rounded-2xl p-6 sticky top-24'>
						<div className='mb-6'>
							{room.discountPrice < room.price && (
								<div className='flex items-center gap-2 mb-1'>
									<span className='bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded'>
										Đang giảm giá
									</span>
									<span className='text-gray-400 line-through text-sm'>
										{room.price.toLocaleString()} VNĐ
									</span>
								</div>
							)}
							<div className='flex items-baseline gap-1'>
								<span className='text-3xl font-black text-blue-600'>
									{room.discountPrice.toLocaleString()} VNĐ
								</span>
								<span className='text-gray-500 font-medium'>/ đêm</span>
							</div>
						</div>

						<div className='space-y-4 mb-6'>
							<div className='border rounded-xl p-3 flex justify-between items-center bg-gray-50'>
								<span className='text-gray-600'>Trạng thái phòng:</span>
								<span
									className={`font-bold ${room.status === "Trống" ? "text-green-600" : "text-red-600"}`}
								>
									{room.status}
								</span>
							</div>
							<div className='border rounded-xl p-3 flex justify-between items-center bg-gray-50'>
								<span className='text-gray-600'>Mã phòng:</span>
								<span className='font-bold font-mono text-gray-900'>
									{room.id}
								</span>
							</div>
						</div>

						<button
							onClick={handleBookingClick}
							disabled={room.status !== "Trống"}
							className={`w-full py-4 rounded-xl font-bold text-lg text-white transition-all shadow-md ${
								room.status === "Trống"
									? "bg-blue-600 hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-0.5"
									: "bg-gray-400 cursor-not-allowed"
							}`}
						>
							{room.status === "Trống"
								? "Đặt Phòng Ngay"
								: "Phòng Đang Được Sử Dụng"}
						</button>

						<div className='mt-6 space-y-3'>
							<div className='flex items-center gap-2 text-sm text-gray-600'>
								<ShieldCheck className='w-5 h-5 text-green-500' /> Thanh toán an
								toàn & bảo mật
							</div>
							<div className='flex items-center gap-2 text-sm text-gray-600'>
								<Clock className='w-5 h-5 text-green-500' /> Xác nhận đặt phòng
								ngay lập tức
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Gợi ý phòng tương tự */}
			{similarRooms.length > 0 && (
				<div className='mt-20 border-t pt-12'>
					<h2 className='text-2xl font-bold mb-6'>
						Các phòng {room.category} khác bạn có thể thích
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						{similarRooms.map(simRoom => (
							<Link
								to={`/room/${simRoom.id}`}
								key={simRoom.id}
								className='bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition border group flex flex-col'
							>
								<div className='h-48 overflow-hidden relative'>
									<img
										src={simRoom.image}
										alt={simRoom.name}
										className='w-full h-full object-cover group-hover:scale-110 transition duration-500'
									/>
									<div className='absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-xs font-bold shadow'>
										{simRoom.status}
									</div>
								</div>
								<div className='p-4 flex flex-col flex-grow'>
									<h3 className='font-bold text-lg text-gray-900 mb-1 line-clamp-1'>
										{simRoom.name}
									</h3>
									<p className='text-gray-500 text-sm mb-3'>
										<Maximize className='w-3 h-3 inline mr-1' /> {simRoom.area}
									</p>
									<div className='mt-auto flex justify-between items-end'>
										<span className='text-blue-600 font-bold text-lg'>
											{simRoom.discountPrice.toLocaleString()}đ
										</span>
										<span className='text-sm font-medium text-blue-600 group-hover:underline'>
											Xem phòng &rarr;
										</span>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
