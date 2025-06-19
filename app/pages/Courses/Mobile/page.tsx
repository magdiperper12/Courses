import React from 'react';
import CursesProfile from '../../../components/CursesProfile';

const page = () => {
	return (
		<div>
			<CursesProfile
				title='Python'
				subtitle='this AI course'
				houres='12'
				price='5000'
				color='bg-yellow-500'
				borderColor='border-yellow-500'
				textColor='text-yellow-500'
				video='yye7rSsiV6k'
				image='/Box/amico.png'
				list={[
					'لمن لا يمتلك خبرة مسبقة في مجال تطوير تطبيقات الهواتف المحمولة ويريد تعلم الأساسيات',
					'لمن يمتلك خبرة بسيطة في تطوير التطبيقات ويرغب في تطوير مهاراته ليصل إلى الاحترافية',
					'لمن يرغب في تعلم أحدث تقنيات وأدوات تطوير تطبيقات الهواتف المحمولة',
					'لمن يريد بناء محفظة أعمال قوية تعرض مهاراته في تطوير التطبيقات',
					'لمن يسعى للحصول على فرص عمل في مجال تطوير تطبيقات الهواتف المحمولة',
				]}
				about='هذه الدورة مخصصة للمبتدئين الذين يرغبون في فهم أساسيات تطوير تطبيقات الهواتف المحمولة وتطبيقاتها العملية.'
			/>
		</div>
	);
};

export default page;
