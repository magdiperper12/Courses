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
				color='bg-red-500'
				borderColor='border-red-500'
				textColor='text-red-500'
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
						roadTitleArabic: 'مقدمة في تطوير الواجهة الأمامية وHTML',
						roadSubtitle: 'Week 1 - الأسبوع الأول',
					},
					{
						icon: '🎨',
						roadTitle: 'CSS & Responsive Design',
						roadTitleArabic: 'CSS والتصميم المتجاوب',
						roadSubtitle: 'Week 2 - الأسبوع الثاني',
					},
					{
						icon: '📱',
						roadTitle: 'Advanced CSS & Flexbox/Grid',
						roadTitleArabic: 'CSS المتقدم وFlexbox/Grid',
						roadSubtitle: 'Week 3 - الأسبوع الثالث',
					},
					{
						icon: '⚙️',
						roadTitle: 'JavaScript Basics',
						roadTitleArabic: 'أساسيات JavaScript',
						roadSubtitle: 'Week 4 - الأسبوع الرابع',
					},
					{
						icon: '🧠',
						roadTitle: 'JavaScript in Practice',
						roadTitleArabic: 'تطبيق عملي على JavaScript',
						roadSubtitle: 'Week 5 - الأسبوع الخامس',
					},
					{
						icon: '🛠️',
						roadTitle: 'Mini Projects (HTML, CSS, JS)',
						roadTitleArabic: 'مشاريع صغيرة (HTML، CSS، JS)',
						roadSubtitle: 'Week 6 - الأسبوع السادس',
					},
					{
						icon: '🔧',
						roadTitle: 'Git, GitHub & Tailwind CSS',
						roadTitleArabic: 'Git وGitHub وTailwind CSS',
						roadSubtitle: 'Week 7 - الأسبوع السابع',
					},
					{
						icon: '⚛️',
						roadTitle: 'React.js Fundamentals',
						roadTitleArabic: 'مبادئ React.js',
						roadSubtitle: 'Week 8 - الأسبوع الثامن',
					},
					{
						icon: '⚛️',
						roadTitle: 'React.js Advanced & Hooks',
						roadTitleArabic: 'React.js المتقدم وHooks',
						roadSubtitle: 'Week 9 - الأسبوع التاسع',
					},
					{
						icon: '📂',
						roadTitle: 'React.js Projects',
						roadTitleArabic: 'مشاريع باستخدام React.js',
						roadSubtitle: 'Week 10 - الأسبوع العاشر',
					},
					{
						icon: '📝',
						roadTitle: 'TypeScript & Next.js Basics',
						roadTitleArabic: 'أساسيات TypeScript وNext.js',
						roadSubtitle: 'Week 11 - الأسبوع الحادي عشر',
					},
					{
						icon: '📦',
						roadTitle: 'Projects with TypeScript & Next.js',
						roadTitleArabic: 'مشاريع باستخدام TypeScript وNext.js',
						roadSubtitle: 'Week 12 - الأسبوع الثاني عشر',
					},
					{
						icon: '🎓',
						roadTitle: 'Final Assessment & Certificate Test',
						roadTitleArabic: 'الاختبار النهائي للحصول على الشهادة',
						roadSubtitle: 'Week 13 - الأسبوع الثالث عشر',
					},
				]}
			/>
		</div>
	);
};

export default page;
