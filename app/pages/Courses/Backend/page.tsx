import React from 'react';
import CursesProfile from '../../../components/CursesProfile';

const page = () => {
	return (
		<div>
			<CursesProfile
				title='backend'
				subtitle='this is backend course'
				houres='12'
				price='5000'
				color='bg-black'
				borderColor='border-black'
				textColor='text-black'
				video='OeEHJgzqS1k'
				image='/Box/amico.png'
				list={[
					'لمن لا يمتلك خبرة مسبقة في مجال تطوير البرمجيات ويريد تعلم أساسيات البرمجة الخلفية',
					'لمن يمتلك خبرة بسيطة في البرمجة ويرغب في تطوير مهاراته في البرمجة الخلفية',
					'لمن يرغب في تعلم استخدام لغات البرمجة مثل Python وJavaScript في تطوير البرمجيات الخلفية',
					'لمن يريد بناء مشاريع عملية باستخدام تقنيات البرمجة الخلفية لتعزيز مهاراته',
					'لمن يسعى للحصول على فرص عمل في مجال تطوير البرمجيات الخلفية',
					'لمن يرغب في تعلم كيفية بناء واجهات برمجية (APIs) والتعامل مع قواعد البيانات',
				]}
				about='هذه الدورة مخصصة للمبتدئين الذين يرغبون في فهم أساسيات البرمجة الخلفية وتطبيقاتها العملية.'
				items={[
					{
						icon: '💻',
						roadTitle: 'Backend Development',
						roadSubtitle: 'Backend Roadmap',
					},
					{
						icon: '📦',
						roadTitle: 'APIs',
						roadSubtitle: 'API Development Roadmap',
					},
					{
						icon: '🗄️',
						roadTitle: 'Databases',
						roadSubtitle: 'Database Management Roadmap',
					},
				]}
			/>
		</div>
	);
};

export default page;
