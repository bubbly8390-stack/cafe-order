// 머리말 — App에서 담은 메뉴 개수를 props로 받습니다.
function Header({ count }) {
  return (
    <header className="site-header">
      <h1>오즈 카페</h1>
      <p>메뉴를 고르고 주문하는 동네 카페</p>
      <p>담은 메뉴 {count}개</p>
    </header>
  );
}

export default Header;
