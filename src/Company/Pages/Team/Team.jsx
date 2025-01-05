import React, { useState } from 'react'

import { FaRegUserCircle } from 'react-icons/fa'
import { RiEdit2Fill } from 'react-icons/ri'
import AddArtist from './AddArtist';
import AddPreviewer from './AddPreviewer';
import TeamCard from './TeamCard';
import EditePoth from './EditePoth';

export default function Team() {
    const [ActiveTab, setActiveTab] = useState("");
   
    
  
  return <>
  <section className='container-main flex flex-col py-8 '>
    <div className='  flex flex-col items-center  mb-4'>
    <div className='bg-primary p-4 rounded-full w-fit'>
    <FaRegUserCircle className='text-4xl text-white' />
    </div>
    </div>
    {/* add artist */}
     <div className={ActiveTab === "artist" ? "flex items-center justify-between w-full  bg-gradient-to-l text-white from-black to-[#C29062]  p-6  border-b-2 border-b-[#8B94C6]  cursor-pointer" :"flex items-center justify-between w-full  p-6  border-b-2 border-b-[#8B94C6]  cursor-pointer bg-[#D1E8E24D]  "} onClick={()=>setActiveTab("artist") }>
        <p className='text-2xl font-bold'>اضف رسام </p>
        <p className='text-2xl font-bold '><RiEdit2Fill />
        </p>
     </div>

     {ActiveTab === "artist" && (<AddArtist/>)}

    {/* add Previewer */}

    <div className={ActiveTab === "previewer" ? "flex items-center justify-between w-full  bg-gradient-to-l text-white from-black to-[#C29062]  p-6  border-b-2 border-b-[#8B94C6] cursor-pointer" :"flex items-center justify-between w-full bg-[#D1E8E24D] p-6  border-b-2 border-b-[#8B94C6] cursor-pointer"} onClick={()=>setActiveTab("previewer")}>
        <p className='text-2xl font-bold'>اضف مدقق </p>
        <p className='text-2xl font-bold '><RiEdit2Fill />
        </p>
     </div>
     {ActiveTab === "previewer" && (<AddPreviewer/>)}



     {/* team */}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4'>
    <TeamCard/>
  
    </div>


   
  </section>
  
  </>
}
