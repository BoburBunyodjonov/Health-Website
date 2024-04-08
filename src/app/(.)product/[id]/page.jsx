'use client';

import Image  from 'next/image';
import { Dialog } from '@headlessui/react';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ButtonSecondary } from '@/components/buttons/Buttons';
import Layout from '@/layout/Layout';

const ProductDetailedPage = () => {
	const [loading, setLoading] = useState(false);
	const [product, setProduct] = useState();
	const [isOpen, setIsOpen] = useState(true);

	const { id } = useParams();
	const router = useRouter();

	useEffect(() => {
		async function getData() {
			setLoading(true);
			const res = await fetch(
				`http://localhost:4000/products/${id}`
			);
			const product = await res.json();
			setProduct(product);
			setLoading(false);
		}

		getData();
	}, [id]);

	return (
		<Layout>
			<Dialog
			open={isOpen}
			onClose={() => {
				setIsOpen(false);
				router.back();
			}}
			className='relative z-50'
		>
			<div className='fixed inset-0 bg-black/30' aria-hidden='true' />

			<div className='fixed inset-0 overflow-y-auto'>
				<div className='flex min-h-full items-center justify-center p-4'>
					<Dialog.Panel
						className={'mx-auto max-w-3xl rounded bg-white p-10'}
					>
						{loading ? (
							<div className='h-8 w-8 rounded-full border-2 border-dotted border-blue-600 animate-spin' />
						) : (
							<div className='grid md:grid-cols-2 gap-x-8 h-96'>
								{product?.image && (
									<div className='relative w-72 h-full hidden md:inline'>
										{/* <CustomImage product={product} fill /> */}
										<Image src={product.image} width={300} height={300} />
									</div>
								)}
								<div className='flex-1 flex flex-col space-y-3'>
									<div className='flex-1'>
										<h1 className=' text-xl font-semibold'>
											{product?.title}
										</h1> <br />
										<p className='text-[#7A7687] text-sm'>
											<span>Категория:</span>
											<span>{product?.category}</span>
										</p>
										<h2 className='font-medium text-[#202020] text-lg'>Цена по запросу</h2>
										<br />
										<hr />
										<p className='font-medium text-base'>
											{/* ${product?.price} */}
										</p><br />
										<p className='line-clamp-5 text-sm'>
											{product?.description}
										</p>
									</div>

									<div className='space-y-3 text-sm'>
										<ButtonSecondary title="Больше информации о товаре" onClick={() => window.location.reload()} />
										<button
											
											className='button w-full bg-transparent border-blue-600 hover:bg-blue-600 hover:text-white hover:border-transparent'
										>
										</button>
									</div>
								</div>
							</div>
						)}
					</Dialog.Panel>
				</div>
			</div>
		</Dialog>
		</Layout>
	);
};

export default ProductDetailedPage;