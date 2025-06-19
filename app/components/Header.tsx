'use client';

import Link from 'next/link';
import React, { useState } from 'react';

interface HeaderProps {
	color: string;
	textColor: string;
}
const Header = ({ color, textColor }: HeaderProps) => {
	const [show, setShow] = useState(false);
	const handellShow = () => {
		setShow(!show);
	};

	return (
		<div
			className={` ${color} text-white  border-b-2 p-4 relative w-full px-10 md:px-12 xl:px-20 flex justify-between items-center`}>
			<Link
				href={'/'}
				className='text-2xl  font-bold'>
				codeCraft
			</Link>
			{/*large screen */}
			<div className='hidden  lg:flex justify-around items-center gap-16 text-base'>
				<div className='flex justify-center items-center gap-5'>
					<Link href={'/'}>Courses</Link>
					<Link href={'/'}>Paths</Link>
					<Link href={'/'}>Community</Link>
					<Link href={'/'}>Pricing</Link>
				</div>
				<div className='flex justify-center items-center gap-5'>
					<div
						className={`${textColor} bg-white  rounded-full p-1 w-8 h-8 flex justify-center items-center`}>
						L
					</div>
					<div
						className={`${textColor} bg-white rounded-full p-1 w-8 h-8 flex justify-center items-center`}>
						D
					</div>
				</div>
				<div className='flex justify-center items-center gap-5'>
					<Link
						href={'/sign-up'}
						className={`${textColor} bg-white px-3 p-1 rounded-full  font-bold text-lg`}>
						اشترك الان
					</Link>
				</div>
			</div>

			{/*mobile */}
			<div className='flex  lg:hidden justify-around items-center gap-12 '>
				<button
					onClick={() => handellShow()}
					className='text-2xl'>
					{show ? <div>X</div> : <div>=</div>}
				</button>
				{show && (
					<div className='w-full h-screen  left-0 top-16  absolute bg-red-500 text-white flex-col  items-end gap-20 '>
						<div>nav bar</div>
						<div>language & darkmode</div>
						<div>authintication</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
