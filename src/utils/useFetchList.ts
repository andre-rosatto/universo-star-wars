import { useEffect, useState } from "react";

export function useFetchList(list: string[], isFilm: boolean = false): string | null {
	const [result, setResult] = useState<string | null>(null);

	useEffect(() => {
		setResult(null);
		const abortController = new AbortController();
		const resultList: string[] = [];
		Promise.all(
			list.map((url: string) => fetch(url, { signal: abortController.signal })
				.then(res => res.json())
				.then(json => resultList.push(isFilm ? json.title : json.name))
				.catch(err => {
					setResult(null);
					if (!abortController.signal.aborted) {
						console.log(err);
					}
				})
			)).then(() => setResult(resultList.join(', ')));
		return () => abortController.abort();
	}, [list, isFilm]);

	return result;
} 