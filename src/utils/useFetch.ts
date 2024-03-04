import { useEffect, useState } from "react";

export interface FetchResult {
	isPending: boolean;
	data: any | null;
	error: string | null;
}

export function useFetch(url: string): FetchResult {
	const [isPending, setIsPending] = useState(false);
	const [data, setData] = useState<Object | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		setIsPending(true);
		setError(null);
		setData(null);
		const abortController = new AbortController();
		fetch(url, { signal: abortController.signal })
			.then(res => res.json())
			.then(data => {
				setError(null);
				setData(data);
				setIsPending(false);
			})
			.catch(err => {
				if (!abortController.signal.aborted) {
					setError(err.message)
					setIsPending(false);
				}
			});
		return () => abortController.abort();
	}, [url]);

	return {
		data: data,
		isPending: isPending,
		error: error
	};
}