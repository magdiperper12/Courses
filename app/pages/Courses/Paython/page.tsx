import React from 'react';
import CursesProfile from '../../../components/CursesProfile';

const page = () => {
	return (
		<div>
			<CursesProfile
				title='Python'
				subtitle={[
					'فيديو تدريبية وتدريب اكاديمي',
					'شهادة معتمدة من أكاديمية حسوب',
					'متابعة أثناء الدورة وبعدها من قبل فريق مختص',
				]}
				houres='52'
				price='3500'
				color='bg-gray-500'
				borderColor='border-gray-500'
				textColor='text-gray-500'
				video='Y8Tko2YC5hA'
				image='/Box/amico.png'
				list={[
					'لمن لا يمتلك خبرة مسبقة في مجال البرمجة ويريد تعلم أساسيات بايثون',
					'لمن يمتلك خبرة بسيطة في البرمجة ويرغب في تطوير مهاراته في بايثون',
					'لمن يرغب في تعلم استخدام بايثون في مجالات مثل تحليل البيانات وتعلم الآلة',
					'لمن يريد بناء مشاريع عملية باستخدام بايثون لتعزيز مهاراته',
					'لمن يسعى للحصول على فرص عمل في مجال البرمجة باستخدام بايثون',
				]}
				about='أعد هذه الدورة نخبة من مبرمجي بايثون لنشرح لك لغة بايثون وتطبيقاتها العملية بأسلوب عملي شيق. بأخذلك للدورة ستصبح مطور بايثون محترف بمعرض أعمال رائع لتدخل سوق العمل بقوة، ستتعلم خلال 69 ساعة فيديو التطوير بلغة بايثون للتطبيقات ولمواقع الويب وأساسيات تحليل البيانات والذكاء الاصطناعي. بالاعتماد على النظريات السليمة والتطبيق العملي والدعم المباشر.

تعتمد الدورة على التطبيق العملي وعلى بناء مشاريع حقيقية، فإلى جانب تعلّم الأساسيات ستتعلم كيف تبني تطبيقات حقيقية اعتمادًا على لغة بايثون Python بحد ذاتها، وكيف تبني تطبيقات اعتمادًا على مختلف أطر العمل مثل جانغو وفلاسك وغيرها، وستتعلم كيفية دمج تطبيقات الذكاء الاصطناعي مع تطبيقاتك؛ الأمر الذي سيؤهلّك للعمل كمطوّر بايثون محترف ويضعك على الطريق الصحيح في مشوارك المهني كمبرمج.

ستبدأ الدورة بأساسيات البرمجة باستخدام لغة بايثون Python ومن أبسط المفاهيم البرمجية إلى المفاهيم المتقدمة وأفضل الأساليب المتبعة في البرمجة. الدورة هي عبارة عن مساق تدريبي كامل يبدأ من الصفر وينتهي عند إبداعك وبناء تطبيقك الأول. الدورة لا تعلّم الأساسيات فقط بل تضع المتدرب على بوابة الاحتراف ليكمل طريقه وينافس المحترفين.'
				items={[
					{
						icon: '🐍',
						roadTitle: 'Introduction to Python & Setup',
						roadTitleArabic: 'مقدمة في بايثون وتجهيز بيئة العمل',
						roadSubtitle: 'Week 1 - الأسبوع الأول',
					},
					{
						icon: '🔤',
						roadTitle: 'Variables, Data Types & Operators',
						roadTitleArabic: 'المتغيرات وأنواع البيانات والعوامل',
						roadSubtitle: 'Week 2 - الأسبوع الثاني',
					},
					{
						icon: '🔁',
						roadTitle: 'Conditional Statements & Loops',
						roadTitleArabic: 'الشروط والتكرار (if - for - while)',
						roadSubtitle: 'Week 3 - الأسبوع الثالث',
					},
					{
						icon: '🧱',
						roadTitle: 'Functions & Scope',
						roadTitleArabic: 'الدوال ونطاق المتغيرات',
						roadSubtitle: 'Week 4 - الأسبوع الرابع',
					},
					{
						icon: '📦',
						roadTitle: 'Lists, Tuples, Sets & Dictionaries',
						roadTitleArabic: 'القوائم، والمجموعات، والقواميس',
						roadSubtitle: 'Week 5 - الأسبوع الخامس',
					},
					{
						icon: '📁',
						roadTitle: 'Files & Exception Handling',
						roadTitleArabic: 'قراءة وكتابة الملفات ومعالجة الأخطاء',
						roadSubtitle: 'Week 6 - الأسبوع السادس',
					},
					{
						icon: '🔧',
						roadTitle: 'Modules, Packages & Virtual Environments',
						roadTitleArabic: 'الوحدات والمكتبات والبيئات الافتراضية',
						roadSubtitle: 'Week 7 - الأسبوع السابع',
					},
					{
						icon: '📊',
						roadTitle:
							'Working with External Libraries (e.g., requests, matplotlib)',
						roadTitleArabic:
							'استخدام المكتبات الخارجية مثل requests وmatplotlib',
						roadSubtitle: 'Week 8 - الأسبوع الثامن',
					},
					{
						icon: '📐',
						roadTitle: 'Object-Oriented Programming (OOP)',
						roadTitleArabic: 'البرمجة كائنية التوجه (OOP)',
						roadSubtitle: 'Week 9 - الأسبوع التاسع',
					},
					{
						icon: '🧪',
						roadTitle: 'Unit Testing & Debugging',
						roadTitleArabic: 'اختبار الكود وتصحيح الأخطاء',
						roadSubtitle: 'Week 10 - الأسبوع العاشر',
					},
					{
						icon: '🌐',
						roadTitle: 'Intro to Web Development with Flask',
						roadTitleArabic: 'مقدمة في تطوير الويب باستخدام Flask',
						roadSubtitle: 'Week 11 - الأسبوع الحادي عشر',
					},
					{
						icon: '🚀',
						roadTitle: 'Capstone Project: Build a Python App',
						roadTitleArabic: 'مشروع التخرج: بناء تطبيق بايثون عملي',
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
