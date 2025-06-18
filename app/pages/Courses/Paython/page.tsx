import React from 'react';
import CursesProfile from '../CursesProfile';

const page = () => {
	return (
		<div>
			<CursesProfile
				title='Python'
				subtitle='this AI course'
				houres='12'
				price='5000'
				image='/Computer troubleshooting-amico.png'
			/>
		</div>
	);
};

export default page;
