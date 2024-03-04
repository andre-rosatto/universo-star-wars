import '../css/App.css';
import Nav from './Nav';
import { useFetch } from '../utils/useFetch';
import { API_BASE } from '../utils/utils';
import { useState } from 'react';
import ResourceList from './ResourceList';
import Infobox from './Infobox';

export default function App() {
	const [resourceType, setResourceType] = useState('films')
	const [selectedData, setSelectedData] = useState<any | null>();
	const [url, setUrl] = useState<string>(`${API_BASE}${resourceType}`);
	const { isPending, data, error } = useFetch(url);

	return (
		<div className="App">
			<Nav
				resourceType={resourceType}
				onButtonClick={(resourceName: string) => {
					setSelectedData(null);
					setResourceType(resourceName);
					setUrl(`${API_BASE}${resourceName}`);
				}}
			/>
			<div className="content-wrapper">
				<div className="list-column">
					<div className="buttons-wrapper">
						<button
							disabled={!data || !data.previous}
							onClick={() => setUrl(data.previous)}
						>Anterior</button>
						<button
							disabled={!data || !data.next}
							onClick={() => setUrl(data.next)}
						>Próximo</button>
					</div>
					{isPending && <p>Ativando Hyperdrive...</p>}
					{error && <p>Erro: {error}</p>}
					{data && <ResourceList
						resourceType={resourceType}
						data={data}
						onClick={(idx: number) => setSelectedData(data.results[idx])}
					/>}
				</div>
				<Infobox
					resourceType={resourceType}
					data={selectedData}
				/>
			</div>
		</div >
	);
}