const Modal = ({ modal, toggleModal }) => {
  return (
    <div
      className={`${
        modal ? "h-screen" : "h-0 -z-10"
      } fixed lg:hidden z-30 px-14 sm:px-24 flex flex-col gap-4 justify-center transition-h duration-700 w-full h-vh bg-darkless top-0 bottom-0 right-0 left-0`}
    >
      <a
        href="#portfolio"
        onClick={toggleModal}
        className={`bg-darkest w-full h-14 sm:h-20 transition-all duration-300 rounded-sm ${
          modal ? "opacity-1 delay-500" : "opacity-0 delay-100"
        }`}
      >
        <div className="flex justify-center items-center w-full h-full uppercase text-white font-2xl font-semibold">
          Portfolio
        </div>
      </a>
      <a
        onClick={toggleModal}
        href="#rates"
        className={`bg-darkest w-full h-14 sm:h-20 transition-all duration-300 rounded-sm ${
          modal ? "opacity-1 delay-700" : "opacity-0 delay-100"
        }`}
      >
        <div className="flex justify-center items-center w-full h-full uppercase text-white font-2xl font-semibold">
          Rates
        </div>
      </a>
      <a
        onClick={toggleModal}
        href="#contact"
        className={`bg-darkest w-full h-14 sm:h-20 transition-all duration-300 rounded-sm ${
          modal ? "opacity-1 delay-[900ms]" : "opacity-0 delay-100"
        }`}
      >
        <div className="flex justify-center items-center w-full h-full uppercase text-white font-2xl font-semibold">
          Contact
        </div>
      </a>
    </div>
  );
};

export default Modal;
