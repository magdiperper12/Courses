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
				color='bg-red-500'
				video='Tef1e9FiSR0'
				image='/Box/amico.png'
			/>
		</div>
	);
};

export default page;
