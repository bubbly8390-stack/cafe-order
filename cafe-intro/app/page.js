import Link from "next/TODO 4";

// 주문 앱(cafe-order)의 개발 서버 주소 — 두 앱을 함께 켜 두면 링크로 오갑니다
const ORDER_APP_URL = "http://localhost:5173";

// 가게 소개(/) — 검색에 잡히도록 서버에서 HTML로 그려 보내는 페이지
export default function Home() {
  return (
    <main>
      <h1>오즈 카페</h1>
      <p>동네에서 매일 아침 8시에 문을 여는 작은 카페입니다.</p>
      <h2>영업시간</h2>
      <p>평일 8:00~20:00 · 주말 10:00~18:00</p>
      <h2>대표 메뉴</h2>
      <ul>
        <li>아메리카노 4000원</li>
        <li>카페 라테 4500원</li>
        <li>소금빵 3500원</li>
      </ul>
      <p>
        <Link TODO 5="/menu">메뉴 모두 보기</Link>
      </p>
      <p>
        <a href={ORDER_APP_URL}>앱으로 주문하기</a>
      </p>
    </main>
  );
}
