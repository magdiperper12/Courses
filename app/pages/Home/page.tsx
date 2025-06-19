import React from 'react';
import Hero from './Hero';
import Courses from './Courses';
import Why from './Why';
import Header from '@/app/components/Header';

const HomePage = () => {
	return (
		<div>
			<Header
				color={'bg-blue-500'}
				textColor={'text-black'}
			/>
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
		</div>
	);
};

export default HomePage;
