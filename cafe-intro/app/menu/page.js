import Link from "next/link";

// 이 페이지의 metadata — 탭 제목은 「메뉴 | 오즈 카페」가 됩니다(layout.js의 title.template)
export const metadata = {
  title: "메뉴",
  description: "오즈 카페의 커피 · 음료 · 디저트 메뉴와 가격",
};

const menus = [
  { name: "아메리카노", price: 4000 },
  { name: "카페 라테", price: 4500 },
  { name: "바닐라 라테", price: 5000 },
  { name: "자몽 에이드", price: 5000 },
  { name: "유자차", price: 4500 },
  { name: "소금빵", price: 3500 },
  { name: "치즈 케이크", price: 6000 },
];

// 메뉴(/menu) — app/menu/page.js 파일이 곧 /menu 주소입니다
export default function MenuPage() {
  return (
    <main>
      <h1>메뉴</h1>
      <ul>
        {menus.map((menu) => (
          <li key={menu.name}>
            {menu.name} {menu.price}원
          </li>
        ))}
      </ul>
      <Link href="/">가게 소개로</Link>
    </main>
  );
}
