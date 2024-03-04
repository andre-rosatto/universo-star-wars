import { useState } from 'react';
import '../css/ResourceList.css';

export default function ResourceList({ resourceType, data, onClick }: {
	resourceType: string,
	data: any,
	onClick: (idx: number) => void
}) {
	const [selectedIdx, setSelectedIdx] = useState(-1);

	return (
		<ul className="ResourceList">
			{data.results.map((result: any, idx: number) =>
				<li
					key={idx}
					className={idx === selectedIdx ? 'selected' : ''}
					onClick={() => {
						setSelectedIdx(idx);
						onClick(idx)
					}}
				>
					{resourceType === 'films' ? result.title : result.name}
				</li>
			)}
		</ul>
	);
}