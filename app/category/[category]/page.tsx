"use client";

import Product from '@/component/categoryproduct';
// import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';


// const Product = dynamic(() => import('@/component/categoryproduct'), { ssr: false });

const Page = () => {
    const params = useParams()
  return <Product text={params.category} />;
};

export default Page;
