import React from 'react';
import CursesProfile from '../../../components/CursesProfile';

const page = () => {
	return (
		<div>
			<CursesProfile
				title='Frontend'
				subtitle={[
					'فيديو تدريبية وتدريب اكاديمي',
					'شهادة معتمدة من أكاديمية توكن',
					'متابعة أثناء الدورة وبعدها من قبل فريق مختص',
				]}
				houres='52'
				price='3500'
				color='bg-blue-600'
				borderColor='border-blue-600'
				textColor='text-blue-600'
				video='Tef1e9FiSR0'
				image='/Box/amico.png'
				list={[
					'لمن لا يمتلك خبرة مسبقة في مجال تطوير الواجهات الأمامية ويريد تعلم الأساسيات',
					'لمن يمتلك خبرة بسيطة في تطوير الواجهات ويرغب في تطوير مهاراته ليصل إلى الاحترافية',
					'لمن يرغب في تعلم أحدث تقنيات وأدوات تطوير الواجهات الأمامية',
					'لمن يريد بناء محفظة أعمال قوية تعرض مهاراته في تطوير الواجهات',
					'لمن يسعى للحصول على فرص عمل في مجال تطوير الواجهات الأمامية',
					'لمن يرغب في تعلم كيفية بناء تطبيقات ويب تفاعلية باستخدام JavaScript وReact',
				]}
				about='أعد هذه الدورة أفضل مبرمجي جافاسكربت بتسلسل بسيط وواضح، بإنهائك لها ستصبح مطوّر برمجيات محترف باستخدام لغة جافا سكريبت JavaScript الشهيرة دون الحاجة لامتلاك معرفة مسبقة بالبرمجة، وستتعلم تطوير تطبيقات ويب احترافية خطوة بخطوة اعتمادًا على التجربة العملية والمادة العلمية التي يقدمها مدربون محترفون.
ستبدأ الدورة بأساسيات البرمجة باستخدام لغة جافا سكريبت JavaScript حيث ستعرض بأسلوب هندسي ممتع ومن أبسط المفاهيم البرمجية إلى المفاهيم المتقدمة بالإضافة إلى استعراض أفضل الأساليب المتبعة في البرمجة. الدورة هي عبارة عن مساق تدريبي كامل يبدأ من الصفر وينتهي عند إبداعك وبناء صفحاتك الأولى. الدورة لا تعلم الأساسيات فقط بل تضع المتدرب على بوابة الاحتراف ليكمل طريقه وينافس المحترفين.'
				items={[
					{
						icon: '🌐',
						roadTitle: 'Introduction to Frontend & HTML',
						Describe:
							'مقدمة شاملة في تطوير الواجهة الأمامية، وتعلم بنية صفحات الويب باستخدام HTML، مع فهم للعناصر الأساسية مثل العناوين، الفقرات، الروابط، الصور والقوائم.',
						roadSubtitle: 'Week 1 - الأسبوع الأول',
					},
					{
						icon: '🎨',
						roadTitle: 'CSS & Responsive Design',
						Describe:
							'تعلم كيفية تنسيق صفحات الويب باستخدام CSS، مع التركيز على التصميم المتجاوب ليظهر الموقع بشكل جيد على جميع الأجهزة.',
						roadSubtitle: 'Week 2 - الأسبوع الثاني',
					},
					{
						icon: '📱',
						roadTitle: 'Advanced CSS & Flexbox/Grid',
						Describe:
							'التعمق في تقنيات CSS المتقدمة مثل Flexbox وGrid لتصميم واجهات أكثر احترافية وتنظيم العناصر بشكل مرن.',
						roadSubtitle: 'Week 3 - الأسبوع الثالث',
					},
					{
						icon: '⚙️',
						roadTitle: 'JavaScript Basics',
						Describe:
							'مقدمة إلى لغة JavaScript، تشمل المتغيرات، الجمل الشرطية، الحلقات، الدوال، وأنواع البيانات.',
						roadSubtitle: 'Week 4 - الأسبوع الرابع',
					},
					{
						icon: '🧠',
						roadTitle: 'JavaScript in Practice',
						Describe:
							'تطبيق عملي لمفاهيم JavaScript من خلال تمارين ومشاريع تفاعلية لفهم أعمق للغة.',
						roadSubtitle: 'Week 5 - الأسبوع الخامس',
					},
					{
						icon: '🛠️',
						roadTitle: 'Mini Projects (HTML, CSS, JS)',
						Describe:
							'بناء مشاريع صغيرة تجمع بين HTML وCSS وJavaScript لتقوية المهارات المكتسبة.',
						roadSubtitle: 'Week 6 - الأسبوع السادس',
					},
					{
						icon: '🔧',
						roadTitle: 'Git, GitHub & Tailwind CSS',
						Describe:
							'تعلم أساسيات نظام التحكم في الإصدارات Git، واستخدام GitHub، بالإضافة إلى مكتبة Tailwind CSS لتصميم سريع ومرن.',
						roadSubtitle: 'Week 7 - الأسبوع السابع',
					},
					{
						icon: '⚛️',
						roadTitle: 'React.js Fundamentals',
						Describe:
							'مقدمة إلى مكتبة React.js لتطوير واجهات المستخدم، وتشمل المفاهيم الأساسية مثل المكونات (Components) والحالة (State) والخصائص (Props).',
						roadSubtitle: 'Week 8 - الأسبوع الثامن',
					},
					{
						icon: '⚛️',
						roadTitle: 'React.js Advanced & Hooks',
						Describe:
							'التعمق في React.js باستخدام الـ Hooks مثل useState وuseEffect، بالإضافة إلى مفاهيم متقدمة مثل رفع الحالة (Lifting State) وإدارة الحالة.',
						roadSubtitle: 'Week 9 - الأسبوع التاسع',
					},
					{
						icon: '📂',
						roadTitle: 'React.js Projects',
						Describe:
							'بناء مشاريع تطبيقية باستخدام React.js لتقوية الفهم العملي والتعامل مع سيناريوهات حقيقية.',
						roadSubtitle: 'Week 10 - الأسبوع العاشر',
					},
					{
						icon: '📝',
						roadTitle: 'TypeScript & Next.js Basics',
						Describe:
							'التعرف على TypeScript وأساسيات العمل مع Next.js لتطوير تطبيقات متقدمة بمزايا قوية مثل SSR وRouting.',
						roadSubtitle: 'Week 11 - الأسبوع الحادي عشر',
					},
					{
						icon: '📦',
						roadTitle: 'Projects with TypeScript & Next.js',
						Describe:
							'تطبيق المعرفة من خلال بناء مشاريع باستخدام TypeScript وNext.js، مع التركيز على البنية النظيفة وتحسين الأداء.',
						roadSubtitle: 'Week 12 - الأسبوع الثاني عشر',
					},
					{
						icon: '🎓',
						roadTitle: 'Final Assessment & Certificate Test',
						Describe:
							'تقييم نهائي شامل للمحتوى الذي تم تعلمه، مع اختبار للحصول على شهادة اجتياز الدورة.',
						roadSubtitle: 'Week 13 - الأسبوع الثالث عشر',
					},
				]}
			/>
		</div>
	);
};

export default page;
