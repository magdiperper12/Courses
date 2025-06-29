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
				houres='52'
				price='3000'
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
						roadTitle: 'Introduction to UI/UX Design',
						roadTitleArabic: 'مقدمة في تصميم تجربة المستخدم والواجهة',
						roadSubtitle: 'Week 1 - الأسبوع الأول',
					},
					{
						icon: '🧠',
						roadTitle: 'Understanding Users & Design Thinking',
						roadTitleArabic: 'فهم المستخدمين وتفكير التصميم (Design Thinking)',
						roadSubtitle: 'Week 2 - الأسبوع الثاني',
					},
					{
						icon: '🧭',
						roadTitle: 'User Research & Personas',
						roadTitleArabic: 'بحث المستخدم وإنشاء الشخصيات (Personas)',
						roadSubtitle: 'Week 3 - الأسبوع الثالث',
					},
					{
						icon: '✏️',
						roadTitle: 'Wireframing & User Flows',
						roadTitleArabic: 'الرسم التخطيطي وتدفق المستخدم',
						roadSubtitle: 'Week 4 - الأسبوع الرابع',
					},
					{
						icon: '🎛️',
						roadTitle: 'UI Principles: Layout, Spacing, Color & Typography',
						roadTitleArabic:
							'مبادئ التصميم: التخطيط، المسافات، الألوان، والخطوط',
						roadSubtitle: 'Week 5 - الأسبوع الخامس',
					},
					{
						icon: '🧩',
						roadTitle: 'Components, Grids & Design Systems',
						roadTitleArabic: 'المكونات، الشبكات، وأنظمة التصميم',
						roadSubtitle: 'Week 6 - الأسبوع السادس',
					},
					{
						icon: '🖥️',
						roadTitle: 'Designing for Web vs Mobile',
						roadTitleArabic: 'تصميم واجهات الويب مقابل واجهات الموبايل',
						roadSubtitle: 'Week 7 - الأسبوع السابع',
					},
					{
						icon: '⚙️',
						roadTitle: 'Prototyping & Interactions (Figma)',
						roadTitleArabic: 'النماذج التفاعلية والتفاعلات باستخدام Figma',
						roadSubtitle: 'Week 8 - الأسبوع الثامن',
					},
					{
						icon: '🧪',
						roadTitle: 'Usability Testing & Feedback',
						roadTitleArabic: 'اختبارات القابلية للاستخدام وجمع الملاحظات',
						roadSubtitle: 'Week 9 - الأسبوع التاسع',
					},
					{
						icon: '📦',
						roadTitle: 'UI Animation & Micro-interactions',
						roadTitleArabic: 'التحريك في واجهة المستخدم والتفاعلات الصغيرة',
						roadSubtitle: 'Week 10 - الأسبوع العاشر',
					},
					{
						icon: '📱',
						roadTitle: 'Accessibility & Inclusive Design',
						roadTitleArabic: 'سهولة الوصول والتصميم الشامل',
						roadSubtitle: 'Week 11 - الأسبوع الحادي عشر',
					},
					{
						icon: '🚀',
						roadTitle: 'Portfolio Project: Full UI/UX Case Study',
						roadTitleArabic: 'مشروع الحقيبة: دراسة حالة كاملة لتصميم UI/UX',
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
