import { Highlight, themes } from 'prism-react-renderer';
import { CopyButton } from '@/components/copy-button';
import { cn } from '@nextui-org/react';
import { Code } from '@nextui-org/react';

type HighlightColor = 'primary' | 'success' | 'danger' | 'warning' | 'secondary';

type CodeBlockProps = {
	code: string;
	copy?: boolean;
	className?: string;
	highlightLines?: string[];
	highlightColor?: HighlightColor;
};

export function CodeBlock({
	code,
	copy,
	className,
	highlightLines,
	highlightColor = 'primary'
}: CodeBlockProps) {
	const processHighlightLines = (highlightLines: string[]): number[] => {
		let linesToHighlight: number[] = [];

		highlightLines.forEach((line) => {
			if (line.includes('-')) {
				const [start, end] = line.split('-').map(Number);
				for (let i = start; i <= end; i++) {
					linesToHighlight.push(i);
				}
			} else if (line.includes(',')) {
				line.split(',').forEach((num) => {
					linesToHighlight.push(parseInt(num, 10));
				});
			} else {
				linesToHighlight.push(parseInt(line, 10));
			}
		});

		return linesToHighlight;
	};

	const linesToHighlight = processHighlightLines(highlightLines || []);
	const backgroundColorClass = `bg-${highlightColor}`;

	console.log('highLightColor', `${backgroundColorClass}/25`);

	return (
		<Highlight theme={themes.oneDark} code={code} language="tsx">
			{({ tokens, getTokenProps }) => (
				<div className={cn(className, 'overflow-hidden')}>
					<div className="relative flex items-center justify-center py-4">
						<Code color="primary">counter.tsx</Code>
						{!!copy && <CopyButton className="absolute right-3 top-3" value={code} />}
					</div>
					<pre className="pb-4">
						{tokens.map((line, i) => (
							<div
								className={cn(
									linesToHighlight.includes(i + 1) ? backgroundColorClass : '',
									'relative bg-opacity-25 px-4'
								)}
								key={i}
							>
								{linesToHighlight.includes(i + 1) && (
									<div className={cn(backgroundColorClass, 'absolute left-0 h-full w-1')} />
								)}
								<span className="mr-2">{i + 1}</span>
								{line.map((token, key) => (
									<span key={key} {...getTokenProps({ token })} />
								))}
							</div>
						))}
					</pre>
				</div>
			)}
		</Highlight>
	);
}
