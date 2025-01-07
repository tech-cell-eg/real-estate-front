import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="flex flex-col-reverse lg:flex-row h-screen overflow-y-auto">
      {/* Right Part */}
      <div className="w-full lg:w-3/5 bg-white p-8 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center w-full">
          <img
            src="./photos/register4.png"
            alt="User Icon"
            className="mb-6 w-16 h-16"
          />
          <h1 className="text-3xl font-bold text-[#C29062] mb-8">
            قم باختيار حالة حسابك!
          </h1>
          {/* Choice 1 */}
          <Link
            to="/customerRegister"
            className="w-[60%] mb-4 flex items-center justify-between  p-4 border rounded-3xl bg-[#D1E8E2] bg-opacity-30"
          >
            <div className="text-xl text-[#C29062] font-bold">عميل</div>
            <img
              src="./photos/register3.png"
              alt="Client"
              className="w-16 h-16 mr-4"
            />
          </Link>
          {/* Choice 2 */}
          <Link
            to="/evaluationCompanyRegister"
            className="w-[60%] mb-4 flex items-center justify-between p-4 border rounded-3xl bg-[#D1E8E2] bg-opacity-30"
          >
            <span className="text-xl text-[#C29062] font-bold">
              شركة التقييم
            </span>
            <img
              src="./photos/register2.png"
              alt="Evaluation Company"
              className="w-16 h-16 mr-4"
            />
          </Link>
          {/* Choice 3 */}
          <Link
            to="/inspectorRegister"
            className="w-[60%] flex items-center justify-between p-4 border rounded-3xl bg-[#D1E8E2] bg-opacity-30"
          >
            <span className="text-xl text-[#C29062] font-bold">معاين</span>
            <img
              src="./photos/register1.png"
              alt="Inspector"
              className="w-16 h-16 mr-4"
            />
          </Link>
        </div>
      </div>

      {/* Left Part */}
      <div className="w-full lg:w-2/5 bg-gradient-to-b from-[#D1E8E2] to-transparent p-8 relative flex flex-col justify-center">
        <button className="text-white w-32 bg-[#C29062] flex gap-2 items-center justify-center h-10 rounded-2xl absolute top-4 left-4 m-4">
          <Link to="/">
            <div>عودة</div>
          </Link>
          <div>
            <FaArrowLeft />
          </div>
        </button>
        <div className="mt-10 text-right ms-2 md:text-right">
          <h1 className="text-5xl font-bold mb-6 text-[#C29062]">
            مرحبا بعودتك
          </h1>
          <p className="text-2xl mb-8">
            لتبقي علي تواصل معنا من فضلك قم بالتسجيل الأن.
          </p>
          <Link to="/login">
            <button className="bg-[#C29062] text-white py-2 px-4 rounded-full flex gap-2 items-center mr-4">
              <div>
                <FaArrowRight />
              </div>
              <div> تسجيل دخول</div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
