import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import App from './app.tsx';
import '@/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<NextUIProvider>
			<div className="relative flex flex-col">
				<main className="container relative z-20 mx-auto mb-12 min-h-[calc(100vh_-_64px_-_108px)] max-w-7xl flex-grow px-6 font-inter text-foreground dark">
					<App />
				</main>
				<div
					aria-hidden="true"
					className="fixed -bottom-[40%] -left-[20%] z-10 hidden dark:opacity-70 md:block"
				>
					<img
						className="relative shadow-none opacity-50 rounded-large shadow-black/5"
						alt="Left background"
						src="/public/images/docs-left.png"
						data-loaded="true"
					/>
				</div>
				<div
					aria-hidden="true"
					className="fixed -right-[60%] -top-[80%] z-0 rotate-12 dark:opacity-70 dark:md:block 2xl:-right-[45%] 2xl:-top-[60%]"
				>
					<img
						className="relative shadow-none opacity-50 rounded-large shadow-black/5"
						alt="Left background"
						src="/public/images/docs-right.png"
						data-loaded="true"
					/>
				</div>
			</div>
		</NextUIProvider>
	</React.StrictMode>
);
