import "./globals.css";

// 모든 페이지에 들어가는 metadata — title.template은 페이지 제목 뒤에 가게 이름을 붙입니다
export const metadate = {
  title: {
    default: "오즈 카페",
    template: "%s | 오즈 카페",
  },
  description: "매일 아침 8시에 문을 여는 동네 카페 — 커피 · 음료 · 디저트를 앱으로 주문합니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
