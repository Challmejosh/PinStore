"use client"
import { useState, useEffect } from 'react';
type Review = {
    comment: string
    date: string
    rating: number
    reviewerEmail: string
    reviewerName:string
}
export interface FetchData{
        // quantity?: number
        availabilityStatus: string; 
        brand: string;
        category: string;
        description: string;
        dimensions: {width: number, height: number, depth: number};
        discountPercentage: number
        id:number
        images: string[]
        meta: {createdAt: string, updatedAt: string, barcode: string, qrCode: string}
        minimumOrderQuantity: number
        price: number
        rating:number
        returnPolicy: string
        reviews: Review[]
        shippingInformation: string
        sku: string
        stock: number
        tags: string[]
        thumbnail: string
        title: string
        warrantyInformation: string
        weight: number
}
const useFetch = (url: string) => {
    const [data, setData] = useState<FetchData[] | null>(null);
    const [pending, setPending] = useState<boolean>(true);
    useEffect(() => {
        const fetchData = async () => {
        try {
            setPending(true);
            const res = await fetch(url);
            const json = await res.json();
            setData(json?.products);
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

export default useFetch;
