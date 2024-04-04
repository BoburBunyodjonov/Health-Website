import Image from "next/image"

// Images
import EmailImg from "@/images/Email.png"
import { ButtonPrimary } from "../buttons/Buttons"

const Apply = () => {
  return (
    <div className="bg-[#E5E4ED] w-full">
        <div className="container mx-auto grid md:grid-cols-2 items-center justify-center ">
            <Image src={EmailImg} alt="Email Img" />
            <div className="p-5 space-y-5">
                <h1 className="text-[#202020] font-medium text-3xl">Подпишитесь и будьте в курсе!</h1><br />
                <span className="text-[#7A7687] font-medium text-base">Акции, скидки, распродажи ждут!</span>
                <form action="" className="space-y-5">
                    <div className="w-[80%] border border-[#D5D1E1] bg-[#F8F7F3] rounded-[50px] flex justify-between"> 
                        <input placeholder="Введите email" className="outline-none bg-inherit rounded-[50px] px-[20px] py-[11px]" type="text" name="" id="" />
                        <ButtonPrimary title="Подписаться" />
                    </div>
                    <div className="space-x-2 flex items-center">
                        <input className="border border-[#D5D1E1]" type="checkbox" name="" id="" />
                        <label htmlFor="" className="text-xs">Я даю согласие на обработку своих персональных данных.</label>
                    </div>
                </form>
            </div>
          
        </div>

    </div>
  )
}

export default Apply