import { cn } from '@nextui-org/react';
import { TitleHighlight } from './title-highlight';
import { TitlePostHighlight } from './title-post-highlight';
import { TitlePreHighlight } from './title-pre-highlight';
import { ReactNode } from 'react';

type TitleProps = {
	className?: string;
	children: ReactNode;
};

function Title({ className, children }: TitleProps) {
	return (
		<h1 className={cn('inline-block max-w-xl text-[2.1rem] font-semibold lg:text-5xl', className)}>
			{children}
		</h1>
	);
}

Title.PreHighlight = TitlePreHighlight;
Title.Highlight = TitleHighlight;
Title.PostHighlight = TitlePostHighlight;

export { Title };
