import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleMenu = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="text-white flex justify-between items-center h-24 container mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-primary">REACT.</h1>
      <ul className="hidden md:flex uppercase">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div className="block md:hidden" onClick={toggleMenu}>
        {navOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div
        className={`${
          navOpen ? "block" : "hidden"
        } bg-black fixed left-0 top-0 w-3/5 h-full border-r border-gray-900 md:hidden`}
      >
        <h1 className="w-full text-3xl font-bold text-primary m-4">REACT.</h1>
        <ul className="uppercase">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
