import Image from 'next/image';
import React from 'react';

interface boxing {
	bg: string;
	title: string;
	img: string;
}

const colorClasses: Record<string, string> = {
	red: 'bg-red-500',
	blue: 'bg-blue-500',
	yellow: 'bg-yellow-500',
	green: 'bg-green-500',
};
const Box = ({ bg, title, img }: boxing) => {
	const backgroundColor = colorClasses[bg] || 'bg-gray-500';
	return (
		<div
			className={`${backgroundColor} w-full flex justify-center items-center flex-col h-52 rounded-xl gap-3 shadow-lg shadow-gray-300`}>
			<h1 className='text-xl font-bold text-white'>{title}</h1>
			<Image
				width={180}
				height={40}
				src={img}
				alt={title}
			/>
		</div>
	);
};

export default Box;
