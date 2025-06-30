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
						Describe:
							'مقدمة شاملة لفهم الفرق بين تصميم تجربة المستخدم (UX) وتصميم واجهة المستخدم (UI)، وأهمية كل منهما في إنشاء منتجات رقمية ناجحة.',
						roadSubtitle: 'Week 1 - الأسبوع الأول',
					},
					{
						icon: '🧠',
						roadTitle: 'Understanding Users & Design Thinking',
						Describe:
							'التعرف على سلوكيات المستخدمين، واتباع منهجية Design Thinking لحل المشكلات بطرق إبداعية تركز على المستخدم.',
						roadSubtitle: 'Week 2 - الأسبوع الثاني',
					},
					{
						icon: '🧭',
						roadTitle: 'User Research & Personas',
						Describe:
							'جمع بيانات المستخدمين من خلال الأبحاث، وتحليلها لإنشاء شخصيات افتراضية (Personas) تمثل شرائح المستخدمين المستهدفين.',
						roadSubtitle: 'Week 3 - الأسبوع الثالث',
					},
					{
						icon: '✏️',
						roadTitle: 'Wireframing & User Flows',
						Describe:
							'رسم تخطيطي للشاشات (Wireframes) وتخطيط تدفق المستخدم داخل المنتج لفهم كيفية انتقاله من خطوة لأخرى.',
						roadSubtitle: 'Week 4 - الأسبوع الرابع',
					},
					{
						icon: '🎛️',
						roadTitle: 'UI Principles: Layout, Spacing, Color & Typography',
						Describe:
							'تعلم المبادئ البصرية الأساسية لتصميم واجهات فعّالة: الترتيب، التباعد، الألوان، واختيار الخطوط المناسبة.',
						roadSubtitle: 'Week 5 - الأسبوع الخامس',
					},
					{
						icon: '🧩',
						roadTitle: 'Components, Grids & Design Systems',
						Describe:
							'إنشاء مكونات قابلة لإعادة الاستخدام، استخدام الشبكات لتوزيع المحتوى، وبناء نظام تصميم موحد يحافظ على تناسق الواجهة.',
						roadSubtitle: 'Week 6 - الأسبوع السادس',
					},
					{
						icon: '🖥️',
						roadTitle: 'Designing for Web vs Mobile',
						Describe:
							'مقارنة بين خصائص تصميم واجهات الويب وتصميم واجهات التطبيقات على الموبايل، والتكيف مع مختلف الشاشات.',
						roadSubtitle: 'Week 7 - الأسبوع السابع',
					},
					{
						icon: '⚙️',
						roadTitle: 'Prototyping & Interactions (Figma)',
						Describe:
							'بناء نماذج تفاعلية باستخدام Figma، وإضافة التفاعلات بين الشاشات لمحاكاة تجربة المستخدم النهائية.',
						roadSubtitle: 'Week 8 - الأسبوع الثامن',
					},
					{
						icon: '🧪',
						roadTitle: 'Usability Testing & Feedback',
						Describe:
							'تنفيذ اختبارات القابلية للاستخدام مع المستخدمين الحقيقيين، وتحليل الملاحظات لتحسين التصميم.',
						roadSubtitle: 'Week 9 - الأسبوع التاسع',
					},
					{
						icon: '📦',
						roadTitle: 'UI Animation & Micro-interactions',
						Describe:
							'إضافة تفاصيل تفاعلية صغيرة مثل التحريك والمؤثرات الدقيقة لتحسين تجربة المستخدم بشكل كبير.',
						roadSubtitle: 'Week 10 - الأسبوع العاشر',
					},
					{
						icon: '📱',
						roadTitle: 'Accessibility & Inclusive Design',
						Describe:
							'تصميم واجهات يسهل الوصول إليها من قبل جميع المستخدمين، بمن فيهم ذوو الاحتياجات الخاصة، لضمان شمولية التصميم.',
						roadSubtitle: 'Week 11 - الأسبوع الحادي عشر',
					},
					{
						icon: '🚀',
						roadTitle: 'Portfolio Project: Full UI/UX Case Study',
						Describe:
							'إنشاء مشروع متكامل يعرض عملية التصميم من البحث إلى النماذج النهائية، ليُستخدم ضمن الحقيبة المهنية (Portfolio).',
						roadSubtitle: 'Week 12 - الأسبوع الثاني عشر',
					},
					{
						icon: '🎓',
						roadTitle: 'Final Assessment & Certificate Test',
						Describe:
							'اختبار نهائي لتقييم ما تم تعلمه خلال الدورة، والحصول على شهادة تثبت الكفاءة في تصميم UI/UX.',
						roadSubtitle: 'Week 13 - الأسبوع الثالث عشر',
					},
				]}
			/>
		</div>
	);
};

export default page;
