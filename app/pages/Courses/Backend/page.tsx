import React from 'react';
import CursesProfile from '../../../components/CursesProfile';

const page = () => {
	return (
		<div>
			<CursesProfile
				title='backend'
				subtitle={[
					'فيديو تدريبية وتدريب اكاديمي',
					'شهادة معتمدة من أكاديمية حسوب',
					'متابعة أثناء الدورة وبعدها من قبل فريق مختص',
				]}
				houres='52'
				price='5500'
				color='bg-black'
				borderColor='border-black'
				textColor='text-black'
				video='OeEHJgzqS1k'
				image='/Box/amico.png'
				list={[
					'لمن لا يمتلك خبرة مسبقة في مجال تطوير البرمجيات ويريد تعلم أساسيات البرمجة الخلفية',
					'لمن يمتلك خبرة بسيطة في البرمجة ويرغب في تطوير مهاراته في البرمجة الخلفية',
					'لمن يرغب في تعلم استخدام لغات البرمجة مثل Python وJavaScript في تطوير البرمجيات الخلفية',
					'لمن يريد بناء مشاريع عملية باستخدام تقنيات البرمجة الخلفية لتعزيز مهاراته',
					'لمن يسعى للحصول على فرص عمل في مجال تطوير البرمجيات الخلفية',
					'لمن يرغب في تعلم كيفية بناء واجهات برمجية (APIs) والتعامل مع قواعد البيانات',
				]}
				about='هذه الدورة مخصصة للمبتدئين الذين يرغبون في فهم أساسيات البرمجة الخلفية وتطبيقاتها العملية.'
				items={[
					{
						icon: '🖥️',
						roadTitle: 'Introduction to Backend & Node.js',
						roadTitleArabic: 'مقدمة في البرمجة الخلفية وNode.js',
						roadSubtitle: 'Week 1 - الأسبوع الأول',
					},
					{
						icon: '🧱',
						roadTitle: 'JavaScript Refresher for Backend',
						roadTitleArabic: 'مراجعة JavaScript لتطوير السيرفر',
						roadSubtitle: 'Week 2 - الأسبوع الثاني',
					},
					{
						icon: '📦',
						roadTitle: 'Modules, File System & Events',
						roadTitleArabic:
							'الوحدات (Modules) ونظام الملفات (File System) والأحداث (Events)',
						roadSubtitle: 'Week 3 - الأسبوع الثالث',
					},
					{
						icon: '🌐',
						roadTitle: 'Building Web Servers with HTTP & Express.js',
						roadTitleArabic: 'بناء خوادم الويب باستخدام HTTP وExpress.js',
						roadSubtitle: 'Week 4 - الأسبوع الرابع',
					},
					{
						icon: '📬',
						roadTitle: 'Handling Requests, Middleware & Routing',
						roadTitleArabic: 'معالجة الطلبات وMiddleware والتوجيه',
						roadSubtitle: 'Week 5 - الأسبوع الخامس',
					},
					{
						icon: '🗃️',
						roadTitle: 'MongoDB Basics & CRUD Operations',
						roadTitleArabic: 'أساسيات MongoDB وعمليات CRUD',
						roadSubtitle: 'Week 6 - الأسبوع السادس',
					},
					{
						icon: '🔒',
						roadTitle: 'Authentication, JWT & Security',
						roadTitleArabic: 'التوثيق باستخدام JWT والحماية',
						roadSubtitle: 'Week 7 - الأسبوع السابع',
					},
					{
						icon: '⚙️',
						roadTitle: 'MVC Architecture & Project Structure',
						roadTitleArabic: 'معمارية MVC وتنظيم هيكل المشروع',
						roadSubtitle: 'Week 8 - الأسبوع الثامن',
					},
					{
						icon: '🧪',
						roadTitle: 'Validation & Error Handling',
						roadTitleArabic: 'التحقق من البيانات ومعالجة الأخطاء',
						roadSubtitle: 'Week 9 - الأسبوع التاسع',
					},
					{
						icon: '📤',
						roadTitle: 'File Uploads & Image Handling',
						roadTitleArabic: 'رفع الملفات والتعامل مع الصور',
						roadSubtitle: 'Week 10 - الأسبوع العاشر',
					},
					{
						icon: '🔁',
						roadTitle: 'API Design: REST & Best Practices',
						roadTitleArabic:
							'تصميم واجهات API وفقًا لمبادئ REST وأفضل الممارسات',
						roadSubtitle: 'Week 11 - الأسبوع الحادي عشر',
					},
					{
						icon: '📊',
						roadTitle: 'Real Projects with Node.js & MongoDB',
						roadTitleArabic: 'مشاريع عملية باستخدام Node.js وMongoDB',
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
