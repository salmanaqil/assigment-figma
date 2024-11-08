import React from 'react';
import Header from "@/component/Header";
import Image from "next/image";

 function home(){
  return (
    <div className="h-screen  space-y-19 text-[70px]  text-white   ">
      <Header />
      <div className="flex h-[80%]  ">


        <div className="w-1/2 flex flex-col justify-center items-start pl-[150px] text-black  " >
        <h1 className="max-w-[496px] font-libre-bodoni font-bold text-[40px] "> IMPECCABLE CRAFTSMANSHIP AND FINESSE

        </h1>
        <p className="max-w-[902px] font-libre-bodoni text-[32px] text-[#787054]"> An example of intricate workmanship and detail,elegant necklaces and long and short chains form a part of our desirable collection.
        
        </p>
        <button className="bg-[#A29875] w-[288px] font-libre-bodoni font-medium text-[30px] h-[58px] flex items-center justify-center text-white rounded-[10px] "> Explore Now
        </button>

        </div>
        <div className="flex justify-center items-center w-1/2">
        <Image src="/images/slider1.png"
         alt="Image" 
         width={360}
         height={300}
          />

     </div>
      </div>
     </div>
  );
}
export default home;