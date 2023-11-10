import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col p-5 lg:flex-row">
      <div className="container mx-auto flex justify-between items-center mt-10 lg:flex-row md:flex-col sm:flex-col">


        <div className="flex w-[550px] gap-2.5 mt-10 relative">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]" />
            <input
              type="text"
              className="placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-[440px] py-3 focus:outline-none md:py-4 shadow-md"
              placeholder="поиск статьи"
            />
          </div>
          <button className="w-full bg-primary text-white font-semibold rounded-lg px-5 py-2 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2">
            Поиск
          </button>
        </div>
        <div className="flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7">
          <span className="text-dark-light font-semibold italic mt-2 lg:mt-4">
            Популярные тэги:
          </span>
          <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3">
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Дизайн
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Программирование
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Интерфейсы
            </li>
          </ul>
        </div>
      </div>

    </section>
  );
};

export default Hero;
