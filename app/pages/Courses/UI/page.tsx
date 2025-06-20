import React from 'react';
import CursesProfile from '../../../components/CursesProfile';

const page = () => {
	return (
		<div>
			<CursesProfile
				title='UI & UX'
				subtitle={[
					'فيديو تدريبية وتدريب اكاديمي',
					'شهادة معتمدة من أكاديمية حسوب',
					'متابعة أثناء الدورة وبعدها من قبل فريق مختص',
				]}
				houres='12'
				price='5000'
				color='bg-cyan-500'
				borderColor='border-cyan-500'
				textColor='text-cyan-500'
				video='TgqeRTwZvIo'
				image='/Box/amico.png'
				list={[
					'لمن لا يمتلك خبرة مسبقة في مجال تصميم واجهات المستخدم ويريد الدخول في هذا المجال',
					'لمن يمتلك خبرة بسيطة في تصميم الواجهات ويرغب في تطوير مهاراته ليصل إلى الاحترافية',
					'لمن يرغب في تعلم أحدث تقنيات وأدوات تصميم الواجهات وتجربة المستخدم',
					'لمن يريد بناء محفظة أعمال قوية تعرض مهاراته في تصميم الواجهات وتجربة المستخدم',
					'لمن يسعى للحصول على فرص عمل في مجال تصميم الواجهات وتجربة المستخدم',
				]}
				about='هذه الدورة مخصصة للمبتدئين الذين يرغبون في فهم أساسيات تصميم واجهات المستخدم وتجربة المستخدم وتطبيقاتها العملية.'
				items={[
					{
						icon: '🎨',
						roadTitle: 'UI Design',
						roadSubtitle: 'UI Design Roadmap',
					},
					{
						icon: '🖌️',
						roadTitle: 'UX Design',
						roadSubtitle: 'UX Design Roadmap',
					},
					{
						icon: '📱',
						roadTitle: 'Prototyping',
						roadSubtitle: 'Prototyping Roadmap',
					},
				]}
			/>
		</div>
	);
};

export default page;
