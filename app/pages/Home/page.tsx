import React from 'react';
import Hero from './Hero';
import Courses from './Courses';
import Why from './Why';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

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
					<section className='flex justify-center items-center  flex-col gap-3 mb-10'>
						<h1 className='text-5xl text-gray-700'>دورات أكاديمية توكن</h1>
						<p className='text-xl text-gray-600'>
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
			<Footer
				color={'bg-blue-500'}
				textColor={'text-white'}
			/>
		</div>
	);
};

export default HomePage;
