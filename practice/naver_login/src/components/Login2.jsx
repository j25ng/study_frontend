import { useRef } from "react";

const Login2 = () => {
  const keyRef = useRef(null);

  const handleLogin = () => {
    alert(keyRef.current?.value);
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="text-center text-sm text-gray-600 m-4 leading-relaxed">
        <span className="text-black">네이버앱의 </span>
        메뉴 &gt; 설정 ⚙ &gt; 로그인 아이디 관리 &gt;
        <br />
        더보기: &gt; 일회용 로그인 번호에 보이는 번호를 입력해 주세요.
      </div>

      <input
        type="text"
        name="key"
        id="key"
        ref={keyRef}
        className=" m-2 rounded-xl h-12 px-4 border border-gray-300 text-center"
        placeholder="번호를 입력하세요."
      />
      <button
        id="passkeyLogin"
        onClick={handleLogin}
        className="m-2 rounded-xl h-12 px-4 bg-green-600 text-white"
      >
        로그인
      </button>
    </div>
  );
};

export default Login2;
