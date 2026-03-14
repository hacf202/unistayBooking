// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "../data/mockDb";

export default function Login() {
	const navigate = useNavigate();
	const [phone, setPhone] = useState("");

	const handleLogin = e => {
		e.preventDefault();
		const users = JSON.parse(localStorage.getItem("users"));
		const user = users.find(u => u.phone === phone);

		if (user) {
			setCurrentUser(user);
			if (user.role === "admin") navigate("/admin");
			else if (user.role === "owner") navigate("/owner");
			else navigate("/");
		} else {
			alert(
				'Số điện thoại không tồn tại. Dùng "0123456789" (User), "owner" (Chủ), hoặc "admin" (Admin).',
			);
		}
	};

	return (
		<div className='max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg mt-12'>
			<h2 className='text-2xl font-bold mb-6 text-center'>Đăng nhập</h2>
			<form onSubmit={handleLogin} className='space-y-4'>
				<div>
					<label className='block text-gray-700 mb-1'>
						Số điện thoại / Tài khoản
					</label>
					<input
						type='text'
						value={phone}
						onChange={e => setPhone(e.target.value)}
						placeholder='Nhập owner, admin, hoặc 0123456789'
						className='w-full border p-3 rounded-lg'
						required
					/>
				</div>
				<button
					type='submit'
					className='w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700'
				>
					Đăng Nhập
				</button>
			</form>
		</div>
	);
}
