import { supabase } from "../supabaseClient";

const Footer = () => {
  const findPassword = async () => {
    const userId = prompt("아이디를 입력해주세요");
    const userName = prompt("닉네임을 입력해주세요");

    const [data, error] = await supabase
      .from("user")
      .select("*")
      .eq("user_id", userId)
      .eq("user_name", userName);

    if (error || data?.length === 0) {
      return alert("아이디나 닉네임이 일치하지 않습니다.");
    }

    const password = data[0].user_pw;
    const maskedPassword =
      password.slice(0, 2) + "*".repeat(password.length - 2);

    alert(`비밀번호는 ${maskedPassword}입니다.`);
  };

  return (
    <div className="flex justify-center gap-3 text-sm text-gray-400 p-4">
      <a onClick={findPassword}>비밀번호 찾기</a>|<a href="#">아이디 찾기</a>|
      <a href="#">회원가입</a>
    </div>
  );
};

export default Footer;
