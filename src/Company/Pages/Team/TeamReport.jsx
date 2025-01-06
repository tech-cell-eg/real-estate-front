
import React from 'react'

export default function TeamReport() {
  return (
    <div className='mt-4 space-y-4'>
    {/* المعاين  */}
        <div className='space-y-4'>
   <h2  className='text-2xl font-bold'>تقرير المعاين</h2>
   <div className='rounded-xl border border-gray-300 shadow-2xl flex gap-4 p-4'>
   <div>
    <img src='/inspector.png' alt="" className='w-20 h-20 rounded-xl'/>
   </div>

   <div className='flex flex-col justify-between'>
    <h2 className='text-xl font-bold'>اسم الموظف</h2>
    <div className='flex gap-4'>
        <button className='btn-main bg-gradient-to-l from-[black] to-primary w-fit px-10 rounded-xl'>تحميل</button>
        <button className='btn-main bg-gradient-to-l from-[black] to-primary w-fit px-10 rounded-xl'>عرض التقرير</button>

    </div>
   </div>
   </div>

        </div>

        {/* الرسام */}

        <div className='space-y-4'>
   <h2 className='text-2xl font-bold'>تقرير الرسام</h2>
   <div className='rounded-xl border border-gray-300 shadow-2xl flex gap-4 p-4'>
   <div>
    <img src='/inspector.png' alt="" className='w-20 h-20 rounded-xl'/>
   </div>

   <div className='flex flex-col justify-between'>
    <h2 className='text-xl font-bold'>اسم الموظف</h2>
    <div className='flex gap-4'>
        <button className='btn-main bg-gradient-to-l from-[black] to-primary w-fit px-10 rounded-xl'>تحميل</button>
        <button className='btn-main bg-gradient-to-l from-[black] to-primary w-fit px-10 rounded-xl'>عرض التقرير</button>

    </div>
   </div>
   </div>

        </div>
    </div>
  )
}
