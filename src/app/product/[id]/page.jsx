"use client"

import { useState, useEffect } from 'react';
import { notFound, useRouter } from 'next/navigation';
import Data from '@/data/data';

const ProductDetailedPage = () => {
    const router = useRouter();
    const  id  = router.query;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [da, setDa] = useState(Data);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${da}/${id}`);
                if (!res.ok) {
                    throw new Error('Failed to fetch product data');
                }
                const productData = await res.json();
                setProduct(productData);
                setLoading(false);
            } catch (error) {
                console.error(error);
                notFound(); // Handle 404 error
            }
        };

        if (id) {
            fetchData();
        }

        return () => setLoading(true); // Cleanup loading state on unmount
    }, [id]);

    return (
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 mt-48 pb-10">
            {loading ? (
                <p>Loading...</p>
            ) : product ? (
                <>
                    {/* Add your CustomImage component here */}
                    <div className="divide-2">
                        <div className="space-y-2 pb-8">
                            <h1 className="text-2xl md:text-4xl font-bold">{product.title}</h1>
                            <h2 className="text-gray-500 font-bold text-xl md:text-3xl">${product.price}</h2>
                        </div>
                        <div>
                            <p className="text-xs md:text-sm">{product.description}</p>
                        </div>
                    </div>
                </>
            ) : (
                <p>Product not found</p>
            )}
        </div>
    );
};

export default ProductDetailedPage;
