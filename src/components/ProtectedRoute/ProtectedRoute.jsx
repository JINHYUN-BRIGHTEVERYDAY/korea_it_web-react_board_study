import { useQueryClient } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";

function ProtectedRoute({children}) {
  // const navigate = useNavigate();
  const queryClient = useQueryClient();
	const principalData = queryClient.getQueryData(["getPrincipal"]);

  if  (principalData === undefined) {
    alert("로그인이 필요합니다.");
    // navigate("/");
    window.location.href = "/auth/signin"; //로그인 페이지로 보내버리기
    return;
  }

  return children;
}

export default ProtectedRoute;