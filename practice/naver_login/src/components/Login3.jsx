import { useEffect, useState } from "react";
import qrImage from "../assets/qr.png";
import { VscDebugRestart } from "react-icons/vsc";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const Login3 = () => {
  const [sec, setSec] = useState(180);
  const [random, setRandom] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSec((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const num = Math.floor(Math.random() * 99) + 1;
    setRandom(num);
  }, []);

  return (
    <div className="flex flex-col m-4">
      {sec > 0 ? (
        <div>
          <div className="grid grid-cols-3">
            <div />
            <div className="flex justify-center items-center">
              <img src={qrImage} alt="QR" className="h-20" />
            </div>
            <div className="flex flex-col justify-end">
              <span className="text-xs font-semibold text-gray-800">
                남은시간
              </span>
              <span className="font-bold text-green-600">{sec}초</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center m-4">
            <span>공용 네트워크, 공용 PC라면 안전을 위해</span>
            <span>QR코드로 로그인해주세요.</span>
          </div>
          <div className="flex flex-col items-center justify-center text-xs gap-1">
            <span>네이버 앱 &gt; 렌즈 를 눌러 QR코드를 스캔하여</span>
            <div className="flex gap-1 items-center">
              <span> 보이는 숫자 중</span>
              <span className="px-3 bg-black text-white rounded-full font-bold text-xs">
                {random}
              </span>
              <span>를 선택하면 로그인 됩니다.</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-3 p-10">
          <AiOutlineExclamationCircle className="w-15 h-15 text-gray-400" />
          <div className="flex flex-col text-xs">
            <span>해당 QR코드의 유효시간이 지났습니다.</span>
            <span>다시 로그인을 시도하시겠습니까?</span>
          </div>
          <div
            className="flex items-center justify-center gap-2 text-green-600"
            onClick={() => setSec(180)}
          >
            <VscDebugRestart />
            <span className="font-bold">재시도</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login3;
