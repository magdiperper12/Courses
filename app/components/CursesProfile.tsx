import Image from 'next/image';
import React from 'react';
import FAQ from './FAQ';
import Courses from '../pages/Home/Courses';

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
			<div className='space-y-16 max-w-11/12 m-auto'>
				<section className='flex justify-around items-start pt-20 text-black  h-[80vh]'>
					<div
						className={` w-1/2 flex flex-col justify-start items-start h-full `}>
						<h1>{title}</h1>
						<h3>{subtitle}</h3>
						<div>{houres}</div>
						<div>{price}</div>
						<div className='flex justify-start items-center w-full gap-4 mt-4'>
							<button className={`${color} p-2 rounded-lg text-white`}>
								اشترك الان
							</button>
							<a
								href='#more'
								className={`border-2 ${borderColor} ${textColor} p-2 rounded-lg`}>
								المزيد
							</a>
						</div>
					</div>
					<div className=' w-1/2 flex justify-center items-start h-full'>
						<div className='aspect-video w-full max-w-2xl mx-auto my-8'>
							<iframe
								className='w-full h-full rounded-xl'
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
