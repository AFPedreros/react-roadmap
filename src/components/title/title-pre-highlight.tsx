import { TitlePartProps } from '@/types';
import { cn } from '@nextui-org/react';

export function TitlePreHighlight({ children, className }: TitlePartProps) {
	return <span className={cn('inline tracking-tight ', className)}>{children}</span>;
}
