import Image from 'next/image';
import React from 'react';

const Certificate = () => {
	return (
		<div className='w-full flex justify-center items-center'>
			<Image
				src={'/certificate.png'}
				alt='certificate'
				width={1100}
				height={1000}
			/>
		</div>
	);
};

export default Certificate;
