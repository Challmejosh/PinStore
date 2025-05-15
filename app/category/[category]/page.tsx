
"use client";
import dynamic from 'next/dynamic';

const Product = dynamic(() => import('@/component/categoryproduct'), { ssr: false });

const Page = ({ params }: { params: { category: string } }) => {
  return <Product text={params.category} />;
};

export default Page;
