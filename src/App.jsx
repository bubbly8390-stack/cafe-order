import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";
import { selectCartCount, useCartStore } from "./stores/cartStore.js";
import Layout from "./components/Layout.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import MenuDetailPage from "./pages/MenuDetailPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import OrdersPage from "./pages/OrdersPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

// 장바구니는 store(cartStore)가 맡고, App은 로그인 상태를 기억합니다
function App() {
  const [user, setUser] = useState(null); // 로그인한 사람 — 없으면 null
  const [checking, setChecking] = useState(true); // 처음에 로그인 상태를 확인하는 중
  const count = useCartStore(selectCartCount);

  useEffect(() => {
    document.title = count > 0 ? `(${count}) 오즈 카페` : "오즈 카페";
  }, [count]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setChecking(false);
    });
    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route element={<Layout user={user} />}>
        <Route index element={<MenuPage />} />
        <Route path="menu/:id" element={<MenuDetailPage />} />
        <Route path="cart" element={<CartPage user={user} />} />
        <Route path="login" element={<LoginPage user={user} checking={checking} />} />
        <Route element={<PrivateRoute user={user} checking={checking} />}>
          <Route path="orders" element={<OrdersPage user={user} />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
