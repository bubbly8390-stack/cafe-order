import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import MenuCard from "./components/MenuCard.jsx";
import Footer from "./components/Footer.jsx";

// 담은 개수는 공통 부모인 App이 기억합니다.
function App() {
  // TODO 1: useState — 화면에 표시할 개수를 기억합니다.
  const [count, setCount] = useState(0);

  // TODO 2, 3: useEffect와 count — 개수가 바뀌면 탭 제목을 바꿉니다.
  useEffect(() => {
    document.title = count > 0 ? `(${count}) 오즈 카페` : "오즈 카페";
  }, [count]);

  function handleAdd() {
    // TODO 4: setCount — 담은 개수를 1 늘립니다.
    setCount(count + 1);
  }

  return (
    <>
      {/* TODO 5: count — Header에 현재 개수를 전달합니다. */}
      <Header count={count} />
      <main>
        <h2>메뉴</h2>
        <div className="menu-list">
          <MenuCard name="아메리카노" price={4000} desc="깊고 고소한 기본 커피" onAdd={handleAdd} />
          <MenuCard name="카페 라테" price={4500} desc="우유를 넉넉히 넣은 커피" onAdd={handleAdd} />
          <MenuCard name="자몽 에이드" price={5000} desc="상큼한 자몽과 탄산" onAdd={handleAdd} />
          <MenuCard name="소금빵" price={3500} onAdd={handleAdd} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
