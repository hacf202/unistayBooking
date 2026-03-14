// src/pages/Success.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import QRCode from "react-qr-code";
import { getBookings } from "../data/mockDb";
import { CheckCircle } from "lucide-react";

export default function Success() {
	const { bookingId } = useParams();
	const [booking, setBooking] = useState(null);

	useEffect(() => {
		const bookings = getBookings();
		setBooking(bookings.find(b => b.id === bookingId));
	}, [bookingId]);

	if (!booking) return <div>Không tìm thấy giao dịch.</div>;

	// Dữ liệu gói gọn vào QR
	const qrData = JSON.stringify({
		code: booking.bookingCode,
		room: booking.roomName,
		name: booking.customerName,
	});

	return (
		<div className='max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-lg text-center'>
			<CheckCircle className='w-20 h-20 text-green-500 mx-auto mb-4' />
			<h1 className='text-3xl font-bold text-gray-900 mb-2'>
				Đặt phòng thành công!
			</h1>
			<p className='text-gray-500 mb-8'>
				Cảm ơn bạn đã tin tưởng Khách Sạn Việt. Dưới đây là mã nhận phòng của
				bạn.
			</p>

			<div className='bg-gray-50 p-6 rounded-xl inline-block border mb-8'>
				<h3 className='text-sm text-gray-500 uppercase font-bold tracking-wider mb-2'>
					Mã Đặt Phòng
				</h3>
				<p className='text-4xl font-black text-blue-600 tracking-widest'>
					{booking.bookingCode}
				</p>

				<div className='mt-8 bg-white p-4 rounded-lg shadow-sm'>
					<QRCode value={qrData} size={200} className='mx-auto' />
				</div>
				<p className='text-sm text-gray-500 mt-4'>
					Vui lòng đưa mã QR này cho lễ tân khi nhận phòng
				</p>
			</div>

			<div className='space-y-2 text-left bg-blue-50 p-4 rounded-lg text-blue-900 mb-8'>
				<p>
					<strong>Khách hàng:</strong> {booking.customerName}
				</p>
				<p>
					<strong>Phòng:</strong> {booking.roomName}
				</p>
				<p>
					<strong>Thời gian:</strong> {booking.checkIn} đến {booking.checkOut}
				</p>
			</div>

			<Link to='/' className='text-blue-600 font-bold hover:underline'>
				← Về trang chủ
			</Link>
		</div>
	);
}
