'use client'; // يُستخدم في Next.js لتحديد أن هذا المكون يُنفذ على جهة العميل (Client-side)

import React, { useState } from 'react';

const FAQ = () => {
	// حالة لتحديد أي سؤال مفتوح حاليًا (نستخدم الرقم كمؤشر للمصفوفة، أو null إذا لا شيء مفتوح)
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	// دالة لتبديل حالة السؤال المفتوح
	const toggleShow = (index: number) => {
		// إذا تم الضغط على نفس السؤال المفتوح حاليًا، نقوم بإغلاقه (null)، وإلا نفتح السؤال الجديد
		setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
	};
	const questions = [
		{
			question: 'ما هي متطلبات الدورة؟',
			answer: 'لا توجد متطلبات مسبقة، فقط احضر حماسك للتعلم!',
		},
		{
			question: 'هل يمكنني الحصول على شهادة بعد إكمال الدورة؟',
			answer: 'نعم، ستحصل على شهادة إتمام الدورة بعد اجتياز جميع المهام.',
		},
		{
			question: 'ما هي مدة الدورة؟',
			answer: 'مدة الدورة هي 12 أسبوعًا، مع دروس أسبوعية.',
		},
		{
			question: 'هل يمكنني الوصول إلى المحتوى بعد انتهاء الدورة؟',
			answer: 'نعم، يمكنك الوصول إلى المحتوى في أي وقت بعد انتهاء الدورة.',
		},
		{
			question: 'ما الذي يلزمني حتى أشترك في دورات الأكاديمية؟',
			answer:
				'كل ما تحتاجه هو حاسوب واتصال بالإنترنت، بالإضافة إلى الرغبة في التعلم.',
		},
		{
			question: 'هل اللغة الإنكليزية مطلوبة؟',
			answer:
				'لا، جميع الدورات متاحة باللغة العربية، لذا لا تحتاج إلى معرفة اللغة الإنجليزية.',
		},
		{
			question: 'هل هذه الدورة تمكنني من إيجاد عمل حقًا؟',
			answer:
				'نعم، الدورة مصممة لتزويدك بالمهارات اللازمة لدخول سوق العمل في مجال تطوير البرمجيات.',
		},
		{
			question: 'كيف أحصل على الشهادة؟',
			answer:
				'بعد إكمال جميع المهام والاختبارات بنجاح، ستتمكن من تحميل شهادة إتمام الدورة من حسابك.',
		},
	];

	return (
		<div className='bg-cyan-50 py-12 min-h-screen'>
			<h1 className='w-full text-center font-bold text-3xl mb-10'>
				أسئلة شائعة
			</h1>

			<div className='max-w-4xl mx-auto space-y-4'>
				{/* نمر على كل سؤال داخل المصفوفة */}
				{questions.map((item, index) => (
					// عند الضغط على السؤال، يتم استدعاء toggleShow لتغيير الحالة
					<div
						key={index}
						className='border-b border-gray-300 pb-4 cursor-pointer'
						onClick={() => toggleShow(index)}>
						<h2 className='text-lg font-semibold flex justify-between items-center'>
							{item.question}
							<span className='text-gray-500'>
								{/* إذا كان السؤال الحالي مفتوحًا، نعرض -، غير ذلك نعرض + */}
								{activeIndex === index ? '-' : '+'}
							</span>
						</h2>
						{/* عرض الإجابة فقط إذا كان السؤال الحالي مفتوح */}
						{activeIndex === index && (
							<p className='text-gray-700 mt-2 transition-all duration-300'>
								{item.answer}
							</p>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default FAQ;
