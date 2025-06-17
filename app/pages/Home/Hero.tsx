import React from 'react';

const Hero = () => {
	return (
		<div
			className='  max-w-5xl m-auto mt-8 rounded-2xl h-[100vh] md:h-[60vh] overflow-hidden'
			style={{ backgroundImage: `url(/coding.jpg)` }}>
			<div className='bg-black/70 w-full h-full flex justify-center items-center   flex-col  gap-20'>
				<h1 className='text-5xl text-white font-bold max-w-10/12 text-center'>
					تعلم البرمجة من الصفر حتى الاحتراف
				</h1>
				<div className='flex justify-center items-center  flex-col gap-10 text-white'>
					<h5>
						توفر لك أكاديمية حسوب محتوى عربي شامل ومتنوع لنساعدك في تعلم البرمجة
						بكل احترافية وسهولة
					</h5>
					<button className='bg-white text-black rounded-full px-5  p-2  font-bold'>
						تعلم البرمجه الان
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
