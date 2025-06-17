const Reservation = () => {
  return (
    <main>
      <h1 className="mx-auto my-[50px] w-[90%] max-w-[1200px]">여행 예약 요청</h1>

      <form className="mx-auto my-[40px] max-w-[600px] rounded-[10px] bg-white p-[30px] shadow-md">
        <div className="mb-[20px] flex flex-col">
          <label htmlFor="name">이름</label>
          <input
            className="rounded-[6px] border border-[#ccc] p-[10px]"
            type="text"
            id="name"
            name="name"
            placeholder="홍길동"
          />
        </div>
        <div className="mb-[20px] flex flex-col">
          <label htmlFor="phone">전화번호</label>
          <input
            className="rounded-[6px] border border-[#ccc] p-[10px]"
            type="text"
            id="phone"
            name="phone"
            placeholder="010-1234-5678"
          />
        </div>
        <div className="mb-[20px] flex flex-col">
          <label htmlFor="date">이름</label>
          <input
            className="rounded-[6px] border border-[#ccc] p-[10px]"
            type="date"
            id="date"
            name="date"
          />
        </div>

        <div className="mb-[20px] flex flex-col">
          <label htmlFor="people">인원 수</label>
          <select
            className="rounded-[6px] border border-[#ccc] p-[10px]"
            id="people"
            name="people"
          >
            <option value="1">1명</option>
            <option value="2">2명</option>
            <option value="3">3명</option>
            <option value="4">4명 이상</option>
          </select>
        </div>

        <div className="mb-[20px] flex flex-col">
          <label htmlFor="message">기타 요청 사항</label>
          <textarea
            className="rounded-[6px] border border-[#ccc] p-[10px]"
            id="message"
            name="message"
            placeholder="특별히 요청하실 내용이 있다면 적어주세요."
          />
        </div>

        <div className="mb-[20px] flex items-center">
          <input className="mr-[8px]" type="checkbox" id="agree" name="agree" />
          <label htmlFor="agree">이용 약관에 동의합니다</label>
        </div>

        <button type="submit" className="btn">
          예약 요청 보내기
        </button>
      </form>
    </main>
  );
};

export default Reservation;
