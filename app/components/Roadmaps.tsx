import React from 'react';

interface items {
	icon: string;
	roadTitle: string;
	roadSubtitle: string;
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
				<div
					className={`absolute top-0 left-1/2 transform h-full w-1 ${color} z-0`}></div>

				{items.map((item, index) => (
					<div
						key={index}
						className={`flex flex-col md:flex-row ${
							index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
						} items-center relative`}>
						<div className={`w-full md:w-1/2 px-4 `}>
							<div
								className={`${color} p-6 rounded-xl shadow-lg text-white flex flex-col items-center`}>
								<div className='text-3xl mb-2'>{item.icon}</div>
								<h1 className='font-bold text-xl'>{item.roadTitle}</h1>
								<p className='text-sm'>{item.roadSubtitle}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Roadmaps;
