import { useState } from 'react';
import { Button } from '@nextui-org/react';
import { Icons } from '../icons';

export function ExampleUseState() {
	const [count, setCount] = useState(0);

	return (
		<div className="flex flex-col w-full gap-y-2">
			<h2>Contador: {count}</h2>
			<div className="flex gap-x-2">
				<Button
					startContent={<Icons.Minus className="w-4 h-4 shrink-0" />}
					color="primary"
					onClick={() => setCount((count) => count - 1)}
				>
					Disminuir
				</Button>
				<Button
					color="primary"
					onClick={() => setCount((count) => count + 1)}
					endContent={<Icons.Plus className="w-4 h-4 shrink-0" />}
				>
					Aumentar
				</Button>
			</div>
		</div>
	);
}
