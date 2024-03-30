"use client"
import Image from "next/image";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import sliderData from "../../../public/slider.json";
const dataSlider = sliderData;

import "./slidercustom.css"
import { useEffect, useRef, useState } from "react";


const CollectionSport = () => {
const sliderRef = useRef<HTMLDivElement | any>(null);

useEffect(() => {
let selectDiv: number | any = sliderRef.current;
  selectDiv.style.scrollBehavior = "smooth";
})
  
const nextBTN = () => {
let selectDiv: number | any = sliderRef.current;
selectDiv.scrollLeft += selectDiv.offsetWidth;
selectDiv.style.scrollBehavior = "smooth";

}


const prevBTN = () => {
    let selectDiv: number | any = sliderRef.current;
    selectDiv.scrollLeft -= selectDiv.offsetWidth
    selectDiv.style.scrollBehavior = "smooth";
}




    return (
        <div className="xl:mx-[100px] lg:mx-[50px] md:mx-[25px] mx-[10px] my-[100px] text-[--seconder-color] bg-gradient-to-t from-[--bgTwo-color] to-[--medium-green-color]">
        <h2 className="font-bold py-2 text-center my-2 text-[30px]">Collection Spotlight</h2>
        <p className="text-center">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>

<div className="relative xl:mx-auto lg:mx-auto md:mx-auto mx-auto w-max h-max">


<div ref={sliderRef} className="xl:w-[1050px] lg:w-[700px] md:w-[700px] w-[280px] sliderCustom overflow-x-auto h-max">

<div className="flex gap-4 xl:w-max lg:w-max md:w-max w-max h-max p-2">


 {
    dataSlider?.map((sliderImg, index) => {

  return(<div key={index} className="bg-[--bg-box-color] py-3 shadow-md xl:w-max lg:w-max md:w-max w-[280px]">                             
                  
     <Image className="w-full px-3 xl:h-[550px] lg:h-[550px] md:h-[350px] h-[300px] my-2" src={sliderImg?.image} width={200} height={400} alt="image" />
   <div className="border-b-[2px]  relative border-[#ababab] border-dashed border-spacing-2 p-2 rounded-r-md"> 
   
   <div className="w-[20px]  absolute left-[-10px] h-[20px] rounded-r-full  bg-[--bg-box-spot] border-r-[1px] border-r-[--box-border-color]"></div>
     <div className="w-[20px] absolute right-[-10px] h-[20px] rounded-l-full bg-[--bg-box-spot] border-l-[1px] border-l-[--box-border-color]"></div>
   
    </div>


                  <div className="px-4">
                  <h2 className="font-bold text-center my-3">{sliderImg?.name}</h2>
                  <div className="flex gap-2 justify-center"> 
                <div className="flex gap-1 items-center h-[0px] my-3 text-[15px]">
                  <h2 className="font-medium  border-[#ddd] h-min">{sliderImg?.date}</h2>
                  <span className="w-[2px] h-[10px] bg-[--box-hr-color]"></span>
                  <h2 className="font-medium  border-[#ddd]">{sliderImg?.day}</h2> 
                  <span className="w-[2px] h-[10px] bg-[--box-hr-color]"></span>
                  <h2 className="font-medium">{sliderImg?.time}</h2>
                </div>
                  </div>

                  <p>{sliderImg?.address}</p>

                  <button className="bg-black transition-all hover:bg-[#474747] mx-auto block my-2 rounded-sm px-3 py-2 font-normal text-white">{sliderImg?.btnText}</button>
                  </div>

                </div>)
                })
            }




</div>










</div>


<button onClick={prevBTN}>
<div className="border-[1px] z-50 border-blue-300 absolute xl:left-[-60px] lg:left-[-60px] md:left-[-60px] left-[0] top-[45%] w-max h-max px-2 py-3 cursor-pointer hover:bg-[#cbcbcb] hover:border-transparent rounded-sm text-[--btn-color] transition-all">
<GrFormPrevious className="text-[25px]"></GrFormPrevious>
</div>
</button>

<button onClick={nextBTN}>
<div className="border-[1px] z-50 border-blue-300 absolute xl:right-[-60px] lg:right-[-60px] md:right-[-60px] right-[0] top-[45%] w-max h-max px-2 py-3 cursor-pointer hover:bg-[#cbcbcb] hover:border-transparent  rounded-sm text-[--btn-color] transition-all">
<MdNavigateNext className="text-[25px]"></MdNavigateNext>
</div>
</button>
</div>


        </div>
    );
};

export default CollectionSport;