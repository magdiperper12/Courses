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
						Describe:
							'مقدمة حول تطوير تطبيقات الأجهزة المحمولة، ولماذا نستخدم Flutter، وكيفية إعداد بيئة التطوير.',
						roadSubtitle: 'Week 1 - الأسبوع الأول',
					},
					{
						icon: '🧱',
						roadTitle: 'Dart Basics: Variables, Functions, Control Flow',
						Describe:
							'تعلم أساسيات لغة Dart من المتغيرات والأنواع والدوال وجمل التحكم مثل if وloop.',
						roadSubtitle: 'Week 2 - الأسبوع الثاني',
					},
					{
						icon: '🔄',
						roadTitle: 'OOP in Dart & Working with Widgets',
						Describe:
							'فهم البرمجة الكائنية (OOP) في Dart، واستخدام الودجتس (Widgets) لبناء واجهات تفاعلية.',
						roadSubtitle: 'Week 3 - الأسبوع الثالث',
					},
					{
						icon: '🎨',
						roadTitle: 'Layout Widgets, Rows, Columns & Styling',
						Describe:
							'تصميم الواجهات باستخدام Widgets مثل Row وColumn وContainer مع تخصيص الألوان والمسافات.',
						roadSubtitle: 'Week 4 - الأسبوع الرابع',
					},
					{
						icon: '🧭',
						roadTitle: 'Navigation & Routing in Flutter',
						Describe:
							'إنشاء التنقل بين الصفحات باستخدام Navigator وإعداد التوجيه داخل التطبيق.',
						roadSubtitle: 'Week 5 - الأسبوع الخامس',
					},
					{
						icon: '📂',
						roadTitle: 'State Management (setState, Provider)',
						Describe:
							'التعامل مع إدارة الحالة باستخدام setState ثم التدرج إلى استخدام Provider لتطبيقات أكبر.',
						roadSubtitle: 'Week 6 - الأسبوع السادس',
					},
					{
						icon: '🧪',
						roadTitle: 'Mini Projects (UI + Logic)',
						Describe:
							'بناء تطبيقات صغيرة تجمع بين التصميم والمنطق البرمجي مثل الآلات الحاسبة وتطبيقات المهام.',
						roadSubtitle: 'Week 7 - الأسبوع السابع',
					},
					{
						icon: '🌐',
						roadTitle: 'API Integration & HTTP Requests',
						Describe:
							'التعامل مع الإنترنت داخل التطبيق، وإرسال واستقبال البيانات من خلال HTTP وJSON.',
						roadSubtitle: 'Week 8 - الأسبوع الثامن',
					},
					{
						icon: '💾',
						roadTitle: 'Local Storage: SharedPreferences, SQLite',
						Describe:
							'تخزين البيانات محليًا داخل الهاتف باستخدام SharedPreferences وSQLite.',
						roadSubtitle: 'Week 9 - الأسبوع التاسع',
					},
					{
						icon: '⚙️',
						roadTitle: 'Authentication & Firebase Basics',
						Describe:
							'إضافة تسجيل الدخول باستخدام Firebase Authentication، وفهم الربط بين التطبيق وقاعدة البيانات السحابية.',
						roadSubtitle: 'Week 10 - الأسبوع العاشر',
					},
					{
						icon: '🚀',
						roadTitle: 'Publishing to Play Store & App Testing',
						Describe:
							'اختبار التطبيق على مختلف الأجهزة وتحضيره للنشر على Google Play مع إنشاء حزمة APK/AAB.',
						roadSubtitle: 'Week 11 - الأسبوع الحادي عشر',
					},
					{
						icon: '🏗️',
						roadTitle: 'Final Project (Full App)',
						Describe:
							'بناء مشروع تخرج متكامل يجمع بين كل المهارات السابقة مثل تطبيق مهام أو متجر إلكتروني بسيط.',
						roadSubtitle: 'Week 12 - الأسبوع الثاني عشر',
					},
					{
						icon: '🎓',
						roadTitle: 'Final Assessment & Certificate Test',
						Describe:
							'تقييم شامل للمستوى النهائي مع اختبار عملي أو نظري للحصول على شهادة اجتياز الدورة.',
						roadSubtitle: 'Week 13 - الأسبوع الثالث عشر',
					},
				]}
			/>
		</div>
	);
};

export default page;
