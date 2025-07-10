import { useState } from "react";

import Header from "./components/Header";
import Login from "./components/Login";
import Login2 from "./components/Login2";
import Login3 from "./components/Login3";
import Footer from "./components/Footer";

import { IoIosLogIn } from "react-icons/io";
import { Bs1Square } from "react-icons/bs";
import { FaQrcode } from "react-icons/fa6";

const Home = () => {
  const [page, setPage] = useState("login");
  return (
    <div className="flex items-center justify-center flex-col p-12">
      <Header />
      <div className="w-[400px] m-4">
        <div className="grid grid-cols-3">
          <button
            onClick={() => setPage("login")}
            className={`${
              page === "login"
                ? "border border-gray-300 border-b-0"
                : "bg-gray-200 bordor-0 p-2 text-gray-500"
            } rounded-t-lg p-2 font-semibold`}
          >
            <span className="flex justify-center items-center gap-2">
              <IoIosLogIn className="text-green-600" />
              ID/전화번호
            </span>
          </button>
          <button
            onClick={() => setPage("login2")}
            className={`${
              page === "login2"
                ? "border border-gray-300 border-b-0"
                : "bg-gray-200 bordor-0 p-2 text-gray-500"
            } rounded-t-lg p-2 font-semibold`}
          >
            <span className="flex justify-center items-center gap-2">
              <Bs1Square className="text-green-600" />
              일회용 번호
            </span>
          </button>
          <button
            onClick={() => setPage("login3")}
            className={`${
              page === "login3"
                ? "border border-gray-300 border-b-0"
                : "bg-gray-200 bordor-0 p-2 text-gray-500"
            } rounded-t-lg p-2 font-semibold`}
          >
            <span className="flex justify-center items-center gap-2">
              <FaQrcode className="text-green-600" />
              QR코드
            </span>
          </button>
        </div>
        <div className="border border-t-0 rounded-b-2xl border-gray-300 p-1">
          {page === "login" && <Login />}
          {page === "login2" && <Login2 />}
          {page === "login3" && <Login3 />}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
