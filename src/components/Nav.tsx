import { RESOURCES } from '../utils/utils';
import '../css/Nav.css';

import filmsIcon from '../assets/films.svg';
import peopleIcon from '../assets/people.svg';
import planetsIcon from '../assets/planets.svg';
import speciesIcon from '../assets/species.svg';
import starshipsIcon from '../assets/starships.svg';
import vehiclesIcon from '../assets/vehicles.svg';

const ICONS = [filmsIcon, peopleIcon, planetsIcon, speciesIcon, starshipsIcon, vehiclesIcon];

export default function Nav({ resourceType, onButtonClick }: { resourceType: string; onButtonClick: any }) {
	return (
		<div className="Nav">
			<nav>
				{RESOURCES.map((resource, idx) =>
					<button
						style={{
							backgroundImage: `url(${ICONS[idx]})`
						}}
						key={idx}
						className={resourceType === RESOURCES[idx].name ? 'selected' : ''}
						onClick={() => { onButtonClick(RESOURCES[idx].name) }}
					>{resource.displayName}</button>)
				}
			</nav>
		</div>
	);
}