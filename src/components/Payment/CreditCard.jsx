// CreditCard.jsx
import React, { useState } from "react";

const CreditCard = () => {
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const toggleCardFlip = () => {
    setIsCardFlipped(!isCardFlipped);
  };

  return (
    <div className="flex justify-center items-center mt-8">
      <div className="relative w-80 h-48">
        <div
          className={`absolute w-full h-full rounded-xl shadow-2xl bg-white text-black text-center flex flex-col justify-between cursor-pointer transition-transform duration-500 ${
            isCardFlipped ? "transform rotate-y-180" : ""
          }`}
          style={{ perspective: "1000px" }}
          onClick={toggleCardFlip}
        >
          <div className="w-full px-8 py-5">
            <p className="font-light">Card Number</p>
            <p
              className="font-medium tracking-more-wider h-6"
              id="imageCardNumber"
            >
              4256 4256 4256 4256
            </p>
          </div>
          <div className="pt-6 flex justify-between px-8">
            <div>
              <p className="font-light">Name</p>
              <p className="font-medium tracking-widest h-6" id="imageCardName">
                John Doe
              </p>
            </div>
            <div>
              <p className="font-light">Expiry</p>
              <p
                className="font-medium tracking-wider h-6 w-14"
                id="imageExpDate"
              >
                12/24
              </p>
            </div>
          </div>
        </div>
        <div
          className={`absolute w-full h-full rounded-xl shadow-2xl bg-white text-black text-center flex flex-col justify-between cursor-pointer transition-transform duration-500 rotate-y-180 ${
            isCardFlipped ? "transform rotate-y-180" : ""
          }`}
          style={{ perspective: "1000px" }}
          onClick={toggleCardFlip}
        >
          <div className="w-full h-full p-8 flex items-center justify-center">
            <p className="bg-red-100 flex-1 h-8"></p>
            <p
              className="bg-white text-black flex items-center pl-4 pr-2 w-14"
              id="imageCCVNumber"
            >
              342
            </p>
          </div>
          {/* <p className="font-light flex justify-end text-xs">security code</p> */}
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
