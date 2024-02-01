import { Button, ButtonProps } from '@nextui-org/react';
import { useClipboard } from '@nextui-org/use-clipboard';

import { Icons } from '@/components/icons';

interface CopyButtonProps extends ButtonProps {
	value?: string;
}

export function CopyButton({ value, ...buttonProps }: CopyButtonProps) {
	const { copy, copied } = useClipboard();

	const handleCopy = () => {
		copy(value);
	};

	return (
		<Button
			isIconOnly
			className="z-50 border-1 border-transparent bg-transparent before:absolute before:inset-0 before:z-[-1] before:block before:rounded-lg before:bg-white/10 before:backdrop-blur-md before:backdrop-saturate-100 before:content-['']"
			size="sm"
			variant="bordered"
			onPress={handleCopy}
			{...buttonProps}
		>
			<Icons.Check
				className="absolute scale-50 text-zinc-300 opacity-0 transition-transform-opacity data-[visible=true]:scale-100 data-[visible=true]:opacity-100"
				data-visible={copied}
				size={16}
			/>
			<Icons.Copy
				className="absolute scale-50 text-zinc-300 opacity-0 transition-transform-opacity data-[visible=true]:scale-100 data-[visible=true]:opacity-100"
				data-visible={!copied}
				size={16}
			/>
		</Button>
	);
}
