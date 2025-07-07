import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
	return (
		<div className='flex flex-col pt-5 md:pt-0 md:flex-row  px-5 items-center justify-between space-y-8 min-h-[80vh] 	max-w-7xl m-auto'>
			<div className='space-y-3'>
				<h1 className='text-7xl font-bold text-gray-700'>
					تعلم بمرونة…
					<br /> من أي مكان، في أي وقت
				</h1>
				<p className='text-xl text-gray-800'>
					<span className='w-2 bg-blue-500 me-2 text-blue-500 '>|</span>
					نحن نقدم تجربة تعليمية شاملة تعلم البرمجة من الصفر حتى الاحتراف
				</p>
				<Link href={'/pages/subscribe'}>
					<button className='bg-blue-500 text-white rounded-full px-5 py-2 font-bold'>
						اشترك الآن
					</button>
				</Link>
			</div>
			<div>
				<Image
					src='/home_hero_image.webp'
					width={490}
					height={200}
					alt='Hero Image'
				/>
			</div>
		</div>
	);
};

export default Hero;
