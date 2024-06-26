import Image from "next/image";
import { useEffect, useState } from "react";
import { BiBarChartAlt } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { New } from "./Section";
import { ButtonQuaternary } from "../buttons/Buttons";
import Link from "next/link";

// Redux
import {useDispatch} from "react-redux";
import { add } from "@/reducers/CartSlice";

const ProductCard = ({ index, items }) => {
  const [showButton, setShowButton] = useState(true);
  const dispatch = useDispatch();

  const handleAddToCart = (items) => {
    dispatch(add(items));
    setShowButton(false);
  };

  return (
    <div className="card p-1">
      <div className="border w-full rounded-lg border-[#E5E2EE]">
        <Link href={`/product/${items.id}`}>
          <div className="card_img h-[60%] rounded-tr-lg rounded-tl-lg p-3 flex flex-col justify-center items-center border-b bg-white border-[#E5E2EE]">
            <div className="w-full py-3 flex justify-between items-center">
              <New />
              <div className="flex space-x-1">
                <BiBarChartAlt className="text-2xl" />
                <MdFavoriteBorder className="text-2xl" />
              </div>
            </div>
            <Image
              className=" w-[200px] h-[250px] hover:scale-110 duration-200 object-contain"
              src={items.image}
              width={200}
              height={200}
              alt="productImg"
            />
          </div>
        </Link>
        <div className="card_title p-3 space-y-1">
          <h1 className="text-xl font-semibold text-[#202020]">
            {items.title}
          </h1>
          <p className="font-normal text-base text-[#7A7687]">
            Артикул: 213134
          </p>
          <p className="font-normal text-base text-[#7A7687]">
            {items.inStock === true
              ? "В наличии"
              : "Нет в наличии на складе"}
          </p>
        </div>
        <div className="cart_footer p-3 space-y-2">
          <p className="text-xl font-semibold text-[#202020]">
            {items.price}
          </p>
          {showButton ? (
            <ButtonQuaternary
              width="w-full"
              onChandleAddToCartlick={()=> handleAddToCart(items)}
              title="Добавить в корзину"
            />
          ) : (
            <Link href="/cart">
              <button className="mt-2 w-full text-sm text-[#F8F7F3] focus:border-[#088269] border-2 duration-200 bg-[#088269] hover:bg-[#07745E] focus:border-2 border-[#088269] focus:bg-[#066753] focus:text-[#F8F7F3] rounded-[50px] px-[20px] py-[11px]">
                Добавлено в корзину
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
