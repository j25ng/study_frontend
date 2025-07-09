import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuList from "./MenuList";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="">
      <button className="w-16 h-16" onClick={toggleMenu}>
        <GiHamburgerMenu className="text-3xl hover:text-cyan-400" />
      </button>

      {isOpen && <MenuList />}
    </div>
  );
};

export default HamburgerMenu;
