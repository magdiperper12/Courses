import React from 'react';
import CursesProfile from '../CursesProfile';

const page = () => {
	return (
		<div>
			<CursesProfile
				title='UI & UX'
				subtitle='this UI course'
				houres='12'
				price='5000'
				color='bg-cyan-500'
				video='TgqeRTwZvIo'
				image='/Box/amico.png'
			/>
		</div>
	);
};

export default page;
