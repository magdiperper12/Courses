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
				houres='52'
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
						icon: '🧠',
						roadTitle: 'Introduction to AI & Its Applications',
						Describe:
							'مقدمة تعريفية شاملة بمفهوم الذكاء الاصطناعي، تاريخه، وأنواعه، مع استعراض لأهم تطبيقاته في الحياة اليومية والصناعات الحديثة.',
						roadSubtitle: 'Week 1 - الأسبوع الأول',
					},
					{
						icon: '📊',
						roadTitle: 'Math for AI: Linear Algebra & Probability',
						Describe:
							'مراجعة أساسيات الرياضيات الضرورية لفهم خوارزميات الذكاء الاصطناعي، مثل الجبر الخطي والمصفوفات والاحتمالات.',
						roadSubtitle: 'Week 2 - الأسبوع الثاني',
					},
					{
						icon: '🐍',
						roadTitle: 'Python for AI: Numpy, Pandas, Matplotlib',
						Describe:
							'تعلم أساسيات لغة بايثون المكتبية المستخدمة في تحليل البيانات، مع التدريب العملي على مكتبات Numpy وPandas وMatplotlib.',
						roadSubtitle: 'Week 3 - الأسبوع الثالث',
					},
					{
						icon: '🤖',
						roadTitle: 'Introduction to Machine Learning',
						Describe:
							'التعرف على مفاهيم تعلم الآلة، وأنواع التعلم (الخاضع للإشراف، غير الخاضع، التعلم المعزز)، وكيفية بناء نماذج أولية.',
						roadSubtitle: 'Week 4 - الأسبوع الرابع',
					},
					{
						icon: '🧩',
						roadTitle: 'Supervised Learning: Regression & Classification',
						Describe:
							'فهم خوارزميات التعلم الخاضع للإشراف مثل الانحدار الخطي والمنطقي، والتصنيف باستخدام KNN وDecision Trees.',
						roadSubtitle: 'Week 5 - الأسبوع الخامس',
					},
					{
						icon: '📈',
						roadTitle: 'Model Evaluation & Metrics',
						Describe:
							'تقييم أداء النماذج باستخدام مقاييس مثل الدقة، الاستدعاء، F1-score، وROC curve لتحسين النتائج.',
						roadSubtitle: 'Week 6 - الأسبوع السادس',
					},
					{
						icon: '🔍',
						roadTitle:
							'Unsupervised Learning: Clustering & Dimensionality Reduction',
						Describe:
							'استكشاف البيانات بدون تسميات باستخدام خوارزميات مثل K-Means وPCA وتقنيات تقليل الأبعاد.',
						roadSubtitle: 'Week 7 - الأسبوع السابع',
					},
					{
						icon: '🧠',
						roadTitle: 'Neural Networks Basics',
						Describe:
							'تعلم البنية الأساسية للشبكات العصبية، بما في ذلك الطبقات، التنشيط، التغذية الأمامية، والخلفية.',
						roadSubtitle: 'Week 8 - الأسبوع الثامن',
					},
					{
						icon: '🔥',
						roadTitle: 'Deep Learning with TensorFlow/Keras',
						Describe:
							'بناء نماذج تعلم عميق باستخدام مكتبة Keras أو TensorFlow، مع تطبيقات عملية لتدريب الشبكات العصبية.',
						roadSubtitle: 'Week 9 - الأسبوع التاسع',
					},
					{
						icon: '🖼️',
						roadTitle: 'Computer Vision: CNNs & Image Processing',
						Describe:
							'استخدام الشبكات العصبية الالتفافية (CNN) في مهام رؤية الحاسوب مثل تصنيف الصور واكتشاف الكائنات.',
						roadSubtitle: 'Week 10 - الأسبوع العاشر',
					},
					{
						icon: '🗣️',
						roadTitle: 'Natural Language Processing (NLP)',
						Describe:
							'التعامل مع اللغة الطبيعية باستخدام تقنيات مثل تحليل المشاعر، تصنيف النصوص، والتعرف على الكيانات.',
						roadSubtitle: 'Week 11 - الأسبوع الحادي عشر',
					},
					{
						icon: '🚀',
						roadTitle: 'Capstone Project: Build an AI Solution',
						Describe:
							'تنفيذ مشروع تخرج متكامل لتطبيق ما تم تعلمه من خلال بناء نموذج ذكاء اصطناعي لحل مشكلة واقعية.',
						roadSubtitle: 'Week 12 - الأسبوع الثاني عشر',
					},
					{
						icon: '🎓',
						roadTitle: 'Final Assessment & Certificate Test',
						Describe:
							'تقديم اختبار نهائي لتقييم جميع المهارات المكتسبة، والحصول على شهادة إتمام الدورة بنجاح.',
						roadSubtitle: 'Week 13 - الأسبوع الثالث عشر',
					},
				]}
			/>
		</div>
	);
};

export default page;
