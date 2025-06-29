import React from 'react';

interface FooterProps {
	color: string;
	textColor: string;
}
const Footer = ({ color, textColor }: FooterProps) => {
	return (
		<div
			className={`p-10 mt-16 ${color} ${textColor} text-2xl flex justify-center items-center w-full `}>
			Footer
		</div>
	);
};

export default Footer;
