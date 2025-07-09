import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

const MenuList = () => {
  return (
    <ul className="flex justify-center gap-20 p-2">
      <li>
        <a
          href="https://github.com/j25ng"
          target="_blank"
          className="inline-flex items-center gap-2 bg-white px-6 py-2 rounded-md shadow-md hover:bg-gray-200 text-xl font-bold"
        >
          <FaGithub />
          Github
        </a>
      </li>
      <li>
        <a
          href="https://instagram.com/__j25ng"
          target="_blank"
          className="inline-flex items-center gap-2 bg-white px-6 py-2 rounded-md shadow-md hover:bg-gray-200 text-xl font-bold"
        >
          <FaInstagram />
          Instagram
        </a>
      </li>
      <li>
        <a
          href="/blog"
          className="inline-flex items-center gap-2 bg-white px-6 py-2 rounded-md shadow-md hover:bg-gray-200 text-xl font-bold"
        >
          <FaPencil />
          Blog
        </a>
      </li>
    </ul>
  );
};

export default MenuList;
