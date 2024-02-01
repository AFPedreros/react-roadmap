import { TitlePartProps } from '@/types';
import { cn } from '@nextui-org/react';

export function TitlePostHighlight({ children, className }: TitlePartProps) {
	return <span className={cn('inline tracking-tight ', className)}>{children}</span>;
}
