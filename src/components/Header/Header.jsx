/**@jsxImportSource @emotion/react */
import { FaUserPlus } from "react-icons/fa6";
import * as s from "./styles";
import { LuLogIn,  LuUserRoundPlus } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const onClickLogoHandler = () => {
    navigate("/");
  }

  const onClickNavHandler = () => {
    navigate("/");
  }

  return (
    <div css={s.header}>
      <div onClick={onClickLogoHandler}>BOARD</div>
      <div>
        <ul>
            <li>
              <Link to = {"/board"} >게시판</Link>
            </li>
            <li>
              <Link to={"/write"}>글쓰기</Link>
            </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <LuLogIn css={s.headerIcon}/>
          </li>
          <li>
            <LuUserRoundPlus css={s.headerIcon} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
