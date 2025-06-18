import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface boxing {
	bg: string;
	title: string;
	img: string;
	url: string;
}

const colorClasses: Record<string, string> = {
	red: 'bg-red-500',
	blue: 'bg-blue-500',
	yellow: 'bg-yellow-500',
	green: 'bg-green-500',
	black: 'bg-black',
	gray: 'bg-gray-500',
	cyan: 'bg-cyan-500',
};
const Box = ({ bg, title, img, url }: boxing) => {
	const backgroundColor = colorClasses[bg] || 'bg-gray-500';
	return (
		<Link
			href={url}
			className={`${backgroundColor} w-full  flex justify-center items-center flex-col h-56 rounded-xl gap-1 shadow-lg shadow-gray-300`}>
			<h1 className='text-xl font-bold text-white '>{title}</h1>
			<Image
				width={140}
				height={10}
				src={img}
				alt={title}
				className=''
			/>
		</Link>
	);
};

export default Box;
