import React from 'react'
import { BiSolidFilePdf } from 'react-icons/bi'

export default function PreviwerReport() {
  return (
    <div className='mt-4 space-y-4'>
      <h2 className='text-xl font-bold'>تقرير المعاين</h2>
      <div className='border border-gray-300 shadow-xl py-4 px-20 rounded-lg space-y-3'>
      <div className='space-y-1'>
      <p>كود العقار</p>
      <p className='text-primary'>000000</p>
      </div>
      <div className='space-y-1'>
      <p>تاريخ التقييم</p>
      <p className='text-primary'>22/6/2023</p>
      </div>
      <div className='space-y-1'>
      <p>وصف عام للعقار</p>
      <p className='text-primary'>بيانات عن العقار يمكن استبدالها</p>
      </div>

      <div className='space-y-1'>
      <p>وصف موقع العقار</p>
      <p className='text-primary'>بيانات عن العقار يمكن استبدالها</p>
      </div>

      <div className='space-y-1'>
      <p>رقم الصك</p>
      <p className='text-primary'>2398</p>
      </div>

      <div className='space-y-1'>
      <p>تاريخة</p>
      <p className='text-primary'>22/6/2023</p>
      </div>

      <div className='space-y-1'>
      <p>نوع العقار</p>
      <p className='text-primary'>مبني سكني</p>
      </div>


<div className='space-y-1'>
    <p>البنية التحتية</p>
    <div className='flex gap-4'>
    <div className='flex gap-2 text-primary'>
        <input type='checkbox' name='yes' id='yes' />
        <label htmlFor='yes'>نعم</label>
    </div>
    <div  className='flex gap-2  text-primary'>
        <input type='checkbox' name='no' id='no' className='' />
        <label htmlFor='no'>لا</label>
    </div>
    </div>
</div>

<div>
    <p>الخدمات</p>

    <div className='flex gap-4'>
    <div className='flex gap-2 text-primary'>
        <input type='checkbox' name='water' id='water' />
        <label htmlFor='water'>المياه</label>
    </div>
    <div  className='flex gap-2  text-primary'>
        <input type='checkbox' name='phone' id='phone' className='' />
        <label htmlFor='phone'>الهاتف</label>
    </div>

    <div  className='flex gap-2  text-primary'>
        <input type='checkbox' name='electric' id='electric' className='' />
        <label htmlFor='electric'>الكهرباء</label>
    </div>

    <div  className='flex gap-2  text-primary'>
        <input type='checkbox' name='exchange' id='exchange' className='' />
        <label htmlFor='exchange'>الصرف</label>
    </div>
    </div>
</div>


<div className='space-y-1'>
      <p>عمر العقار</p>
      <p className='text-primary'>خمسة سنوات</p>
      </div>


      <div className='space-y-1'>
      <p>جاهز للأستخدام</p>
      <div className='flex gap-4'>
    <div className='flex gap-2 text-primary'>
        <input type='checkbox' name='yes' id='yes' />
        <label htmlFor='yes'>جاهز</label>
    </div>
    <div  className='flex gap-2  text-primary'>
        <input type='checkbox' name='no' id='no' className='' />
        <label htmlFor='no'>تحت الانشاء</label>
    </div>

    <div  className='flex gap-2  text-primary'>
        <input type='checkbox' name='no' id='no' className='' />
        <label htmlFor='no'>فضاء</label>
    </div>
    </div>
      </div>

      <div className='space-y-1'>
      <p>رقم</p>
      <p className='text-primary'>01156622949</p>
      </div>

      <div className='space-y-1'>
      <p>رقم القطعه</p>
      <p className='text-primary'>6224949</p>
      </div>

      <div className='space-y-1'>
      <p>المصدر</p>
      <p className='text-primary'>نص يمكن استبداله</p>
      </div>

      <div className='space-y-1'>
      <p>نوع القيد</p>
      <p className='text-primary'>نص يمكن استبداله</p>
      </div>

      <div className='space-y-1'>
      <p>المساحة</p>
      <p className='text-primary'>1500</p>
      </div>


      <div className='space-y-1'>
      <p>حدود العقار</p>
      <div className="flex justify-between w-1/2">
        {/*  */}
       <div>

       <div className='space-y-1'>
      <p>شمال</p>
      <p className='text-primary'>162</p>
      </div>

      <div className='space-y-1'>
      <p>جنوب</p>
      <p className='text-primary'>162</p>
      </div>


       </div>
   {/*  */}
       <div>
       <div className='space-y-1'>
      <p>بطول</p>
      <p className='text-primary'>262</p>
      </div>

      <div className='space-y-1'>
      <p>بطول</p>
      <p className='text-primary'>262</p>
      </div>
       </div>

      </div>
      </div>

      {/*  */}

      <div className='space-y-1'>
      <p>ملاحظات المعاين العامة</p>
      <p className='text-primary'>نص يمكن استبداله</p>
      </div>

      <div className='space-y-2'>
      <p>صور عن العقار</p>
     <div className='flex gap-4'>
        <div className='w-20 h-20 rounded overflow-hidden'>
            <img src='/v987-09.jpg' alt='' className=''/>
        </div>
        <div className='w-20 h-20 rounded overflow-hidden'>
            <img src='/v987-09.jpg' alt='' className=''/>
        </div>
     </div>
      </div>
      

      <div className='space-y-1'>
      <p className='mb-4'>الملف</p>
      <div className="">
      <a
        href="/my-cv.pdf" 
        download 
        className="bg-[#E2E8E6]  text-[#C29062] font-bold py-4 px-4 rounded"
      >
      
      تحميل الملف
      <BiSolidFilePdf className='inline-block text-red-500 text-4xl' />
      </a>
    </div>
      </div>

      </div>

    </div>
  )
}
