import Image from "next/image"

// Images 
import Choose1 from "@/images/choose/choose1.png"
import Choose2 from "@/images/choose/choose2.png"
import Choose3 from "@/images/choose/choose3.png"
import Choose4 from "@/images/choose/choose4.png"

const Choose = () => {
  return (
    <div className="container mx-auto py-10 px-3 space-y-5">
        <h1 className="text-3xl text-[#202020]">Почему выбирают нас?</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="py-10 flex flex-col justify-center items-center space-y-5 border border-[#E5E2EE] rounded-xl">
                  <Image className="object-contain" src={Choose1}  alt="" />
                  <p className="text-base text-[#202020]">Быстрая  доставка</p>
            </div>
            <div  className="py-10 flex flex-col justify-center items-center space-y-5 border border-[#E5E2EE] rounded-xl">
                  <Image className="object-contain" src={Choose2}  alt="" />
                  <p className="text-base text-[#202020]">Быстрая  доставка</p>
            </div>
            <div  className="py-10 flex flex-col justify-center items-center space-y-5 border border-[#E5E2EE] rounded-xl">
                  <Image className="object-contain" src={Choose3}  alt="" />
                  <p className="text-base text-[#202020]">Быстрая  доставка</p>
            </div>
            <div   className="py-10 flex flex-col justify-center items-center space-y-5 border border-[#E5E2EE] rounded-xl">
                  <Image className="object-contain" src={Choose4}  alt="" />
                  <p className="text-base text-[#202020]">Быстрая  доставка</p>
            </div>
        </div>
    </div>
  )
}

export default Choose