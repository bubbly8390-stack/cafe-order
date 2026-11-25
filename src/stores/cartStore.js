import { TODO 1 } from "zustand";

// 장바구니 store — 담은 메뉴의 배열(cart)과 바꾸는 함수를 한 객체에 적으면 create가 hook을 만들어 줍니다
export const useCartStore = TODO 1((set) => ({
  cart: [],

  // 담기 — 메뉴 객체를 끝에 더한 새 배열
  addToCart: (menu) =>
    TODO 2((state) => ({
      cart: [...state.cart, menu],
    })),

  // 빼기 — 장바구니 안의 번호(index)만 뺀 새 배열
  removeFromCart: (index) =>
    set((state) => ({
      cart: state.cart.TODO 3((_, i) => i !== index),
    })),

  // 비우기 — 주문을 마친 뒤
  clearCart: () => set({ cart: TODO 4 }),
}));

// 꺼내는 함수(selector) — 개수와 합계는 state에 두지 않고 계산합니다
export const selectCartCount = (state) => state.cart.length;
export const selectCartTotal = (state) =>
  state.cart.reduce((sum, menu) => sum + menu.price, 0);
