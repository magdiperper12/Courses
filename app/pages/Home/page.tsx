import React from 'react';
import Hero from './Hero';
import Courses from './Courses';

const HomePage = () => {
	return (
		<div className='space-y-16 '>
			<div>
				{' '}
				<Hero />
			</div>
			<div>
				<Courses />
			</div>
		</div>
	);
};

export default HomePage;
