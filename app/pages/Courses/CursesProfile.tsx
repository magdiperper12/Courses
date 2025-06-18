import Image from 'next/image';
import React from 'react';

interface props {
	title: string;
	subtitle: string;
	houres: string;
	price: string;
	image: string;
}
const CursesProfile = ({ title, subtitle, houres, price, image }: props) => {
	return (
		<div className='flex justify-around items-start pt-20  h-[80vh]'>
			<div className='bg-red-500 w-1/2 flex flex-col justify-start items-start h-full '>
				<h1>{title}</h1>
				<h3>{subtitle}</h3>
				<div>{houres}</div>
				<div>{price}</div>
			</div>
			<div className='bg-blue-500 w-1/2 flex justify-center items-start h-full'>
				<Image
					width={100}
					height={100}
					alt={title}
					src={image}
					className='w-2/3'
				/>
			</div>
		</div>
	);
};

export default CursesProfile;
