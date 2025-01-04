import paymentImage from "../../assets/client/payment.svg";
import { PaymentDetailsForm } from "../components/forms/PaymentDetails";

const Payment = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <img
        src={paymentImage}
        alt="Payment Illustration"
        className="w-[50%] h-auto"
      />

      <PaymentDetailsForm />
    </div>
  );
};

export default Payment;
