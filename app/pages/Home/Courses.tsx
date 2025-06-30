import Box from '@/app/components/Box';
import React from 'react';

const Courses = ({}) => {
	return (
		<div className='space-y-8 '>
			<section className='max-w-7xl m-auto space-y-8 p-4'>
				<div className='flex md:flex-row flex-col  justify-center items-center gap-8 w-full '>
					<Box
						bg='blue'
						title='Frontend'
						img='/Box/amico.png'
						url='/pages/Courses/Frontend'
					/>
					<Box
						bg='black'
						title='Backend'
						img='/Box/amico.png'
						url='/pages/Courses/Backend'
					/>
					<Box
						bg='yellow'
						title='Mobile'
						img='/Box/amico.png'
						url='/pages/Courses/Mobile'
					/>
				</div>
				<div className='flex justify-center items-center gap-8 w-full '>
					<Box
						bg='green'
						title='AI'
						img='/Box/amico.png'
						url='/pages/Courses/AI'
					/>
				</div>
				<div className='flex md:flex-row flex-col justify-center items-center gap-8 w-full'>
					<Box
						bg='gray'
						title='Paython'
						img='/Box/amico.png'
						url='/pages/Courses/Paython'
					/>
					<Box
						bg='cyan'
						title='UI & UX'
						img='/Box/amico.png'
						url='/pages/Courses/UI'
					/>
				</div>
			</section>
		</div>
	);
};

export default Courses;
