import React from 'react';
import { images } from '../constants';

const navItemsInfo = [
  { name: 'Главная' },
  { name: 'Статьи' },
  { name: 'Страницы' },
  { name: 'Цены' },
  { name: 'Faq' },
];

const NavItem = ({ name }) => {
  return (
    <li className="hover:text-blue-500 transition-all duration-500">
      <a href="/" className="px-4 py-2">
        {name}
      </a>
    </li>
  );
};

const Header = () => {
  return (
    <section>
      <header className="container mx-auto px-5 py-4 flex justify-between items-center">
        <div className="w-[45px]">
          <img src={images.Logo} alt="Логотип" />
        </div>
        <div className="flex gap-x-8 items-center">
          <ul className="flex gap-x-2 font-semibold">
            {navItemsInfo.map((item) => (
              <NavItem key={item.name} name={item.name} />
            ))}
          </ul>
          <button className="border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
            Вход
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
