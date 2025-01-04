import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Label, TextInput } from "flowbite-react";
import Confirmation from "../Confirmation";
import done from "../../../assets/client/done.svg";

export const PaymentDetailsForm = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Payment Submitted:", data);
    setShowConfirmation(true);
    register("");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        padding: "1.5rem",
        borderRadius: "0.375rem",
        border: "1px solid #e5e7eb",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
        color: "#000",
        marginTop: "1rem",
        width: "400px",
      }}
    >
      {/* Name on Card */}
      <div style={{ marginBottom: "1rem" }}>
        <Label
          htmlFor="name"
          value="Name on Card"
          style={{
            color: "black",
            fontWeight: "500",
            marginBottom: "0.25rem",
            display: "block",
          }}
        />
        <TextInput
          id="name"
          placeholder="Your card name"
          {...register("name", { required: "Name on Card is required" })}
          className={`mt-1 ${
            errors.name
              ? "border-red-600 focus:ring-red-500"
              : "border-gray-300 focus:ring-orange-500"
          }`}
          style={{ backgroundColor: "white", color: "black" }}
        />
        {errors.name && (
          <p
            style={{
              color: "#dc2626",
              fontSize: "0.875rem",
              marginTop: "0.25rem",
            }}
          >
            {errors.name.message}
          </p>
        )}
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <Label
          htmlFor="cardNumber"
          value="Card Number"
          style={{
            color: "black",
            fontWeight: "500",
            marginBottom: "0.25rem",
            display: "block",
          }}
        />
        <TextInput
          id="cardNumber"
          placeholder="1234 5678 9101 1213"
          {...register("cardNumber", {
            required: "Card Number is required",
            pattern: {
              value: /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/,
              message: "Enter a valid card number",
            },
          })}
          className={`mt-1 ${
            errors.cardNumber
              ? "border-red-600 focus:ring-red-500"
              : "border-gray-300 focus:ring-orange-500"
          }`}
          style={{ backgroundColor: "white", color: "black" }}
        />
        {errors.cardNumber && (
          <p
            style={{
              color: "#dc2626",
              fontSize: "0.875rem",
              marginTop: "0.25rem",
            }}
          >
            {errors.cardNumber.message}
          </p>
        )}
      </div>

      {/* Expiration Date */}
      <div style={{ marginBottom: "1rem" }}>
        <Label
          htmlFor="expirationDate"
          value="Expiration Date"
          style={{
            color: "black",
            fontWeight: "500",
            marginBottom: "0.25rem",
            display: "block",
          }}
        />
        <TextInput
          id="expirationDate"
          placeholder="MM / YY"
          {...register("expirationDate", {
            required: "Expiration Date is required",
          })}
          className={`mt-1 ${
            errors.expirationDate
              ? "border-red-600 focus:ring-red-500"
              : "border-gray-300 focus:ring-orange-500"
          }`}
          style={{ backgroundColor: "white", color: "black" }}
        />
        {errors.expirationDate && (
          <p
            style={{
              color: "#dc2626",
              fontSize: "0.875rem",
              marginTop: "0.25rem",
            }}
          >
            {errors.expirationDate.message}
          </p>
        )}
      </div>

      {/* CVC */}
      <div style={{ marginBottom: "1rem" }}>
        <Label
          htmlFor="cvc"
          value="CVC"
          style={{
            color: "black",
            fontWeight: "500",
            marginBottom: "0.25rem",
            display: "block",
          }}
        />
        <TextInput
          id="cvc"
          placeholder="123"
          {...register("cvc", {
            required: "CVC is required",
            pattern: {
              value: /^\d{3}$/,
              message: "Enter a valid CVC",
            },
          })}
          className={`mt-1 ${
            errors.cvc
              ? "border-red-600 focus:ring-red-500"
              : "border-gray-300 focus:ring-orange-500"
          }`}
          style={{ backgroundColor: "white", color: "black" }}
        />
        {errors.cvc && (
          <p
            style={{
              color: "#dc2626",
              fontSize: "0.875rem",
              marginTop: "0.25rem",
            }}
          >
            {errors.cvc.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full bg-primary cursor-pointer text-white font-medium rounded-md py-2"
      >
        Pay
      </Button>
      {showConfirmation && (
        <Confirmation
          message="تمت عملية الدفع بنجاح"
          onTimeout={() => setShowConfirmation(false)}
          image={done}
        />
      )}
    </form>
  );
};
