import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
	return (
		// <div
		// 	className='  max-w-5xl m-auto mt-8 rounded-2xl h-[100vh] md:h-[60vh] overflow-hidden'
		// 	style={{ backgroundImage: `url(/coding.jpg)` }}>
		// 	<div className='bg-black/70 w-full h-full flex justify-center items-center   flex-col  gap-20'>
		// 		<h1 className='text-5xl text-white font-bold max-w-10/12 text-center'>
		// 			تعلم البرمجة من الصفر حتى الاحتراف
		// 		</h1>
		// 		<div className='flex justify-center items-center  flex-col gap-10 text-white'>
		// 			<h5>
		// 				توفر لك أكاديمية حسوب محتوى عربي شامل ومتنوع لنساعدك في تعلم البرمجة
		// 				بكل احترافية وسهولة
		// 			</h5>
		// 			<button className='bg-white text-black rounded-full px-5  p-2  font-bold'>
		// 				تعلم البرمجه الان
		// 			</button>
		// 		</div>
		// 	</div>
		// </div>

		<div className='flex  items-center justify-between space-y-8 min-h-[80vh] 	max-w-7xl m-auto'>
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
