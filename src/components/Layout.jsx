import { Outlet } from "react-router";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

// 모든 페이지의 틀 — 장바구니 개수는 더 이상 거쳐 가지 않습니다
function Layout({ user }) {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <Header user={user} />
      <main className="mx-auto max-w-5xl px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
