import { TitlePartProps } from '@/types';
import { cn } from '@nextui-org/react';

export function TitleHighlight({ children, className }: TitlePartProps) {
	return (
		<span
			className={cn(
				'inline bg-gradient-to-b  from-[#FF1CF7] to-[#B249F8] bg-clip-text tracking-tight text-transparent',
				className
			)}
		>
			{' '}
			{children}{' '}
		</span>
	);
}
