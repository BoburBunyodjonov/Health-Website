"use client";

import { ButtonQuaternary } from "@/components/buttons/Buttons";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("cartData"));
    if (storedData) {
      setProducts(storedData);
    }
  }, []);

  console.log(products);
  // Function to remove item from the cart
  const handleRemoveItem = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
    localStorage.setItem("cartData", JSON.stringify(updatedProducts));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    products.forEach((product) => {
        totalPrice += parseFloat(product.price);
    });
    return totalPrice.toFixed(2); // Optionally, you can round the total price to two decimal places
};

    const cartDataLenght = JSON.parse(localStorage.getItem("cartData"));
    console.log(cartDataLenght);

  return (
    <>
      <div className="bg-gray-100  py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left font-semibold">Product</th>
                      <th className="text-left font-semibold">Price</th>
                      <th className="text-left font-semibold">Quantity</th>
                      <th className="text-left font-semibold">Remove</th>
                      <th className="text-left font-semibold">Total</th>
                    </tr>
                  </thead>
                  <tbody>
  {products.map((data, index) => (
    <tr key={index}>
      <td className="py-4">
        <div className="flex items-center">
          <Image src={data.image} alt="perfume bottle image" width={200} height={200} className="xl:w-[140px]" />
          <span className="font-semibold">{data.title}</span>
        </div>
      </td>
      <td className="py-4">{data.price}</td>
      <td className="py-4">
        <div className="flex items-center">
          <button className="border rounded-md py-2 px-4 mr-2">-</button>
          <span className="text-center w-8">1</span>
          <button className="border rounded-md py-2 px-4 ml-2">+</button>
        </div>
      </td>
      <td>
        <button className="text-red-600 mt-4 lg:mt-0" onClick={() => handleRemoveItem(index)}>
          <IoIosCloseCircleOutline />
          Remove
        </button>
      </td>
      <td className="py-4">{data.price}</td>
    </tr>
  ))}
</tbody>

                </table>
              </div>
            </div>
            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                {/* <h2 className="text-lg font-semibold mb-4">Summary</h2> */}
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Итого</span>
                  <span className="font-semibold">{calculateTotalPrice()} руб.</span>
                </div>
                <hr className="my-2" />

                <div className="flex justify-between mb-2">
                  <span>Товары </span>
                  <span>{calculateTotalPrice()} руб.</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Скидка</span>
                  <span>0 руб.</span>
                </div>
               
                <div className="space-y-2">
                    <button className="bg-[#088269] text-white py-2 px-4 rounded-lg mt-4 w-full">
                    Оформить заказ
                    </button>
                    <ButtonQuaternary width="w-full"  title="Задать вопрос" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
