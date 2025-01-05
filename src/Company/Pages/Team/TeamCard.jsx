import React, { useState } from 'react'
import EditePoth from './EditePoth'

export default function TeamCard() {
    const [showEdite,setShowEdite]=useState(false)

    const handleShowEdite=()=>{
        setShowEdite(!showEdite)
    }
  return <>
  
<div className='relative rounded-xl shadow-2xl border border-gray-300 p-6 space-y-4 mt-6 '>
<div className='flex items-center gap-4 '>
    <div>
        <img src='/v987-09.jpg' alt='' className='w-24 h-24 rounded object-cover' />
    </div>
    <div>
        <h2>اسم الموظف</h2>
        <p>الوصف</p>
    </div>
</div>

<button className='bg-primary text-white py-2 px-4 rounded w-full' onClick={handleShowEdite}>تعديل </button>
<div className='flex justify-between gap-4 max-[345px]:flex-col'>
<button className='w-1/2 max-[345px]:w-full bg-primary text-white py-2 px-4 rounded '>حذف</button>
<button className= 'w-1/2 max-[345px]:w-full text-nowrap  bg-primary text-white py-2 px-4 rounded'>ارسال البيانات </button>
<div className='absolute top-4 left-4 bg-primary text-white py-2 px-6 rounded-full flex items-center justify-center'><span>مدقق</span></div>
</div>

{showEdite && (<EditePoth/>)}
</div>
 
  
  </>
}
