import Box from '@/app/components/Box';
import React from 'react';

const Courses = ({}) => {
	return (
		<div className='space-y-8 '>
			<section className='flex justify-center items-center  flex-col gap-3'>
				<h1 className='text-4xl text-gray-700'>دورات أكاديمية توكن</h1>
				<p className='text-lg text-gray-600'>
					دورات شاملة لتعلم البرمجة تعتمد على التطبيق العملي وبناء مشاريع
					حقيقية، تبدأ معك من الصفر وتأخذك خطوة بخطوة حتى الاحتراف
				</p>
			</section>
			<section className='max-w-7xl m-auto space-y-8'>
				<div className='flex justify-center items-center gap-8 w-full '>
					<Box
						bg='red'
						title='Frontend'
						img='/Computer troubleshooting-amico.png'
					/>
					<Box
						bg='blue'
						title='Backend'
						img='/Computer troubleshooting-amico.png'
					/>
					<Box
						bg='yellow'
						title='Mobile'
						img='/Computer troubleshooting-amico.png'
					/>
				</div>
				<div className='flex justify-center items-center gap-8 w-full '>
					<Box
						bg='green'
						title='AI'
						img='/Computer troubleshooting-amico.png'
					/>
				</div>
				<div className='flex justify-center items-center gap-8 w-full'>
					<Box
						bg='blue'
						title='Paython'
						img='/Computer troubleshooting-amico.png'
					/>
					<Box
						bg='red'
						title='AI'
						img='/Computer troubleshooting-amico.png'
					/>
				</div>
			</section>
		</div>
	);
};

export default Courses;
