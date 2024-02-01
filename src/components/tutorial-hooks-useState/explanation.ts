const step1 = `//counter.tsx

export default function App() {
    return (
      <div className="flex flex-col w-full gap-y-2">
			<h2>Contador:</h2>
		</div>
  );
}
`;

const step2 = `//counter.tsx
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  
    return (
      <div className="flex flex-col w-full gap-y-2">
			<h2>Contador:</h2>
		</div>
  );
}
`;

export const steps = {
	1: step1,
	2: step2
};
