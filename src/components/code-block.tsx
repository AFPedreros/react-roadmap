import { Highlight, themes } from 'prism-react-renderer';
import { CopyButton } from '@/components/copy-button';
import { cn } from '@nextui-org/react';
import { Code } from '@nextui-org/react';

type CodeBlockProps = {
	code: string;
	copy?: boolean;
};

export function CodeBlock({ code, copy }: CodeBlockProps) {
	return (
		<Highlight theme={themes.oneDark} code={code} language="tsx">
			{({ tokens, getTokenProps }) => (
				<div className="relative overflow-hidden rounded-xl border">
					<div className="relative flex items-center justify-center  py-4">
						<Code color="primary">counter.tsx</Code>
						{!copy && <CopyButton className="absolute right-3 top-3" value={code} />}
					</div>
					<pre className="pb-4">
						{tokens.map((line, i) => (
							<div
								className={cn(i === 2 ? 'bg-secondary/25' : '', 'relative px-4')}
								key={i}
								// {...getLineProps({ line })}
							>
								{i === 2 && <div className=" absolute left-0 h-full w-1 bg-secondary" />}
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
