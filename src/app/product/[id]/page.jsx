import { ButtonPrimary, ButtonSecondary } from "@/components/buttons/Buttons";
import Layout from "@/layout/Layout";
import Image from "next/image";
import { notFound } from "next/navigation";

const ProductDetailedPage = async ({ params: { id } }) => {
  try {
    const res = await fetch(`http://localhost:4000/products/${id}`);
    const product = await res.json();

    return (
      <>
        <Layout>
          <div className="container  mx-auto flex flex-col md:flex-row items-center gap-8 px-4 py-10">
            <div className="grid md:grid-cols-2 gap-5 ">
              <div className="p-3 bg-white flex justify-center items-center relative h-full">
                <Image src={product.image} width={300} height={300} alt={product.title} />
              </div>
              <div className="p-3 flex-1 flex flex-col space-y-3">
                <div className="flex-1">
                  <h1 className=" text-xl font-semibold">{product.title}</h1>{" "}
                  <br />
                  <p className="text-[#7A7687] text-sm">
                    <span>Категория:</span>
                    <span>{product.category}</span>
                  </p>
                  <h2 className="font-medium text-[#202020] text-lg">
                    {product?.price}
                  </h2>
                  <div className="p-3 space-x-4">
                    <ButtonSecondary title="Задать вопрос" />
                    <ButtonPrimary title="Добавить в корзину" />
                  </div>
                  <hr />
                  <p className="font-medium text-base"></p>
                  <br />
                  <p className="line-clamp-5 text-sm">{product.description}</p>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
  } catch (error) {
    notFound();
  }
};

export default ProductDetailedPage;
