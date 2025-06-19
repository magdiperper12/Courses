import SecoundBox from '@/app/components/SecoundBox';
import React from 'react';

const Why = () => {
	return (
		<div className=' flex flex-col justify-center items-center gap-10 py-10'>
			<div className='grid grid-cols-3 w-7xl m-auto gap-12 gap-y-10'>
				<SecoundBox
					icon={'/secoundBox/certificate.png'}
					title='شهادة معتمدة'
					subtitle='شهادتنا معتمدة تعطى بعد اجتياز الامتحان بنجاح وتقديم مشروع حقيقي للتخرج، وليست شهادة حضور.'
				/>
				<SecoundBox
					icon={'/secoundBox/data.png'}
					title='ضمان استرداد استثمارك'
					subtitle='بعد حصولك على الشهادة، وإن لم تحصل على عمل خلال 6 أشهر يغطي قيمة الدورة التي دفعتها، فسنعيد لك ما دفعت. بهذه البساطة!'
				/>
				<SecoundBox
					icon={'/secoundBox/professor.png'}
					title='إرشادات دائمة من المدربين'
					subtitle='نجيب عن أسئلتك واستفساراتك عبر فريق من المدربين المختصين على مدار الساعة.'
				/>
			</div>
			<div className='grid grid-cols-2 w-7xl m-auto gap-7 gap-y-10'>
				<SecoundBox
					icon={'/secoundBox/projects.png'}
					title='مشاريع عملية حقيقية'
					subtitle='دوراتنا مطورة اعتمادًا على حاجات سوق العمل، حسوب صاحبة أكبر مواقع العمل العربية: خمسات ومستقل وبعيد.'
				/>
				<SecoundBox
					icon={'/secoundBox/website.png'}
					title='موقع إلكتروني احترافي'
					subtitle='بعد منحك الشهادة ستحصل على موقع إلكتروني لمدة سنة مقدم من توكن'
				/>
			</div>
			<div className='grid grid-cols-3 w-7xl m-auto gap-7 gap-y-10'>
				<SecoundBox
					icon={'/secoundBox/works.png'}
					title='بناء معرض أعمال'
					subtitle='حين إتمامك للدورة وتطبيقك العملي معها، سيكون لديك مجموعة رائعة من المشاريع العملية في معرض أعمالك.'
				/>

				<SecoundBox
					icon={'/secoundBox/updates.png'}
					title='تحديثات مستمرة مجانية'
					subtitle='نحدث دوراتنا باستمرار، وسنضيف مسارات جديدة ونحدث المحتوى الحالي دوريًا.'
				/>
				<SecoundBox
					icon={'/secoundBox/live.png'}
					title='وصول مدى الحياة'
					subtitle='عندما تشترك في هذه الدورة فستدفع التكلفة مرة واحدة فقط، لا توجد رسوم دورية.'
				/>
			</div>
		</div>
	);
};

export default Why;
