import { memo } from "react";
import { Link } from "react-router";
import Button from "./Button.jsx";

// 메뉴 카드 하나 — 메뉴 객체(menu)와 담기 함수(onAdd)를 받습니다
function MenuCard({ menu, onAdd }) {
  return (
    <article className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-stone-200 hover:shadow-md">
      <h3 className="text-lg font-bold">{menu.name}</h3>
      <p className="mt-1 font-bold text-amber-800">{menu.price}원</p>
      <p className="mt-2 text-sm text-stone-500">{menu.desc || "오늘의 메뉴"}</p>
      <div className="mt-4 flex items-center gap-3">
        <Button onClick={() => onAdd(menu)}>담기</Button>
        <Link to={`/menu/${menu.id}`} className="text-sm text-stone-600 hover:underline">
          자세히
        </Link>
      </div>
    </article>
  );
}

// props가 그대로면 다시 그리지 않음
export default TODO 5(MenuCard);
