import '../css/Infobox.css';
import FilmInfo from './FilmInfo';
import PersonInfo from './PersonInfo';
import PlanetInfo from './PlanetInfo';
import SpeciesInfo from './SpeciesInfo';
import StarshipInfo from './StarshipInfo';
import VehicleInfo from './VehicleInfo';

export default function Infobox({ resourceType, data }: {
	resourceType: string,
	data: any
}) {
	return (
		<div className="Infobox">
			{!data && <p className="no-data">Selecione um item...</p>}
			{(data && resourceType === 'films') && <FilmInfo data={data} />}
			{(data && resourceType === 'people') && <PersonInfo data={data} />}
			{(data && resourceType === 'planets') && <PlanetInfo data={data} />}
			{(data && resourceType === 'species') && <SpeciesInfo data={data} />}
			{(data && resourceType === 'starships') && <StarshipInfo data={data} />}
			{(data && resourceType === 'vehicles') && <VehicleInfo data={data} />}
		</div>
	);
}