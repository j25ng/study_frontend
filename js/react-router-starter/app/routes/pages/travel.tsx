import { useRef } from 'react';

const Travel = () => {
  const heroRef = useRef<HTMLElement | null>(null);

  const scrollToHero = () => {
    heroRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const data = [
    {
      title: '제주도',
      desc: '자연과 힐링이 있는 국내 최고의 여행지.',
      price: '₩399,000 ~',
    },
    {
      title: '부산',
      desc: '활기찬 해운대와 맛있는 음식이 가득한 도시.',
      price: '₩299,000 ~',
    },
    {
      title: '도쿄',
      desc: '쇼핑과 문화가 어우러진 매력적인 일본 여행.',
      price: '₩799,000 ~',
    },
  ];

  return (
    <main className="bg-[#f9f9f9]" ref={heroRef}>
      <section
        className="bg-cover bg-center px-[20px] py-[80px] text-center text-white"
        style={{
          backgroundImage:
            "url('https://cphoto.asiae.co.kr/listimglink/1/2024021215165560952_1707718615.jpeg')",
        }}
      >
        <h2 className="mb-[10px] text-[32px]">올여름, 어디로 떠나시나요?</h2>
        <p>여행을 떠나요와 함께라면 국내외 인기 여행지를 쉽게 떠날 수 있어요.</p>
      </section>

      <section className="max-w[1200px] mx-auto my-[50px] w-[90%] py-[40px]">
        <h2>🔥 인기 여행지</h2>
        <div className="flex flex-wrap gap-[20px]">
          {data.map((data, index) => (
            <div
              key={index}
              className="m-[10px] min-w-[250px] flex-1 rounded-[10px] bg-white p-[16px] shadow-md"
            >
              <h3>{data.title}</h3>
              <p>{data.desc}</p>
              <span>{data.price}</span>
            </div>
          ))}
        </div>
      </section>

      <aside className="mx-auto mb-10 w-[90%] max-w-[1200px] bg-[#fffbe6] p-5">
        <h2 className="mb-2 text-xl font-semibold">📢 공지사항</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <button onClick={scrollToHero} className="text-left hover:underline">
              [이벤트] 여름맞이 해외여행 20% 할인!
            </button>
          </li>
          <li>
            <button onClick={scrollToHero} className="text-left hover:underline">
              6월 항공권 사전 예약 안내
            </button>
          </li>
          <li>
            <button onClick={scrollToHero} className="text-left hover:underline">
              코로나 이후 여행 안전 수칙
            </button>
          </li>
        </ul>
      </aside>
    </main>
  );
};

export default Travel;
