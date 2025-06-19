import React from 'react';
import Hero from './Hero';
import Courses from './Courses';
import Why from './Why';

const HomePage = () => {
	return (
		<div className='space-y-32 '>
			<div>
				{' '}
				<Hero />
			</div>
			<div>
				<section className='flex justify-center items-center  flex-col gap-3'>
					<h1 className='text-4xl text-gray-700'>دورات أكاديمية توكن</h1>
					<p className='text-lg text-gray-600'>
						دورات شاملة لتعلم البرمجة تعتمد على التطبيق العملي وبناء مشاريع
						حقيقية، تبدأ معك من الصفر وتأخذك خطوة بخطوة حتى الاحتراف
					</p>
				</section>
				<Courses />
			</div>
			<div>
				<Why />
			</div>
		</div>
	);
};

export default HomePage;
