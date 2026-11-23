import { useEffect, useState } from "react";
import { supabase } from "../supabase.js";
import Button from "../components/Button.jsx";

// 내 주문(/orders) — orders 표에서 내 주문을 새 주문부터 받아 오고, 「주문 취소」로 지웁니다
function OrdersPage({ user }) {
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadOrders() {
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });
      if (error) {
        setMessage(error.message);
        return;
      }
      setOrders(data);
    }
    loadOrders();
  }, [user.id]);

  async function cancelOrder(order) {
    const { error } = await supabase
      .from("orders")
      .TODO 5()
      .eq("id", order.id);
    if (error) {
      setMessage(error.message);
      return;
    }
    setOrders(orders.filter((o) => o.id !== order.id)); // 화면에서도 뺌
  }

  return (
    <section>
      <h2 className="mb-4 text-xl font-bold">내 주문</h2>
      {message && <p className="mb-3 text-sm text-red-600">{message}</p>}
      {orders.length === 0 ? (
        <p className="text-stone-500">아직 주문이 없어요</p>
      ) : (
        <ul className="divide-y divide-stone-200 rounded-2xl bg-white ring-1 ring-stone-200">
          {orders.map((order) => (
            <li key={order.id} className="flex items-center justify-between gap-3 px-5 py-3">
              <span>
                {order.items.join(", ")} — {order.total}원
              </span>
              <Button variant="outline" onClick={() => cancelOrder(order)}>
                주문 취소
              </Button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default OrdersPage;
