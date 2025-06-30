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
						Describe:
							'مقدمة لفهم البرمجة الخلفية، الفرق بينها وبين الواجهة الأمامية، والتعرف على منصة Node.js وأهميتها في بناء الخوادم الحديثة.',
						roadSubtitle: 'Week 1 - الأسبوع الأول',
					},
					{
						icon: '🧱',
						roadTitle: 'JavaScript Refresher for Backend',
						Describe:
							'مراجعة سريعة وشاملة للغة JavaScript مع التركيز على الجوانب المهمة لتطوير السيرفر مثل الـ Callbacks والـ Promises والـ Async/Await.',
						roadSubtitle: 'Week 2 - الأسبوع الثاني',
					},
					{
						icon: '📦',
						roadTitle: 'Modules, File System & Events',
						Describe:
							'تعلم كيفية استخدام الوحدات (Modules) المدمجة والخارجية، التعامل مع نظام الملفات (File System)، وفهم نظام الأحداث (Event Emitter) في Node.js.',
						roadSubtitle: 'Week 3 - الأسبوع الثالث',
					},
					{
						icon: '🌐',
						roadTitle: 'Building Web Servers with HTTP & Express.js',
						Describe:
							'بناء خوادم ويب باستخدام بروتوكول HTTP، ثم تبسيط العملية باستخدام Express.js، وهو إطار عمل شائع لكتابة خوادم فعالة بسرعة.',
						roadSubtitle: 'Week 4 - الأسبوع الرابع',
					},
					{
						icon: '📬',
						roadTitle: 'Handling Requests, Middleware & Routing',
						Describe:
							'فهم كيفية استقبال ومعالجة الطلبات في Express، استخدام الـ Middleware لتعديل الطلبات والاستجابات، وتنظيم المسارات (Routing).',
						roadSubtitle: 'Week 5 - الأسبوع الخامس',
					},
					{
						icon: '🗃️',
						roadTitle: 'MongoDB Basics & CRUD Operations',
						Describe:
							'مقدمة إلى قواعد البيانات غير العلائقية (NoSQL)، والعمل مع MongoDB لإنشاء واسترجاع وتحديث وحذف البيانات (CRUD).',
						roadSubtitle: 'Week 6 - الأسبوع السادس',
					},
					{
						icon: '🔒',
						roadTitle: 'Authentication, JWT & Security',
						Describe:
							'تعلم كيفية إنشاء أنظمة تسجيل دخول آمنة باستخدام JSON Web Tokens، وضمان حماية البيانات والطلبات من التهديدات الأمنية الشائعة.',
						roadSubtitle: 'Week 7 - الأسبوع السابع',
					},
					{
						icon: '⚙️',
						roadTitle: 'MVC Architecture & Project Structure',
						Describe:
							'تنظيم الكود بطريقة احترافية باستخدام معمارية MVC (النموذج-العرض-المتحكم)، لتسهيل صيانة المشاريع وتوسعتها.',
						roadSubtitle: 'Week 8 - الأسبوع الثامن',
					},
					{
						icon: '🧪',
						roadTitle: 'Validation & Error Handling',
						Describe:
							'التحقق من صحة البيانات المدخلة من المستخدمين باستخدام مكتبات مثل Joi أو express-validator، ومعالجة الأخطاء بشكل احترافي.',
						roadSubtitle: 'Week 9 - الأسبوع التاسع',
					},
					{
						icon: '📤',
						roadTitle: 'File Uploads & Image Handling',
						Describe:
							'التعامل مع رفع الملفات من المستخدم، تخزين الصور، وتقديمها عبر السيرفر بطريقة آمنة وفعالة.',
						roadSubtitle: 'Week 10 - الأسبوع العاشر',
					},
					{
						icon: '🔁',
						roadTitle: 'API Design: REST & Best Practices',
						Describe:
							'تصميم واجهات برمجية RESTful احترافية، واستخدام أفضل الممارسات في تنظيم وإدارة نقاط النهاية (Endpoints).',
						roadSubtitle: 'Week 11 - الأسبوع الحادي عشر',
					},
					{
						icon: '📊',
						roadTitle: 'Real Projects with Node.js & MongoDB',
						Describe:
							'تنفيذ مشاريع عملية شاملة تجمع بين المهارات المكتسبة في Node.js وMongoDB، مثل بناء لوحة تحكم أو تطبيق مهام.',
						roadSubtitle: 'Week 12 - الأسبوع الثاني عشر',
					},
					{
						icon: '🎓',
						roadTitle: 'Final Assessment & Certificate Test',
						Describe:
							'تقديم اختبار نهائي يغطي جميع المفاهيم الأساسية، والحصول على شهادة تثبت كفاءتك في تطوير السيرفرات باستخدام Node.js.',
						roadSubtitle: 'Week 13 - الأسبوع الثالث عشر',
					},
				]}
			/>
		</div>
	);
};

export default page;
