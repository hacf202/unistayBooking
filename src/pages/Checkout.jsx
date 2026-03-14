// src/pages/Checkout.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
	getRooms,
	getBookings,
	saveBookings,
	getCurrentUser,
	saveRooms,
} from "../data/mockDb";

export default function Checkout() {
	const { id } = useParams();
	const navigate = useNavigate();
	const user = getCurrentUser();
	const [room, setRoom] = useState(null);

	const [formData, setFormData] = useState({
		name: user?.name || "",
		checkIn: "",
		checkOut: "",
		paymentMethod: "credit",
	});

	useEffect(() => {
		const rooms = getRooms();
		setRoom(rooms.find(r => r.id === id));
	}, [id]);

	const handleInputChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const calculateDays = () => {
		if (!formData.checkIn || !formData.checkOut) return 0;
		const start = new Date(formData.checkIn);
		const end = new Date(formData.checkOut);
		const diffTime = Math.abs(end - start);
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		return diffDays > 0 ? diffDays : 0;
	};

	const handleSubmit = e => {
		e.preventDefault();
		const days = calculateDays();
		if (days <= 0) return alert("Ngày trả phòng phải sau ngày nhận phòng!");

		const bookingCode = "KSV" + Math.floor(Math.random() * 1000000);
		const newBooking = {
			id: "B" + Date.now(),
			roomId: room.id,
			roomName: room.name,
			customerName: formData.name,
			checkIn: formData.checkIn,
			checkOut: formData.checkOut,
			days: days,
			totalPrice: days * room.discountPrice,
			bookingCode: bookingCode,
			status: "Đã thanh toán",
			createdAt: new Date().toISOString(),
		};

		// Lưu booking
		const bookings = getBookings();
		saveBookings([...bookings, newBooking]);

		// Cập nhật trạng thái phòng thành Đang sử dụng
		const rooms = getRooms();
		const updatedRooms = rooms.map(r =>
			r.id === room.id ? { ...r, status: "Đang sử dụng" } : r,
		);
		saveRooms(updatedRooms);

		navigate(`/success/${newBooking.id}`);
	};

	if (!room) return <div>Đang tải...</div>;
	const days = calculateDays();
	const total = days * room.discountPrice;

	return (
		<div className='max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8'>
			<div>
				<h2 className='text-2xl font-bold mb-6'>Thông tin đặt phòng</h2>
				<form onSubmit={handleSubmit} className='space-y-4'>
					<div>
						<label className='block text-gray-700 mb-1'>Họ và tên</label>
						<input
							type='text'
							name='name'
							value={formData.name}
							onChange={handleInputChange}
							required
							className='w-full border p-3 rounded-lg'
						/>
					</div>
					<div className='grid grid-cols-2 gap-4'>
						<div>
							<label className='block text-gray-700 mb-1'>
								Ngày nhận phòng
							</label>
							<input
								type='date'
								name='checkIn'
								value={formData.checkIn}
								onChange={handleInputChange}
								required
								className='w-full border p-3 rounded-lg'
							/>
						</div>
						<div>
							<label className='block text-gray-700 mb-1'>Ngày trả phòng</label>
							<input
								type='date'
								name='checkOut'
								value={formData.checkOut}
								onChange={handleInputChange}
								required
								className='w-full border p-3 rounded-lg'
							/>
						</div>
					</div>
					<div>
						<label className='block text-gray-700 mb-1'>
							Phương thức thanh toán
						</label>
						<select
							name='paymentMethod'
							value={formData.paymentMethod}
							onChange={handleInputChange}
							className='w-full border p-3 rounded-lg'
						>
							<option value='credit'>Thẻ Tín Dụng / Ghi Nợ</option>
							<option value='momo'>Ví MoMo</option>
							<option value='vnpay'>VNPay</option>
						</select>
					</div>
					<button
						type='submit'
						className='w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700'
					>
						Xác Nhận & Thanh Toán
					</button>
				</form>
			</div>

			<div className='bg-gray-50 p-6 rounded-xl border'>
				<h3 className='text-xl font-bold mb-4'>Chi tiết hóa đơn</h3>
				<img
					src={room.image}
					alt={room.name}
					className='w-full h-40 object-cover rounded-lg mb-4'
				/>
				<h4 className='font-bold text-lg'>{room.name}</h4>
				<div className='mt-4 space-y-2 text-gray-600 border-b pb-4'>
					<p className='flex justify-between'>
						<span>Giá mỗi đêm:</span>{" "}
						<span>{room.discountPrice.toLocaleString()}đ</span>
					</p>
					<p className='flex justify-between'>
						<span>Số đêm:</span> <span>{days} đêm</span>
					</p>
				</div>
				<div className='mt-4 flex justify-between items-center text-xl font-bold text-blue-600'>
					<span>Tổng tiền:</span>
					<span>{total > 0 ? total.toLocaleString() : 0} VNĐ</span>
				</div>
			</div>
		</div>
	);
}
