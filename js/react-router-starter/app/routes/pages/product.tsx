const Product = () => {
  return (
    <main className="mx-auto my-[50px] w-[90%] max-w-[1200px]">
      <section className="py-[40px]">
        <h1 className="mb-[20px] text-[32px] font-bold">제주도 3박 4일 패키지</h1>
        <p>
          푸른 바다, 한라산, 전통과 현대가 어우러진 제주에서 잊지 못할 여행을 즐겨보세요.
        </p>
        <table className="mt-[20px] w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-[1px] border-[#ccc] p-[12px]">일차</th>
              <th className="border border-[1px] border-[#ccc] p-[12px]">일정</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[1px] border-[#ccc] p-[12px]">1일차</td>
              <td className="border border-[1px] border-[#ccc] p-[12px]">
                공항 도착 후 숙소이동, 자유시간
              </td>
            </tr>
            <tr>
              <td className="border border-[1px] border-[#ccc] p-[12px]">2일차</td>
              <td className="border border-[1px] border-[#ccc] p-[12px]">
                성산일출봉, 우도 투어
              </td>
            </tr>
            <tr>
              <td className="border border-[1px] border-[#ccc] p-[12px]">3일차</td>
              <td className="border border-[1px] border-[#ccc] p-[12px]">
                한라산 국립공원, 전통시장
              </td>
            </tr>
            <tr>
              <td className="border border-[1px] border-[#ccc] p-[12px]">4일차</td>
              <td className="border border-[1px] border-[#ccc] p-[12px]">
                기념품 쇼핑 후 공항 이동
              </td>
            </tr>
          </tbody>
        </table>
        <section className="mt-[30px]">
          <h2 className="text-[24px] font-semibold">포함 내역</h2>
          <ul className="list-[square]">
            <li>왕복 항공권</li>
            <li>호텔 숙박 3박</li>
            <li>현지 가이드 투어</li>
            <li>조식 포함</li>
          </ul>
          <h2 className="mt-[10px] text-[24px] font-semibold">불포함 내역</h2>
          <ul className="list-[square]">
            <li>개인 경비</li>
            <li>자유 시간 중 식비</li>
          </ul>
        </section>
      </section>
    </main>
  );
};

export default Product;
