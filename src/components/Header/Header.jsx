/**@jsxImportSource @emotion/react */
import { FaUserPlus } from "react-icons/fa6";
import * as s from "./styles";
import { LuLogIn, LuUser } from "react-icons/lu";

function Header() {
  return (
    <div css={s.header}>
      <div>BOARD</div>
      <div>
        <ul>
          <li>게시판</li>
          <li>글쓰기</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <LuLogIn />
          </li>
          <li>
            <LuUser />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
