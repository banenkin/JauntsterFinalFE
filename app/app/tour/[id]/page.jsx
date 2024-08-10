"use client";
import ArrowRedoOutline from "@/app/components/Svg/ArrowRedoOutline";
import ArrowUndoOutline from "@/app/components/Svg/ArrowUndoOutline";
import LocationSharp from "@/app/components/Svg/LocationSharp";
import Star from "@/app/components/Svg/Star";
import Walk from "@/app/components/Svg/walk";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import Btn from "../../components/Buttons/Btn";
import {axiosTour} from '../../../api/axios'
function TourDetails() {
  const {id}= useParams();
  // const searchParams = useSearchParams();

  useEffect(() => {
    const fetchTourDetails = async () => {
      try {
        const res = await axiosTour.get(`/${id}`)
        console.log(res);
        
        const data = await res.json()
        console.log(data);
        
      } catch (err) {
        console.log(err);
        
      }
    };
    fetchTourDetails()
  });

  return (
    <div className="flex flex-col items-center w-full">
      <div
        className="flex flex-col justify-center items-center
      web:w-[80%] web:mt-[30px]
      tablet:mt-[100px]
      phone:mt-[50px] phone:p-[20px]
      "
      >
        <div
          className="flex justify-start items-center w-full 
        web:gap-[30px]
        tablet:gap-[30px] tablet: mb-[30px]
        phone:gap-[20px]
        "
        >
          <h1
            className="text-[#081120] font-['Inter'] font-medium 
          web:text-[39px] web:leading-[58.50px]
          tablet:text-[32px] tablet:leading-[48px]
          phone:text-[25px]
          "
          >
            Sofia Theaters
          </h1>
          <div className="flex gap-[10px]">
            <Star />
            <span className="text-[#13294b] text-base font-normal font-['Inter'] leading-none border-2 border-[#FAFAFA] border-b-[#e8b600]">
              4.8
            </span>
          </div>
        </div>

        <div
          className="grid 
        web:grid-cols-4 web:grid-rows-2 web:gap-4 web:w-full web:h-full web:max-h-[520px] web:items-center web:justify-center
        tablet:grid-cols-2 tablet:gap-4 tablet:w-full tablet:h-full tablet:items-center tablet:justify-center 
        "
        >
          <img
            className="web:w-full web:h-full web:max-h-[500px] web:col-span-2 web:row-span-2 web:object-cover web:rounded-tl-[15px] web:rounded-bl-[15px] web:tablet:rounded-tr-[0px] web:rounded-none
            tablet:col-span-2 tablet:w-full tablet:h-[260px] tablet:rounded-tl-[15px] tablet:rounded-tr-[15px] tablet:rounded-none
            phone:rounded-[5px]
            
            "
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Main Image"
          />
          <img
            className="object-cover web:w-full web:h-full tablet:h-[180px]"
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 1"
          />
          <img
            className="object-cover web:w-full web:h-full web:rounded-tr-[15px] tablet:h-[180px]"
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 2"
          />
          <img
            className="object-cover web:w-full web:h-full web:rounded-bl-[0px] tablet:h-[180px] tablet:rounded-bl-[15px]"
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 3"
          />
          <img
            className="object-cover web:w-full web:h-full  web: tablet:h-[180px] tablet:rounded-br-[15px]"
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 3"
          />
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------------------------------------------ */}

      <div
        className="flex border-b-2  border-[#d1d0d8] 
        web:h-[250px] web:w-[80%] web:justify-around web:items-center
        tablet:flex-row-reverse tablet:h-[250px] tablet:w-[95%] tablet:justify-center tablet:gap-[20px] tablet:items-center
        phone:flex-col-reverse phone:items-start phone:justify-center phone:gap-[30px] phone:w-[95%] phone:py-[40px]
        "
      >
        <div className="flex items-center">
          <Walk className="web:h-[60px] web:w-[60px] tablet:h-[40px] tablet:w-[40px]  phone:h-[32px] phone:w-[32px]" />
          <div>
            <h2
              className="text-[#081120] font-medium font-['Inter'] 
            web:text-xl 
            tablet:text-lg
            phone:text-base
            "
            >
              This is a 2.5km walking tour
            </h2>
            <p
              className="text-[#13294b] font-normal font-['Inter']
            web:text-base
            tablet:text-sm
            phone:text-sm
            "
            >
              To complete it you will need average of 90min.
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <LocationSharp className="web:h-[60px] web:w-[60px] tablet:h-[40px] tablet:w-[40px]  phone:h-[32px] phone:w-[32px]" />
          <div>
            <h2
              className="text-[#081120] font-medium font-['Inter'] 
            web:text-xl 
            tablet:text-lg
            phone:text-base

            "
            >
              This tour is located in Sofia
            </h2>
            <p
              className="text-[#13294b]font-normal font-['Inter']
            web:text-base
            tablet:text-sm
            phone:text-sm
            "
            >
              Sofia is the capital of Bulgaria
            </p>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------------------------------------------ */}

      <div
        className="flex justify-between flex-start border-b-2 border-[#d1d0d8]
      web:w-[80%] web:mt-[100px] web:pb-[100px] web:flex-row web:items-start web:pt-[0px]
      tablet:flex-col-reverse tablet:w-[95%] tablet:pt-[70px] tablet:pb-[70px] tablet:gap-[100px] tablet:items-center
      phone:flex-col-reverse phone:w-[95%] phone:pt-[20px] phone:pb-[20px] phone:gap-[50px] phone:items-center
      "
      >
        <div
          className="flex flex-col h-full flex-wrap w-full
        web:gap-[50px] web:max-w-[733px]
        tablet:max-w-[584px]
        phone:max-w-[95%]
        "
        >
          <div className="tablet:mb-[40px] phone:mb-[40px] h-full">
            <h3
              className="text-[#081120] font-medium font-['Inter'] leading-9  
            web:mb-[20px] web:text-2xl
            tablet:mb-[20px] tablet:text-2xl
            phone:mb-[20px] phone:text-base
            "
            >
              About the tour
            </h3>
            <p
              className="text-[#13294b] font-normal font-['Inter'] leading-normal w-full
            web:max-w-[733px] web:text-base 
            tablet:max-w-[584px] tablet:text-base 
            phone:max-w-full phone:text-sm
            "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              atque tenetur quos in esse ipsam eos officiis, asperiores facilis
              ad alias sint quod mollitia doloribus ipsa facere quas sunt
              consequatur.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quidem atque tenetur quos in esse ipsam eos officiis,
              asperiores facilis ad alias sint quod mollitia doloribus ipsa
              facere quas sunt consequatur.Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quidem atque tenetur quos in esse
              ipsam eos officiis, asperiores facilis ad alias sint quod mollitia
              doloribus ipsa facere quas sunt consequatur.
            </p>
          </div>

          <div
            className="
          tablet:h-full tablet:mb-[20px] 
          phone:h-full phone:mb-[20px]"
          >
            <h3
              className="text-[#081120] text-2xl font-medium font-['Inter'] leading-9 
            web:mb-[20px] web:text-2xl
            tablet:mb-[20px] tablet:text-2xl
            phone:mb-[20px] phone:text-base
            "
            >
              Directions to starting point
            </h3>
            <p
              className=" text-[#13294b] text-base font-normal font-['Inter'] leading-normal 
            web:max-w-[733px] web:text-base 
            tablet:max-w-[584px] tablet:text-base 
            phone:max-w-full phone:text-sm
            "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              atque tenetur quos in esse ipsam eos officiis, asperiores facilis
              ad alias sint quod mollitia doloribus ipsa facere quas sunt
              consequatur.
            </p>
          </div>
        </div>

        <div className="hidden web:hidden phone:block tablet:block border-b-2 border-[#d1d0d8] w-full tablet:my-4 phone:my-[0px]"></div>

        <div
          className="flex flex-col h-full flex-wrap items-start justify-center w-full
        web:gap-[30px] web:max-w-[430px] web:mt-[0px]
        tablet:max-w-[584px] tablet:mt-[0px]
        phone:mt-[20px] phone:w-[95%]
        "
        >
          <div
            className="flex 
          web:items-start web:flex-col 
          tablet:flex-row tablet:gap-[20px] tablet:justify-center
          phone:flex-col phone:mb-[20px]
          "
          >
            <h2
              className="text-[#081120] font-medium font-['Inter']  
            web:text-[31px] web:mb-[20px]
            tablet:text-2xl tablet:mb-[20px]
            phone:text-xl phone:mb-[10px]
            "
            >
              Sofia Theaters Tour
            </h2>
            <div className="flex gap-[10px] tablet:mt-[5px] ">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
          </div>

          <div
            className="flex 
          web:flex-col 
          tablet:flex-col-reverse 
          phone:flex-col-reverse phone:items-start"
          >
            <p
              className="flex text-[#081120] font-medium font-['Inter'] 
            web:mb-[10px] web:flex-row web:text-2xl web:gap-[10px]
            tablet:text-xl target:flex-row-reverse tablet:mb-[20px] tablet:gap-[1px]
            phone:mb-[30px] phone:flex-row-reverse phone:text-lg phone:gap-[1px]
            "
            >
              <span>USD</span>
              <span>9.99</span>
            </p>
            <p
              className=" text-[#13294b] font-normal font-['Inter'] leading-normal w-full
            web:mb-[10px] web:max-w-[430px] web:text-base
            tablet:mb-[20px] tablet:max-w-[430px] tablet:text-base 
            phone:mb-[10px] phone:text-sm 
            "
            >
              Explore the beautiful buildings and green parks of Sofia’s biggest
              theaters. Take a walk trough a beautiful sightseeing in the
              historical center of the city.
            </p>
          </div>
          {/* <button
            className="rounded-[5px] px-4 py-3 bg-[#13294b]  text-center text-white text-base font-semibold font-['Inter'] 
            web:w-[430px] web:h-11
            "
          >
            Buy Tour
          </button> */}

          <div className="web:w-[430px] tablet:w-[282px] phone:w-[361px]">
            <Btn type="submit" variant="filled" text="Buy Tour" fullWidth />
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------------------------------------------ */}

      <div
        className="flex flex-col items-center h-full mb-[50px]
      web:mt-[100px] web:gap-[50px] 
      tablet:m-[50px]
      phone:m-[35px]
      
      "
      >
        <h1
          className="text-[#081120] font-medium font-['Inter'] leading-9
        web:text-2xl web:mb-[20px] 
        tablet:m-[20px] 
        phone:text-lg 
        
        "
        >
          How Jauntster works
        </h1>

        <div
          className="flex justify-center
        web:gap-[30px] web:flex-row web:mt-[0px] web:mb-[50px]
        tablet:flex-col tablet:gap-[100px] tablet:mt-[70px] tablet:mb-[70px]
        phone:flex-col phone:gap-[100px] phone:mt-[70px] phone:mb-[70px]
        "
        >
          <div
            className="flex items-center justify-evenly  bg-neutral-50 rounded-[5px] border border-[#d1d0d8] relative w-full h-full
          web:max-w-[733px] web:min-h-[278px] web:p-[33px]
          tablet:max-w-[583px] tablet:min-h-[278px] tablet:p-[20px]
          phone:max-w-[361px] phone:min-h-[278px] phone:p-[20px]
          "
          >
            <div
              className="absolute flex bg-[#E7EAED] border-[10px] border-[#FAFAFA] rounded-full items-center justify-center gap-[1px]
            top-[-50px] px-[15px] py-[30px]
            web:h-[110px] web:w-[110px] web:top-[-55px]
            tablet:h-[110px] tablet:w-[110px] tablet:top-[-55px]
            phone:h-[90px] phone:w-[90px] phone:top-[-45px]
            "
            >
              <ArrowUndoOutline />
              <ArrowRedoOutline />
            </div>

            <div
              className="flex flex-col 
            web:mt-[30px] web:items-start
            tablet:mt-[10px] tablet:items-center
            phone:items-center
            "
            >
              <h1
                className="text-[#081120]font-medium font-['Inter'] leading-[30px] font-medium
              web:mb-[20px] web:text-xl web:mt-[5px]
              tablet:text-lg tablet:mb-[20px] tablet:mt-[40px]
              phone:text-sm phone:mt-[30px] phone:mb-[10px]
              "
              >
                How to get the most of the tour and its story
              </h1>
              <p
                className="flex text-[#13294b] font-normal font-['Inter'] leading-normal w-full
              web:max-w-[667px] web:text-start web:text-base
              tablet:max-w-[535px] tablet:text-center tablet:text-base
              phone:text-sm phone:max-w-[300px]  phone:text-center phone:items-center
              "
              >
                You can start the tour from a fixed starting point. The route
                then continuous in direction, chosen from the publisher. It
                helps you to better understand the story behind the landmarks.
                If you like you can use Resume to pick up a tour from the
                closest location whenever you like.
              </p>
            </div>
          </div>

          <div
            className="flex items-center justify-evenly  bg-neutral-50 rounded-[5px] border border-[#d1d0d8] relative w-full h-full
          web:max-w-[733px] web:min-h-[278px] web:p-[33px]
          tablet:max-w-[583px] tablet:min-h-[278px] tablet:p-[20px]
          phone:max-w-[361px] phone:min-h-[278px] phone:p-[20px]
          "
          >
            <div
              className="absolute flex bg-[#E7EAED] border-[10px] border-[#FAFAFA] rounded-full items-center justify-center gap-[1px]
            top-[-50px] px-[15px] py-[30px]
            web:h-[110px] web:w-[110px] web:top-[-55px]
            tablet:h-[110px] tablet:w-[110px] tablet:top-[-55px]
            phone:h-[90px] phone:w-[90px] phone:top-[-45px]
            "
            >
              <ArrowUndoOutline />
              <ArrowRedoOutline />
            </div>

            <div
              className="flex flex-col 
            web:mt-[30px] web:items-start
            tablet:mt-[10px] tablet:items-center
            phone:items-center
            "
            >
              <h1
                className="text-[#081120]font-medium font-['Inter'] leading-[30px] font-medium
              web:mb-[20px] web:text-xl web:mt-[5px]
              tablet:text-lg tablet:mb-[20px] tablet:mt-[40px]
              phone:text-sm phone:mt-[30px] phone:mb-[10px]
              "
              >
                How to get the most of the tour and its story
              </h1>
              <p
                className="flex text-[#13294b] font-normal font-['Inter'] leading-normal w-full
              web:max-w-[667px] web:text-start web:text-base
              tablet:max-w-[535px] tablet:text-center tablet:text-base
              phone:text-sm phone:max-w-[300px]  phone:text-center phone:items-center
              "
              >
                You can start the tour from a fixed starting point. The route
                then continuous in direction, chosen from the publisher. It
                helps you to better understand the story behind the landmarks.
                If you like you can use Resume to pick up a tour from the
                closest location whenever you like.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourDetails;
