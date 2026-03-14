// src/pages/Owner.jsx
import React, { useState, useEffect } from "react";
import { getRooms, saveRooms, getBookings, saveBookings } from "../data/mockDb";
import {
	LayoutDashboard,
	BedDouble,
	ClipboardList,
	Plus,
	Edit,
	Trash2,
	X,
	Search,
	Filter,
} from "lucide-react";

export default function Owner() {
	const [rooms, setRooms] = useState([]);
	const [bookings, setBookings] = useState([]);
	const [activeTab, setActiveTab] = useState("rooms"); // 'rooms' hoặc 'bookings'
	const [searchTerm, setSearchTerm] = useState("");

	// State cho Modal Thêm/Sửa phòng
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [editingRoom, setEditingRoom] = useState(null);
	const [formData, setFormData] = useState({
		id: "",
		name: "",
		category: "Standard",
		price: 0,
		discountPrice: 0,
		image: "",
		status: "Trống",
	});

	useEffect(() => {
		setRooms(getRooms());
		setBookings(getBookings());
	}, []);

	// Các hàm xử lý Phòng
	const toggleRoomStatus = id => {
		const updated = rooms.map(r =>
			r.id === id
				? {
						...r,
						status:
							r.status === "Trống"
								? "Đang sử dụng"
								: r.status === "Đang sử dụng"
									? "Bảo trì"
									: "Trống",
					}
				: r,
		);
		setRooms(updated);
		saveRooms(updated);
	};

	const deleteRoom = id => {
		if (window.confirm("Bạn có chắc chắn muốn xóa phòng này?")) {
			const updated = rooms.filter(r => r.id !== id);
			setRooms(updated);
			saveRooms(updated);
		}
	};

	const openModal = (room = null) => {
		if (room) {
			setEditingRoom(room);
			setFormData({ ...room });
		} else {
			setEditingRoom(null);
			setFormData({
				id: `R${Math.floor(Math.random() * 10000)}`,
				name: "",
				category: "Standard",
				price: 0,
				discountPrice: 0,
				image:
					"https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800",
				status: "Trống",
				features: [],
				furniture: [],
				services: [],
				style: "Hiện đại",
				area: "25m2",
			});
		}
		setIsModalOpen(true);
	};

	const saveRoomForm = e => {
		e.preventDefault();
		let updatedRooms;
		if (editingRoom) {
			updatedRooms = rooms.map(r =>
				r.id === editingRoom.id ? { ...r, ...formData } : r,
			);
		} else {
			updatedRooms = [...rooms, formData];
		}
		setRooms(updatedRooms);
		saveRooms(updatedRooms);
		setIsModalOpen(false);
	};

	// Các hàm xử lý Đặt phòng (Bookings)
	const updateBookingStatus = (id, newStatus) => {
		const updated = bookings.map(b =>
			b.id === id ? { ...b, status: newStatus } : b,
		);
		setBookings(updated);
		saveBookings(updated);
	};

	// Lọc dữ liệu
	const filteredRooms = rooms.filter(
		r =>
			r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			r.id.toLowerCase().includes(searchTerm.toLowerCase()),
	);
	const filteredBookings = bookings.filter(
		b =>
			b.bookingCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
			b.customerName.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	// Thống kê nhanh
	const totalRooms = rooms.length;
	const availableRooms = rooms.filter(r => r.status === "Trống").length;
	const occupiedRooms = rooms.filter(r => r.status === "Đang sử dụng").length;

	return (
		<div className='flex flex-col md:flex-row gap-6 min-h-screen'>
			{/* Sidebar Navigation */}
			<div className='w-full md:w-64 bg-white shadow-lg rounded-2xl p-4 flex flex-col gap-2 h-fit'>
				<div className='p-4 border-b mb-4 text-center'>
					<h2 className='text-xl font-black text-gray-800'>Owner Panel</h2>
					<p className='text-sm text-gray-500'>Quản lý Vận hành</p>
				</div>
				<button
					onClick={() => setActiveTab("rooms")}
					className={`flex items-center gap-3 w-full p-3 rounded-xl font-bold transition ${activeTab === "rooms" ? "bg-blue-600 text-white shadow-md" : "text-gray-600 hover:bg-gray-100"}`}
				>
					<BedDouble className='w-5 h-5' /> Quản lý Phòng
				</button>
				<button
					onClick={() => setActiveTab("bookings")}
					className={`flex items-center gap-3 w-full p-3 rounded-xl font-bold transition ${activeTab === "bookings" ? "bg-blue-600 text-white shadow-md" : "text-gray-600 hover:bg-gray-100"}`}
				>
					<ClipboardList className='w-5 h-5' /> Đơn Đặt Phòng
				</button>
			</div>

			{/* Main Content Area */}
			<div className='flex-1 space-y-6'>
				{/* Thống kê chung */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
					<div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4'>
						<div className='p-4 bg-blue-100 rounded-full text-blue-600'>
							<LayoutDashboard className='w-6 h-6' />
						</div>
						<div>
							<p className='text-gray-500 text-sm font-bold'>Tổng Số Phòng</p>
							<h3 className='text-2xl font-black'>{totalRooms}</h3>
						</div>
					</div>
					<div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4'>
						<div className='p-4 bg-green-100 rounded-full text-green-600'>
							<BedDouble className='w-6 h-6' />
						</div>
						<div>
							<p className='text-gray-500 text-sm font-bold'>Phòng Trống</p>
							<h3 className='text-2xl font-black'>{availableRooms}</h3>
						</div>
					</div>
					<div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4'>
						<div className='p-4 bg-red-100 rounded-full text-red-600'>
							<ClipboardList className='w-6 h-6' />
						</div>
						<div>
							<p className='text-gray-500 text-sm font-bold'>Đang Sử Dụng</p>
							<h3 className='text-2xl font-black'>{occupiedRooms}</h3>
						</div>
					</div>
				</div>

				{/* Bảng dữ liệu theo Tab */}
				<div className='bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden'>
					<div className='p-6 border-b flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-50'>
						<div className='relative w-full md:w-96'>
							<Search className='absolute left-3 top-2.5 text-gray-400 w-5 h-5' />
							<input
								type='text'
								placeholder={
									activeTab === "rooms"
										? "Tìm mã phòng, tên phòng..."
										: "Tìm mã đặt phòng, tên khách..."
								}
								value={searchTerm}
								onChange={e => setSearchTerm(e.target.value)}
								className='w-full pl-10 pr-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none'
							/>
						</div>
						{activeTab === "rooms" && (
							<button
								onClick={() => openModal()}
								className='w-full md:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold transition'
							>
								<Plus className='w-5 h-5' /> Thêm Phòng Mới
							</button>
						)}
					</div>

					<div className='overflow-x-auto'>
						{activeTab === "rooms" ? (
							<table className='w-full text-left border-collapse'>
								<thead>
									<tr className='bg-gray-100 text-gray-600 uppercase text-sm leading-normal'>
										<th className='p-4 font-bold'>Phòng</th>
										<th className='p-4 font-bold'>Hạng</th>
										<th className='p-4 font-bold'>Giá phòng</th>
										<th className='p-4 font-bold'>Trạng thái</th>
										<th className='p-4 font-bold text-center'>Thao tác</th>
									</tr>
								</thead>
								<tbody className='text-gray-700 text-sm'>
									{filteredRooms.map(room => (
										<tr
											key={room.id}
											className='border-b border-gray-100 hover:bg-gray-50 transition'
										>
											<td className='p-4'>
												<div className='flex items-center gap-3'>
													<img
														src={room.image}
														alt='room'
														className='w-12 h-12 rounded-lg object-cover shadow-sm'
													/>
													<div>
														<p className='font-bold text-gray-900'>
															{room.name}
														</p>
														<p className='text-xs text-gray-500 font-mono'>
															{room.id}
														</p>
													</div>
												</div>
											</td>
											<td className='p-4 font-semibold'>{room.category}</td>
											<td className='p-4 text-blue-600 font-bold'>
												{Number(room.discountPrice).toLocaleString()}đ
											</td>
											<td className='p-4'>
												<button
													onClick={() => toggleRoomStatus(room.id)}
													className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${
														room.status === "Trống"
															? "bg-green-100 text-green-700 hover:bg-green-200"
															: room.status === "Đang sử dụng"
																? "bg-red-100 text-red-700 hover:bg-red-200"
																: "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
													}`}
												>
													{room.status}
												</button>
											</td>
											<td className='p-4 text-center'>
												<div className='flex justify-center gap-3'>
													<button
														onClick={() => openModal(room)}
														className='text-blue-500 hover:text-blue-700 p-1 bg-blue-50 rounded-lg'
													>
														<Edit className='w-5 h-5' />
													</button>
													<button
														onClick={() => deleteRoom(room.id)}
														className='text-red-500 hover:text-red-700 p-1 bg-red-50 rounded-lg'
													>
														<Trash2 className='w-5 h-5' />
													</button>
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						) : (
							<table className='w-full text-left border-collapse'>
								<thead>
									<tr className='bg-gray-100 text-gray-600 uppercase text-sm leading-normal'>
										<th className='p-4 font-bold'>Mã Đặt</th>
										<th className='p-4 font-bold'>Khách Hàng</th>
										<th className='p-4 font-bold'>Phòng</th>
										<th className='p-4 font-bold'>Thời gian</th>
										<th className='p-4 font-bold'>Trạng thái GD</th>
									</tr>
								</thead>
								<tbody className='text-gray-700 text-sm'>
									{filteredBookings
										.slice()
										.reverse()
										.map(b => (
											<tr
												key={b.id}
												className='border-b border-gray-100 hover:bg-gray-50'
											>
												<td className='p-4 font-mono font-bold text-blue-600'>
													{b.bookingCode}
												</td>
												<td className='p-4 font-bold'>{b.customerName}</td>
												<td className='p-4'>{b.roomName}</td>
												<td className='p-4 text-xs text-gray-500'>
													{b.checkIn} đến {b.checkOut}
												</td>
												<td className='p-4'>
													<select
														value={b.status}
														onChange={e =>
															updateBookingStatus(b.id, e.target.value)
														}
														className={`text-xs font-bold px-2 py-1 rounded border outline-none ${b.status === "Đã thanh toán" ? "bg-green-50 text-green-700" : "bg-gray-50 text-gray-700"}`}
													>
														<option value='Đã thanh toán'>Đã thanh toán</option>
														<option value='Đã nhận phòng'>Đã nhận phòng</option>
														<option value='Đã trả phòng'>Đã trả phòng</option>
														<option value='Đã hủy'>Đã hủy</option>
													</select>
												</td>
											</tr>
										))}
									{filteredBookings.length === 0 && (
										<tr>
											<td colSpan='5' className='p-8 text-center text-gray-500'>
												Chưa có dữ liệu đặt phòng.
											</td>
										</tr>
									)}
								</tbody>
							</table>
						)}
					</div>
				</div>
			</div>

			{/* Modal Thêm/Sửa Phòng */}
			{isModalOpen && (
				<div className='fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4'>
					<div className='bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto'>
						<div className='p-6 border-b sticky top-0 bg-white z-10 flex justify-between items-center'>
							<h2 className='text-2xl font-bold'>
								{editingRoom ? "Chỉnh Sửa Phòng" : "Thêm Phòng Mới"}
							</h2>
							<button
								onClick={() => setIsModalOpen(false)}
								className='text-gray-400 hover:text-gray-600'
							>
								<X className='w-6 h-6' />
							</button>
						</div>
						<form onSubmit={saveRoomForm} className='p-6 space-y-4'>
							<div className='grid grid-cols-2 gap-4'>
								<div>
									<label className='block text-sm font-bold text-gray-700 mb-1'>
										Mã Phòng
									</label>
									<input
										type='text'
										required
										value={formData.id}
										onChange={e =>
											setFormData({ ...formData, id: e.target.value })
										}
										disabled={!!editingRoom}
										className='w-full border p-2.5 rounded-lg bg-gray-50'
									/>
								</div>
								<div>
									<label className='block text-sm font-bold text-gray-700 mb-1'>
										Tên Phòng
									</label>
									<input
										type='text'
										required
										value={formData.name}
										onChange={e =>
											setFormData({ ...formData, name: e.target.value })
										}
										className='w-full border p-2.5 rounded-lg'
									/>
								</div>
								<div>
									<label className='block text-sm font-bold text-gray-700 mb-1'>
										Hạng Phòng
									</label>
									<select
										value={formData.category}
										onChange={e =>
											setFormData({ ...formData, category: e.target.value })
										}
										className='w-full border p-2.5 rounded-lg'
									>
										<option value='Standard'>Standard</option>
										<option value='Superior'>Superior</option>
										<option value='Deluxe'>Deluxe</option>
										<option value='Family'>Family</option>
										<option value='Suite'>Suite</option>
										<option value='President'>President</option>
									</select>
								</div>
								<div>
									<label className='block text-sm font-bold text-gray-700 mb-1'>
										Trạng Thái
									</label>
									<select
										value={formData.status}
										onChange={e =>
											setFormData({ ...formData, status: e.target.value })
										}
										className='w-full border p-2.5 rounded-lg'
									>
										<option value='Trống'>Trống</option>
										<option value='Đang sử dụng'>Đang sử dụng</option>
										<option value='Bảo trì'>Bảo trì</option>
									</select>
								</div>
								<div>
									<label className='block text-sm font-bold text-gray-700 mb-1'>
										Giá Gốc (VNĐ)
									</label>
									<input
										type='number'
										required
										value={formData.price}
										onChange={e =>
											setFormData({
												...formData,
												price: Number(e.target.value),
											})
										}
										className='w-full border p-2.5 rounded-lg'
									/>
								</div>
								<div>
									<label className='block text-sm font-bold text-gray-700 mb-1'>
										Giá Khuyến Mãi (VNĐ)
									</label>
									<input
										type='number'
										required
										value={formData.discountPrice}
										onChange={e =>
											setFormData({
												...formData,
												discountPrice: Number(e.target.value),
											})
										}
										className='w-full border p-2.5 rounded-lg'
									/>
								</div>
								<div className='col-span-2'>
									<label className='block text-sm font-bold text-gray-700 mb-1'>
										Link Ảnh Đại Diện (URL)
									</label>
									<input
										type='text'
										required
										value={formData.image}
										onChange={e =>
											setFormData({ ...formData, image: e.target.value })
										}
										className='w-full border p-2.5 rounded-lg'
									/>
								</div>
							</div>
							<div className='flex justify-end gap-3 pt-4 border-t mt-6'>
								<button
									type='button'
									onClick={() => setIsModalOpen(false)}
									className='px-6 py-2.5 rounded-xl font-bold text-gray-600 bg-gray-100 hover:bg-gray-200'
								>
									Hủy
								</button>
								<button
									type='submit'
									className='px-6 py-2.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700'
								>
									Lưu Dữ Liệu
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	);
}
