"use client"
import { useState, useEffect } from 'react';

export interface FetchData{
    slug: string;
    name: string;
    url: string;
}
// export interface Grocery{

// }
const useCategory = (url: string) => {
    const [data, setData] = useState<FetchData[] | null>(null);
    const [pending, setPending] = useState<boolean>(true);
    useEffect(() => {
        const fetchData = async () => {
        try {
            setPending(true);
            const res = await fetch(url);
            const json = await res.json();
            setData(json);
            setPending(false)
        } catch (error) {
            console.error('Fetch error:', error);
            setData(null);
        } finally {
            setPending(false);
        }
        };

        fetchData();
    }, [url]);

  return { data, pending };
};

export default useCategory;
