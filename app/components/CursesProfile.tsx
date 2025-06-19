import Image from 'next/image';
import React from 'react';
import FAQ from './FAQ';
import Courses from '../pages/Home/Courses';
import Header from './Header';

interface props {
	title: string;
	subtitle: string;
	houres: string;
	price: string;
	video: string;
	color: string;
	image: string;
	list: string[];
	about: string;
	borderColor: string;
	textColor: string;
}
const CursesProfile = ({
	title,
	subtitle,
	houres,
	price,
	video,
	color,
	image,
	list,
	about,
	borderColor,
	textColor,
}: props) => {
	return (
		<div>
			<Header
				color={color}
				textColor={textColor}
			/>
			<div className='space-y-16 max-w-11/12 m-auto'>
				<section className='flex flex-col-reverse lg:flex-row items-center justify-between gap-10 py-16 px-4 text-black'>
					{/* النصوص والمحتوى */}
					<div className='w-full lg:w-1/2 space-y-4'>
						<h1 className={`text-3xl md:text-4xl font-bold  ${textColor}`}>
							{title}
						</h1>
						<h3 className='text-lg md:text-xl text-gray-700'>{subtitle}</h3>

						<div className='flex items-center gap-6 mt-2 text-base md:text-lg font-medium'>
							<span>🕒 {houres} ساعة</span>
							<span>💰 {price} جنيه</span>
						</div>

						<div className='flex gap-4 mt-6'>
							<button
								className={`${color} text-white px-6 py-2 rounded-xl font-semibold shadow-md hover:opacity-90 transition`}>
								اشترك الآن
							</button>
							<a
								href='#more'
								className={`border-2 ${borderColor} ${textColor} px-6 py-2 rounded-xl font-semibold hover:bg-gray-100 transition`}>
								المزيد
							</a>
						</div>
					</div>

					{/* الفيديو */}
					<div className='w-full lg:w-1/2 flex justify-center'>
						<div className='aspect-video w-full max-w-2xl'>
							<iframe
								className='w-full h-full rounded-xl shadow-lg'
								src={`https://www.youtube.com/embed/${video}`}
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
								allowFullScreen></iframe>
						</div>
					</div>
				</section>

				<section>
					<div
						className={`${color} text-white font-bold text-2xl w-full flex flex-col justify-center items-center p-10 `}>
						لمن هذه الدورة
					</div>
					<div className='flex justify-around items-start pt-20 text-black  '>
						<ul
							className={` w-1/2 flex flex-col justify-start items-start h-full `}>
							{list.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
						<div className=' w-1/2 flex justify-center items-start h-full'>
							<Image
								src={image}
								alt={title}
								width={100}
								height={100}
							/>
						</div>
					</div>
				</section>
				<section id='more'>
					<div
						className={`${color} text-white font-bold text-2xl w-full flex flex-col justify-center items-center p-10 `}>
						عن الدورة
					</div>
					<div>{about}</div>
				</section>
			</div>
			<section className='my-10 '>
				<FAQ />
			</section>
			<section className='my-10 '>
				<h1 className='w-full text-center font-bold text-3xl mb-10'>
					قد يهمك أيضًا
				</h1>
				<Courses />
			</section>
		</div>
	);
};

export default CursesProfile;
