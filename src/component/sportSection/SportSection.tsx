"use client"
import Image from "next/image";
import { useState } from "react";
import datas from "../../../public/data.json";
const data = datas;
import { MdOutlineWbSunny } from "react-icons/md";
const SportSection: React.FC = () => {
const [seeData, setSeeData] = useState<number>(4);
const[isMode, setMode] = useState<any>()

const darkMode = () => {

let show:any =  document.body;
const isTrues = show.classList.toggle("dark-mode")
setMode(isTrues)
}



    return (
        <div className="xl:mx-[100px] lg:mx-[50px] md:mx-[25px] mx-[10px] my-[100px] text-[--seconder-color] ">

        <div className="flex justify-between items-center">
        <h2 className="font-bold py-2">Sports</h2>
        <div>
        
            <button onClick={darkMode}>
                {
                    isMode ?  <MdOutlineWbSunny className="text-orange-500 text-[30px]"></MdOutlineWbSunny> : <MdOutlineWbSunny className="text-black text-[30px]"></MdOutlineWbSunny>
                }
           
            </button>
        </div>

        </div>

            <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">    {
                data?.slice(0, seeData).map((data, index) => {

                    return (<div key={index} className="bg-[--box-sport-color] p-3 rounded-sm h-max shadow-md cursor-pointer">
                        <Image className="w-full h-[400px]  object-cover" src={data?.image} alt="image" width={200} height={400} />
                        <h2 className="my-4 font-bold">{data?.name}</h2>

                        <div className="flex items-baseline gap-3 rounded-md bg-[--box-small-color] text-[--seconder-color] p-2">
                            <div className="w-full">
                                <h2 className="mb-1">Total Events</h2>
                                <p className="font-bold">{data?.event} Events</p>
                            </div>

                            <div className="w-full">
                                <h2 className="mb-1">Sport</h2>
                                <p className="font-bold">{data?.sportType}</p>

                            </div>
                        </div>




                    </div>)
                })
            }

                <div className="bg-[--box-sport-color] p-3 rounded-md shadow-md cursor-pointer">

                    <Image className="w-full h-[225px] object-fill" src="https://i.ibb.co/tJqMTQw/f71497e0e3af85c77fa47046bb1f23cb.jpg" alt="image" width={200} height={400} />

                    <div className="px-6 border-[1px] border-[--ad-color]">
                        <h2 className="font-bold my-4 text-[18px]">Advertisement title</h2>
                        <p className="text-[--seconder-color] text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>

            </div>



            <button onClick={() => setSeeData(data?.length)} className={`font-bold bg-[#149AFC] hover:bg-[#1475fc] transition-all px-6 py-3 text-white text-center rounded-md block mx-auto my-10 ${seeData == data?.length ? "hidden" : "block"}`}>See More</button>



        </div>
    );
};

export default SportSection;
