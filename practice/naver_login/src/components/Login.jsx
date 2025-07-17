import { useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { supabase } from "../supabaseClient";

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [logined, setLogined] = useState(false);
  const [userData, setUserData] = useState([]);

  const idRef = useRef(null);
  const pwRef = useRef(null);

  const handleLogin = async () => {
    const { data, error } = await supabase
      .from("user")
      .select("*")
      .eq("user_id", idRef.current.value)
      .eq("user_pw", pwRef.current.value);

    if (error || data?.length === 0) {
      setLogined(false);
      return alert("아이디 또는 비밀번호가 올바르지 않습니다.");
    }

    alert("로그인 되었습니다.");
    setLogined(true);
    setUserData(...data);
  };

  const handleKakaoLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "kakao",
    });
    if (error) {
      return alert("로그인 실패", error);
    }
    console.log(data);
  };

  const handleHello = async () => {
    const data = await fetch("http://localhost:3000/hello");
    const text = await data.text();
    alert(text);
  };

  return (
    <div>
      <div className="flex flex-col mt-3">
        <input
          type="text"
          ref={idRef}
          name="id"
          id="id"
          className="mx-2 border rounded-t-lg h-12 p-3 border-gray-300 focus:outline-green-600"
          placeholder="아이디 또는 전화번호"
        />
        <input
          type="password"
          ref={pwRef}
          name="pwd"
          id="pwd"
          className="mx-2 border border-t-0 rounded-b-lg h-12 p-3 border-gray-300 focus:outline-green-600"
          placeholder="비밀번호"
        />
      </div>
      <div className="flex my-4 mx-2 justify-between">
        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="hidden"
          />
          <div
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200
          ${
            isChecked
              ? "bg-green-500 border-green-500"
              : "border-gray-400 bg-white"
          }`}
          >
            <FaCheck
              className={`text-xs ${
                isChecked ? "text-white" : "text-gray-400"
              }`}
            />
          </div>
          <span className="text-sm font-medium">로그인 상태 유지</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <div className="text-sm font-medium text-gray-700">IP보안</div>
          <div className="relative inline-block w-12 h-6">
            <input
              type="checkbox"
              className="opacity-0 w-0 h-0"
              checked={isToggled}
              onChange={() => setIsToggled(!isToggled)}
            />
            <span
              className={`absolute inset-0 rounded-full transition-colors duration-300 ${
                isToggled ? "bg-green-500" : "bg-gray-300"
              }`}
            />
            <span
              className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow-md transition-transform duration-300 ${
                isToggled ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </div>
        </label>
      </div>
      <div className="flex flex-col justify-center">
        <button
          onClick={handleLogin}
          id="passkeyLogin"
          className="m-2 rounded-xl h-12 bg-gray-400 text-white"
        >
          로그인
        </button>
        <button
          onClick={handleKakaoLogin}
          className="m-2 rounded-xl h-12 bg-yellow-400 text-black"
        >
          카카오 로그인
        </button>
        <div className="flex items-center m-2">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="px-4 text-gray-500 text-sm">
            지문·얼굴 인증을 설정했다면
          </span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
        <button
          id="passkeyLogin"
          onClick={handleHello}
          className="border-1 m-2 rounded-xl h-12 border-green-600 text-green-600 font-bold"
        >
          패스키 로그인
        </button>
      </div>
      {logined && (
        <div className="flex flex-col items-center bg-gray-300 w-20">
          <p>{userData.user_id}</p>
          <p>{userData.user_pw}</p>
          <p>{userData.user_name}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
