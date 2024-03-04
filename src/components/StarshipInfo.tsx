import { useFetchList } from "../utils/useFetchList";
import { getValue } from "../utils/utils";

export default function StarshipInfo({ data }: { data: any }) {
	const pilots = useFetchList(data.pilots);
	const films = useFetchList(data.films, true);

	return (<>
		<h2>{data.name}</h2>
		<p>Modelo: <span>{data.model}</span></p>
		<p>Classe: <span>{data.starship_class}</span></p>
		<p>Valor: <span>{getValue(data.cost_in_credits, ' créditos')}</span></p>
		<p>Comprimento: <span>{data.length}m</span></p>
		<p>Tripulação necessária: <span>{data.crew}</span></p>
		<p>Passageiros: <span>{data.passengers}</span></p>
		<p>Classe de hyperdrive: <span>{data.hyperdrive_rating}</span></p>
		<p>Velocidade máxima em atmosfera: <span>{data.max_atmosphering_speed}</span></p>
		<p>Megalights: <span>{data.MGLT}/hora</span></p>
		<p>Capacidade de carga: <span>{getValue(data.cargo_capacity, 'kg')}</span></p>
		<p>Autonomia de suprimentos: <span>{data.consumables}</span></p>
		{data.pilots.length > 0 && <p>Pilotos: <span>{pilots || '(...)'}</span></p>}
		<p>Filmes: <span>{films || '(...)'}</span></p>
	</>);
}