import React from 'react'

export default function Details() {
  return <>
  <section className='container-main'>
<div className='flex items-center space-x-2'>
    <p><IoIosArrowBack className='text-2xl ' />الرئيسيه </p>
    <p><IoIosArrowBack className='text-2xl ' />عقارات</p>
    <p>تفاصيل</p>
</div>

<div className='grid grid-cols-12 rounded gap-2'>
<div className='col-span-8'>
    <img src='/v987-09.jpg' alt='' className='w-full'/>
</div>
<div className='col-span-2'>
    <img src='/v987-09.jpg' alt='' className='w-full'/>
</div>
<div className='col-span-2'>
    <img src='/v987-09.jpg' alt='' className='w-full'/>
</div>
</div>

  </section>
  
  </>
}
