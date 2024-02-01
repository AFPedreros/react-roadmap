import { Highlight, themes } from 'prism-react-renderer';
import { CopyButton } from '@/components/copy-button';

type CodeBlockProps = {
	code: string;
	copy?: boolean;
};

export function CodeBlock({ code, copy }: CodeBlockProps) {
	return (
		<Highlight theme={themes.oneDark} code={code} language="tsx">
			{({ style, tokens, getLineProps, getTokenProps }) => (
				<div className="relative overflow-hidden rounded-xl" style={{ position: 'relative' }}>
					{!!copy && <CopyButton className="absolute right-3 top-3" value={code} />}

					<pre
						className="p-6 code-snippet"
						style={{
							...style,
							overflowX: 'auto'
						}}
					>
						{tokens.map((line, i) => (
							<div key={i} {...getLineProps({ line })}>
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
