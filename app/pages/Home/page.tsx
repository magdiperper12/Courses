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
				<Courses />
			</div>
			<div>
				<Why />
			</div>
		</div>
	);
};

export default HomePage;
