"use client";
import React from "react";
import Search from "@/app/components/Search/Search";
function TopSection() {
  return (
    <>
      <div
        className="absolute brightness-75 top-0 left-0 w-full web:h-full bg-custom-image bg-cover bg-center z-[-5]
                tablet:h-[554px]
                phone:h-[245px]
                h-[222px]
                "
      ></div>

      <section
        className="flex flex-col items-center w-full justify-center 
                web:h-[535px]  
                tablet:py-[150px] tablet:h-[554px] 
                phone:relative phone:h-[245px] 
                relative h-[222px]
                "
      >
        <h1
          className="text-2xl font-bold text-center text-white font-['Inter Tight']
                    web:text-[64px] web:mb-[45px]
                    tablet:text-5xl tablet:mb-[50px]
                    phone:text-2xl phone:mb-[10px]
                    text-2xl mb-[15px]
                    "
        >
          Jauntster
        </h1>
        <p
          className="text-base font-medium text-center text-white
                    web:text-[32px] web:mb-[65px]
                    tablet:text-2xl tablet:mb-[70px]
                    phone:text-base phone:mb-[40px]
                    text-base mb-[40px]
                    "
        >
          Discover like a local
        </p>
        <div
          className="
                    web:mb-[70px] web:static web:phone:absolute-none 
                    tablet:static tablet:mb-[0px]
                    phone:absolute phone:bottom-[-20px]
                    absolute bottom-[-25px]"
        >
          <Search variant="default" />
        </div>
      </section>
    </>
  );
}

export default TopSection;
