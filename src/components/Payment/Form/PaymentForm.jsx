import React, { useState } from "react";
import CreditCard from "../CreditCard";

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    ccv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // You can add additional logic here, such as sending the form data to a server
  };

  return (
    <div className="lg:flex gap-8  mx-auto shadow-lg p-6 rounded-lg justify-center items-center h-screen">
      <CreditCard />
      <br />
      <br />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center  w-[20rem] space-y-4"
      >
        {/* <div>
          <label
            htmlFor="Username"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="text"
              id="Username"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="Username"
            />

            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Username
            </span>
          </label>
        </div> */}
        <div>
          <label
            htmlFor="cardNumber"
            className="block text-sm font-medium text-gray-700"
          >
            No. Tarjeta
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2"
          />
        </div>
        <div className="grid grid-cols-2 gap-x-4">
          <div>
            <label
              htmlFor="expiry"
              className="block text-sm font-medium text-gray-700"
            >
              F. Expiracion
            </label>
            <input
              type="text"
              id="expiry"
              name="expiry"
              value={formData.expiry}
              onChange={handleInputChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2"
            />
          </div>
          <div>
            <label
              htmlFor="ccv"
              className="block text-sm font-medium text-gray-700"
            >
              CCV
            </label>
            <input
              type="text"
              id="ccv"
              name="ccv"
              value={formData.ccv}
              onChange={handleInputChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Realizar pago
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
