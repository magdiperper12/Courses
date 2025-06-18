import Image from 'next/image';
import React from 'react';

const page = () => {
	return (
		<div className='text-2xl flex justify-center items-center h-[100vh] '>
			<Image
				src={'/404 error.png'}
				alt='error'
				width={550}
				height={100}
			/>
		</div>
	);
};

export default page;
