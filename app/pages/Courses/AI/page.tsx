import React from 'react';
import CursesProfile from '../../../components/CursesProfile';

const page = () => {
	return (
		<div>
			<CursesProfile
				title='AI'
				subtitle={[
					'فيديو تدريبية وتدريب اكاديمي',
					'شهادة معتمدة من أكاديمية حسوب',
					'متابعة أثناء الدورة وبعدها من قبل فريق مختص',
				]}
				houres='12'
				price='5000'
				color='bg-green-500'
				borderColor='border-green-500'
				textColor='text-green-500'
				video='7IgVGSaQPaw'
				image='/Box/amico.png'
				list={[
					'لمن لا يمتلك خبرة مسبقة في مجال الذكاء الاصطناعي ويريد تعلم الأساسيات',
					'لمن يمتلك خبرة بسيطة في الذكاء الاصطناعي ويرغب في تطوير مهاراته ليصل إلى الاحترافية',
					'لمن يرغب في تعلم أحدث تقنيات وأدوات الذكاء الاصطناعي',
					'لمن يريد بناء محفظة أعمال قوية تعرض مهاراته في الذكاء الاصطناعي',
					'لمن يسعى للحصول على فرص عمل في مجال الذكاء الاصطناعي',
					'لمن يرغب في تعلم كيفية بناء نماذج ذكاء اصطناعي باستخدام Python وTensorFlow',
				]}
				about='انطلق في تعلم برمجة الذكاء الاصطناعي AI وتحليل البيانات مع هذه الدورة، التي ستتعلم فيها كل ما تحتاج إليه من الصفر دون حاجة إلى معرفة مسبقة، وتمدك بكل المعلومات لبناء نماذج ذكاء اصطناعي متخصصة.

ستتعلم في دورة الذكاء الاصطناعي أساسيات بايثون ومعالجة البيانات بمختلف أنواعها، وستتعامل مع مختلف LLMs مثل GPT من OpenAI و LLaMA 2 من Meta وكيفية دمجها مع تطبيقاتك العملية.

ستتعلم بأسلوب عملي وشيق الخوارزميات والمفاهيم البرمجية وراء تحليل البيانات Data Analysis وتمثيلها مرئيًا، وتعلم الآلة Machine Learning والتعلم العميق Deep Learning والرؤية الحاسوبية Computer Vision وغيرها، وستكون تجربتك التعليمية مرتكزة على ممارسة ما تتعلمه على مشاريع حقيقية تستخدم في سوق العمل؛ مما يؤهلك للمنافسة بقوة في هذا المجال.

ستمدك هذه الدورة بما تحتاج إليه من معلومات عملية لبناء أنظمة تنبؤ واقتراحات في متجرك، وأنظمة تحليل النصوص وتصنيف الرسائل والتعرف على الصور بإنشاء نماذج ذكاء اصطناعي خاصة بك تبرمجها بنفسك اعتمادًا على متطلباتك باستخدام مختلف الخوازرميات والمكتبات.'
				items={[
					{
						icon: '🤖',
						roadTitle: 'AI',
						roadSubtitle: 'AI Roadmap',
					},
					{
						icon: '📊',
						roadTitle: 'Data Analysis',
						roadSubtitle: 'Data Analysis Roadmap',
					},
					{
						icon: '🧠',
						roadTitle: 'Machine Learning',
						roadSubtitle: 'Machine Learning Roadmap',
					},
					{
						icon: '🖼️',
						roadTitle: 'Computer Vision',
						roadSubtitle: 'Computer Vision Roadmap',
					},
				]}
			/>
		</div>
	);
};

export default page;
