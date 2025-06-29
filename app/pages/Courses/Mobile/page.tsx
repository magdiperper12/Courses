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
				price='4500'
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
				items={[
					{
						icon: '📱',
						roadTitle: 'Introduction to Mobile Development & Flutter',
						roadTitleArabic: 'مقدمة لتطوير تطبيقات الموبايل وFlutter',
						roadSubtitle: 'Week 1 - الأسبوع الأول',
					},
					{
						icon: '🧱',
						roadTitle: 'Dart Basics: Variables, Functions, Control Flow',
						roadTitleArabic:
							'أساسيات لغة Dart: المتغيرات والدوال والتحكم في التدفق',
						roadSubtitle: 'Week 2 - الأسبوع الثاني',
					},
					{
						icon: '🔄',
						roadTitle: 'OOP in Dart & Working with Widgets',
						roadTitleArabic: 'البرمجة الكائنية في Dart والعمل مع الودجتس',
						roadSubtitle: 'Week 3 - الأسبوع الثالث',
					},
					{
						icon: '🎨',
						roadTitle: 'Layout Widgets, Rows, Columns & Styling',
						roadTitleArabic: 'تصميم الواجهات باستخدام Rows وColumns والتنسيق',
						roadSubtitle: 'Week 4 - الأسبوع الرابع',
					},
					{
						icon: '🧭',
						roadTitle: 'Navigation & Routing in Flutter',
						roadTitleArabic: 'التنقل بين الصفحات وإدارة التوجيه',
						roadSubtitle: 'Week 5 - الأسبوع الخامس',
					},
					{
						icon: '📂',
						roadTitle: 'State Management (setState, Provider)',
						roadTitleArabic: 'إدارة الحالة باستخدام setState وProvider',
						roadSubtitle: 'Week 6 - الأسبوع السادس',
					},
					{
						icon: '🧪',
						roadTitle: 'Mini Projects (UI + Logic)',
						roadTitleArabic: 'مشاريع صغيرة (تصميم + منطق)',
						roadSubtitle: 'Week 7 - الأسبوع السابع',
					},
					{
						icon: '🌐',
						roadTitle: 'API Integration & HTTP Requests',
						roadTitleArabic: 'ربط التطبيقات بـ API وطلبات HTTP',
						roadSubtitle: 'Week 8 - الأسبوع الثامن',
					},
					{
						icon: '💾',
						roadTitle: 'Local Storage: SharedPreferences, SQLite',
						roadTitleArabic:
							'التخزين المحلي باستخدام SharedPreferences وSQLite',
						roadSubtitle: 'Week 9 - الأسبوع التاسع',
					},
					{
						icon: '⚙️',
						roadTitle: 'Authentication & Firebase Basics',
						roadTitleArabic: 'تسجيل الدخول وأساسيات Firebase',
						roadSubtitle: 'Week 10 - الأسبوع العاشر',
					},
					{
						icon: '🚀',
						roadTitle: 'Publishing to Play Store & App Testing',
						roadTitleArabic: 'نشر التطبيق على متجر Google واختباره',
						roadSubtitle: 'Week 11 - الأسبوع الحادي عشر',
					},
					{
						icon: '🏗️',
						roadTitle: 'Final Project (Full App)',
						roadTitleArabic: 'مشروع التخرج (تطبيق متكامل)',
						roadSubtitle: 'Week 12 - الأسبوع الثاني عشر',
					},
					{
						icon: '🎓',
						roadTitle: 'Final Assessment & Certificate Test',
						roadTitleArabic: 'التقييم النهائي واختبار الشهادة',
						roadSubtitle: 'Week 13 - الأسبوع الثالث عشر',
					},
				]}
			/>
		</div>
	);
};

export default page;
