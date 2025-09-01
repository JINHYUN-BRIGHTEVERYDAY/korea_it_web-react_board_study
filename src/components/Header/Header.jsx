/** @jsxImportSource @emotion/react */
import { LuLogIn, LuLogOut, LuUserRoundPlus } from "react-icons/lu";
import * as s from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { IoMdPerson } from "react-icons/io";
import { usePrincipalState } from "../../store/usePrincipalStore";

function Header() {
  const navigate = useNavigate();
  const { isLoggedIn, principal, logout } = usePrincipalState();
  // const queryClient = useQueryClient();
  // const principalData = queryClient.getQueryData(["getPrincipal"]);

  const onClickNavHandler = (path) => {
    navigate(path);
  };

  const onClickLogout = () => {
    logout();
  };

  return (
    <div css={s.header}>
      <div onClick={() => onClickNavHandler("/")}>BOARD</div>
      <div>
        <ul>
          <li>
            <Link to={"/board"}>게시판</Link>
          </li>
          <li>
            <Link to={"/write"}>글쓰기</Link>
          </li>
        </ul>
      </div>
      <div>
        {isLoggedIn ? (
          <ul>
            <li css={s.headerIcon} onClick={() => onClickNavHandler()}>
              <IoMdPerson />
            </li>
            <li css={s.headerIcon} onClick={onClickLogout}>
              <LuLogOut />
            </li>
          </ul>
        ) : (
          <ul>
            <li
              css={s.headerIcon}
              onClick={() => onClickNavHandler("/auth/signin")}
            >
              <LuLogIn />
            </li>
            <li
              css={s.headerIcon}
              onClick={() => onClickNavHandler("/auth/signup")}
            >
              <LuUserRoundPlus />
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Header;
