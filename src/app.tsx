import { Title } from '@/components/title';
import { Tabs, Tab } from '@nextui-org/react';
import { ExampleUseState, steps } from '@/components/tutorial-hooks-useState';

import { CodeBlock } from '@/components/code-block';

export default function App() {
	return (
		<div className="grid grid-cols-12 ">
			<div className="relative z-10 mt-8 hidden overflow-visible pr-4 lg:col-span-2 lg:block"></div>
			<div className="z-50 col-span-12 mt-10 lg:col-span-10 lg:px-16 xl:col-span-8">
				<div className="w-full space-y-6">
					<Title>
						<Title.PreHighlight>Aprendé a usar el hook</Title.PreHighlight>
						<Title.Highlight>useState</Title.Highlight>
						<Title.PostHighlight>con este tutorial</Title.PostHighlight>
					</Title>
					<Tabs color="secondary" aria-label="Tabs colors" radius="full">
						<Tab key="explanation" title="Explicación">
							<div className="space-y-4">
								<CodeBlock code={steps[1]} />
								<CodeBlock code={steps[2]} />
							</div>
						</Tab>
						<Tab
							className="flex w-full max-w-screen-md justify-center"
							key="example"
							title="Ejemplo"
						>
							<ExampleUseState />
						</Tab>
						<Tab className="w-full" key="video" title="Video" />
					</Tabs>
				</div>
			</div>
			<div className="z-10 mt-8 hidden pl-4 xl:col-span-2 xl:flex"></div>
		</div>
	);
}
