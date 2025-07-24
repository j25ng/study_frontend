import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [account, setAccount] = useState([]);

  useEffect(() => {
    async function fetchAccount() {
      const response = await axios.get("http://localhost:3000/account");
      setAccount(response.data);
    }
    fetchAccount();
  }, []);

  const handleTransfer = async () => {
    const fromAccount = prompt("보내는 계좌 번호를 입력해주세요.");
    const toAccount = prompt("받는 계좌 번호를 입력해주세요.");
    const amount = prompt("이체할 금액을 입력해주세요.");

    const response = await axios.post("http://localhost:3000/transfer", {
      fromAccount,
      toAccount,
      amount,
    });

    console.log(response.data);
  };

  return (
    <div className="flex flex-col justify-center items-center p-10">
      <div>
        {account.map((item) => (
          <div key={item.account_id} className="flex flex-col gap-1">
            <p>{item.account_id}</p>
            <p>{item.owner_name}</p>
            <p>{item.balance}</p>
          </div>
        ))}
      </div>
      <button
        onClick={handleTransfer}
        className="cursor-pointer bg-gray-400 rounded p-3 m-3"
      >
        이체하기
      </button>
    </div>
  );
}

export default App;
