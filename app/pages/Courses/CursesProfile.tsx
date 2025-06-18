import Image from 'next/image';
import React from 'react';

interface props {
	title: string;
	subtitle: string;
	houres: string;
	price: string;
	video: string;
	color: string;
	image: string;
}
const CursesProfile = ({
	title,
	subtitle,
	houres,
	price,
	video,
	color,
	image,
}: props) => {
	return (
		<div className='space-y-16 max-w-11/12 m-auto'>
			<section className='flex justify-around items-start pt-20 text-white  h-[80vh]'>
				<div
					className={`${color} w-1/2 flex flex-col justify-start items-start h-full `}>
					<h1>{title}</h1>
					<h3>{subtitle}</h3>
					<div>{houres}</div>
					<div>{price}</div>
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
				<div className='flex justify-around items-start pt-20 text-black  h-[80vh]'>
					<div
						className={` w-1/2 flex flex-col justify-start items-start h-full `}>
						<div>
							لمن لا يمتلك خبرة مسبقة في مجال البرمجة ويريد الدخول في هذا المجال
							الشيق
						</div>
						<div>
							لمن يمتلك خبرة بسيطة في البرمجة ويرغب في تطوير مهاراته ليصل إلى
							الاحترافية
						</div>
						<div>
							لمن يرغب باكتساب مهارات برمجية جديدة تساعده على تحسين دخله
						</div>
						<div>
							للمبرمجين الذين تعلموا احدى لغات البرمجة ذاتيًا ويرغبوا بملئ
							الفراغات وتعلم الأسس
						</div>
						<div>
							لطلاب الجامعات الذين يواجهوا صعوبة ببعض المواد ويرغبون بإتقانها
						</div>
						<div>
							لمن حاول تعلم البرمجة بالسابق وشعر أنها صعبة ولم يتمكن من المواصلة
						</div>
					</div>
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
		</div>
	);
};

export default CursesProfile;
