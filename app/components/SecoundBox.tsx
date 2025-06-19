import Image from 'next/image';
import React from 'react';

interface props {
	icon: string;
	title: string;
	subtitle: string;
}
const SecoundBox = ({ icon, title, subtitle }: props) => {
	return (
		<div className='flex justify-center items-center bg-white  flex-col gap-2 p-6 rounded-xl shadow-xl transition-all duration-150 hover:shadow-sm'>
			<Image
				src={icon}
				alt={title}
				width={140}
				height={70}
			/>
			<h1 className='text-xl text-gray-500 font-bold'>{title}</h1>
			<div className='text-base text-gray-700'>{subtitle}</div>
		</div>
	);
};

export default SecoundBox;
