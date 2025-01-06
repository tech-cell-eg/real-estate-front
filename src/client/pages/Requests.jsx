import RequestCard from "../components/cards/RequestCard";
const Requests = () => {
  return (
    <div className="flex bg-gray-100 space-x-4">
      <RequestCard
        image="https://newstart-eg.com/static/images/placeholder.jpg"
        title="عقار في شارع السند"
        location="الرياض"
        description="تتكون من غرف ومجلس فاخرة ذات ذوق رفيع ومطبخ وغرف شرفات مطلة على الشارع بمساحة 318م"
      />
      <RequestCard
        image="https://newstart-eg.com/static/images/placeholder.jpg"
        title="عقار آخر في الرياض"
        location="الرياض"
        description="تتكون من صالة ومجلس وثلاث غرف نوم ومطبخ وثلاث دورات مياه وتراس  مطل على الشارع  بمساحة 138م"
      />
    </div>
  );
};

export default Requests;
