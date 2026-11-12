// 메뉴 카드 — 담기 버튼이 App에서 받은 함수를 호출합니다.
function MenuCard({ name, price, desc = "오늘의 메뉴", onAdd }) {
  return (
    <article className="menu-card">
      <h3>{name}</h3>
      <p className="price">{price}원</p>
      <p className="desc">{desc}</p>
      {/* TODO 6: onAdd — 클릭할 때 실행되도록 함수 자체를 전달합니다. */}
      <button type="button" onClick={onAdd}>
        담기
      </button>
    </article>
  );
}

export default MenuCard;
