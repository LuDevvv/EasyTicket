export default function PaymentFailure() {
  return (
    <div class="bg-gray-100 h-screen">
      <div class="bg-white p-6  md:mx-auto">
        <svg viewBox="0 0 24 24" class="text-red-600 w-16 h-16 mx-auto my-6">
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm5.657,15.657a1,1,0,0,1-1.414,0L12,13.414l-4.243,4.243a1,1,0,1,1-1.414-1.414L10.586,12,6.343,7.757a1,1,0,0,1,1.414-1.414L12,10.586l4.243-4.243a1,1,0,0,1,1.414,1.414L13.414,12Z"
          ></path>
        </svg>

        <div class="text-center">
          <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Pago incorrecto
          </h3>
          <p class="text-gray-600 my-2">Puedes intentar de nuevo.</p>
          <p>Lamentamos los inconveniente.</p>
          <div class="py-10 text-center">
            <a
              href="#"
              class="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
            >
              Ir atras
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
