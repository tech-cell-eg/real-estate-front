import React from 'react'
import { BiSolidFilePdf } from 'react-icons/bi'
import { IoMdCloudUpload } from 'react-icons/io'

export default function CompanyReport() {
  return (
    <div className='mt-4 rounded-lg border border-gray-300 shadow-2xl px-4 py-10'>
      <form className='space-y-2 w-1/2 m-auto'>
      <div className='space-y-2'>
            <label htmlFor=''>كود العقار</label>
            <input type='text' id='' className='inpute-main w-full' />
        </div>

        <div className='space-y-2'>
            <label htmlFor=''>تاريخ التقييم</label>
            <input type='text' id='' className='inpute-main w-full' />
        </div>

        <div className='space-y-2'>
            <label htmlFor=''>وصف عام للعقار</label>
            <input type='text' id='' className='inpute-main w-full' />
        </div>

        <div className='space-y-2'>
            <label htmlFor=''>وصف موقع العقار</label>
            <input type='text' id='' className='inpute-main w-full' />
        </div>

        <div className='space-y-2'>
            <label htmlFor=''>رقم الصك</label>
            <input type='text' id='' className='inpute-main w-full' />
        </div>


        <div className='space-y-2'>
            <label htmlFor=''>تاريخة</label>
            <input type='text' id='' className='inpute-main w-full' />
        </div>

        <div className='space-y-2'>
            <label htmlFor=''>نوع العقار</label>
            <input type='text' id='' className='inpute-main w-full' />
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

<div className='space-y-2'>
            <label htmlFor=''>عمر العقار</label>
            <input type='text' id='' className='inpute-main w-full' />
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

      <div className='space-y-2'>
            <label htmlFor=''>رقم</label>
            <input type='text' id='' className='inpute-main w-full' />
        </div>

        <div className='space-y-2'>
            <label htmlFor=''>رقم القطعة</label>
            <input type='text' id='' className='inpute-main w-full' />
        </div>

        <div className='space-y-2'>
            <label htmlFor=''>المصدر</label>
            <input type='text' id='' className='inpute-main w-full' />
        </div>


        <div className='space-y-2'>
            <label htmlFor=''>نوع القيد</label>
            <input type='text' id='' className='inpute-main w-full' />
        </div>

        <div className='space-y-2'>
            <label htmlFor=''>المسافة</label>
            <input type='text' id='' className='inpute-main w-full' />
        </div>



        <div className='space-y-2'>
            <p>حدود العقار</p>
            <div className='flex gap-4 justify-between'>
                {/*  */}
                <div>
                <div className='space-y-2'>
            <label htmlFor='' className='text-primary'>شمال</label>
            <input type='text' id='' className='inpute-main w-full' />
        </div>

        <div className='space-y-2'>
            <label htmlFor='' className='text-primary'>جنوب</label>
            <input type='text' id='' className='inpute-main w-full' />
        </div>

        <div className='space-y-2'>
            <label htmlFor='' className='text-primary'>شرق</label>
            <input type='text' id='' className='inpute-main w-full' />
        </div>
        <div className='space-y-2'>
            <label htmlFor='' className='text-primary'>غرب</label>
            <input type='text' id='' className='inpute-main w-full' />
        </div>
                </div>
                {/*  */}
                <div>
                <div className='space-y-2'>
            <label htmlFor='' className='text-primary'>بطول</label>
            <input type='text' id='' className='inpute-main w-full' />
        </div>
        <div className='space-y-2'>
            <label htmlFor='' className='text-primary'>بطول</label>
            <input type='text' id='' className='inpute-main w-full' />
        </div>
        <div className='space-y-2'>
            <label htmlFor='' className='text-primary'>بطول</label>
            <input type='text' id='' className='inpute-main w-full' />
        </div>
        <div className='space-y-2'>
            <label htmlFor='' className='text-primary'>بطول</label>
            <input type='text' id='' className='inpute-main w-full' />
        </div>

                </div>
            </div>
          
        </div>


        <div className='space-y-2'>
            <label htmlFor=''>داخل النطاق</label>
            <input type='text' id='' className='inpute-main w-full' />
        </div>

        
        <div className='space-y-2'>
            <label htmlFor=''>المنسوب</label>
            <input type='text' id='' className='inpute-main w-full' />
        </div>

        <div className='space-y-2'>
            <label htmlFor=''>حالة المبني</label>
            <input type='text' id='' className='inpute-main w-full' />
        </div>


        <div className='space-y-2'>
            <label htmlFor=''>وصف عام التشطيب</label>
            <input type='text' id='' className='inpute-main w-full' />
        </div>

        <div className='space-y-2'>
            <label htmlFor=''>عدد الأدوار</label>
            <input type='text' id='' className='inpute-main w-full' />
        </div>


        <div className='space-y-2'>
            <label htmlFor=''>تقييم الارض</label>
            <input type='text' id='' className='inpute-main w-full' />
        </div>

        <div className='space-y-2'>
            <label htmlFor=''>تقييم المبني</label>
            <input type='text' id='' className='inpute-main w-full' />
        </div>

<div className=' flex justify-between items-center gap-4'>
<div className='space-y-2 '>
            <label htmlFor=''>اجمالي تكاليف العقار</label>
            <input type='text' id='' className='inpute-main w-full' />
        </div>
        <div className='space-y-2 '>
            <label htmlFor=''>القيمة التسويقية</label>
            <input type='text' id='' className='inpute-main w-full' />
        </div>
       
</div>



        <div className='space-y-2'>
            <label htmlFor=''>مقارانات العقار</label>
            <input type='text' id='' className='inpute-main w-full' />
        </div>

        <div className='space-y-2'>
            <label htmlFor=''>الافصاح في حالة تعارض المصالح</label>
            <input type='text' id='' className='inpute-main w-full' />
        </div>

        <div className='space-y-2'>
            <label htmlFor=''>القياس</label>
            <input type='text' id='' className='inpute-main w-full' />
        </div>

        <div className='space-y-2'>
            <label htmlFor=''>المعاينة</label>
            <input type='text' id='' className='inpute-main w-full' />
        </div>

        <div className='space-y-2'>
            <label htmlFor=''>ملاحظات المعاين العامة</label>
            <input type='text' id='' className='inpute-main w-full' />
        </div>

       <div className='  mx-auto pt-6  flex flex-col gap-4'>
         <p>التقرير النهائي</p>
         <div className='py-4 px-6  flex flex-col items-center md:flex-row justify-evenly  rounded border border-gray-300'> 
          <div className=''>
          <p className='text-primary font-bold '>تحميل ملف</p>
          <IoMdCloudUpload className='inline-block ml-6 text-6xl text-primary' />
          </div>
        <div> <p className='mb-6'>اختار ملف للتحميل من جهازك</p>
         <input type="hidden" name="MAX_FILE_SIZE" value="1000000" />
        
         <label
           htmlFor="file"
           className="cursor-pointer  py-2 px-12 rounded-lg bg-[#D1E8E2] border-dashed border-2 border-gray-300"
         >
           اختار ملف
         </label>
         
       
         <input
           id="file"
           type="file"
           name="file"
           accept=".pdf,.docx,.xlsx"
           className="hidden"
         /></div>
         </div>
       
       </div>
  
       <button type="submit" className='bg-primary text-white py-2 px-4 rounded w-full'>ارسال التقييم</button>
     
      </form>

    </div>
  )
}
