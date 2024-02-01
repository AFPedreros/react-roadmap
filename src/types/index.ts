import { SVGProps, ReactNode } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
	size?: number;
};

export type TitlePartProps = {
	className?: string;
	children: ReactNode;
};
