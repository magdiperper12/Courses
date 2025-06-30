import React from 'react';

interface items {
	icon: string;
	roadTitle: string;
	roadSubtitle: string;
	Describe: string;
}
interface RoadmapsProps {
	color: string;
	textColor: string;
	items: items[];
	title: string;
}
const Roadmaps = ({ color, textColor, items, title }: RoadmapsProps) => {
	return (
		<div className={`relative ${textColor} py-10`}>
			<h1 className='w-full text-center font-bold text-3xl mb-10'>
				مسار {title}
			</h1>

			{/* الخط في المنتصف */}
			<div className='flex flex-col gap-10 relative z-10'>
				{/* الخط الزمني */}
				<div
					className={`absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 ${color} z-0`}></div>

				{items.map((item, index) => {
					const isLeft = index % 2 !== 0;

					return (
						<div
							key={index}
							className={`flex flex-col   md:flex-row ${
								isLeft ? 'md:justify-start' : 'md:justify-end'
							} items-center relative`}>
							{/* نقطة + الأسبوع للجهة اليسرى */}
							{isLeft && (
								<div
									className={`w-1/2 hidden items-end px-5 md:flex flex-col gap-1 mt-2`}>
									<p className='text-sm text-center'>الاسبوع {index + 1}</p>
									<div className='w-3 h-3 bg-white border-4 border-current rounded-full mx-4'></div>
								</div>
							)}

							{/* المحتوى */}
							<div className={`w-full md:w-1/2 px-4`}>
								<div
									className={`${color} p-10	 rounded-2xl hover:rounded-none transition-all duration-300 hover:scale-105 shadow-lg text-white flex flex-col items-center`}>
									<div className='text-5xl mb-2'>{item.icon}</div>
									<h1 className='font-bold text-xl text-center'>
										{item.roadTitle}
									</h1>
									<p className='text-base mt-1 text-center'>{item.Describe}</p>
								</div>
							</div>

							{/* نقطة + الأسبوع للجهة اليمنى */}
							{!isLeft && (
								<div className='w-1/2 hidden md:flex flex-col items-start px-5  gap-1 mt-2'>
									<p className='text-sm text-center'>الاسبوع {index + 1}</p>
									<div className='w-3 h-3 bg-white border-4 border-current rounded-full mx-3'></div>
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Roadmaps;
