import { Navigate, Outlet } from "react-router";

// 로그인해야 들어가는 라우트를 감쌉니다
function PrivateRoute({ user, checking }) {
  if (checking) {
    return <p className="text-stone-500">로그인 상태를 확인하는 중…</p>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default PrivateRoute;
