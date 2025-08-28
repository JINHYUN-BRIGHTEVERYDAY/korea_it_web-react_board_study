/** @jsxImportSource @emotion/react */
import { useNavigate, useParams } from "react-router-dom";
import * as s from "./styles";
import { useEffect, useState } from "react";
import { getBoardDetail, removeBoard } from "../../apis/board/boardApis";
import { useQueryClient } from "@tanstack/react-query";

function BoardDetail() {
  const [boardData, setBoardData] = useState({});
  const { boardId } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const principalData = queryClient.getQueryData(["getPrincipal"]);

  // const goToListPage = () => {
  //   useNavigate("/list");
  //   if (response.data.status === "목록") {
  //     setBoardData (response)
  //   }
  // }

  const removeOnClickHandler = (boardId) => {
    removeBoard(boardId).then((response) => {
      if (response.data.status === "success") {
        alert(response.data.message);
        navigate("/board");
      } else if (response.data.status == "failed") {
        alert(response.data.message);
        return;
      }
    });
  };

  useEffect(() => {
    getBoardDetail(boardId).then((response) => {
      if (response.data.status === "success") {
        setBoardData(response.data.data);
      } else if (response.data.status === "failed") {
        alert(response.data.message);
        navigate("/board");
      }
    });
  }, [boardId, navigate]);

  return (
    <div css={s.container}>
      <div css={s.boardContainer}>
        <div css={s.boardHeader}>
          <h3>{boardData.title}</h3>
          <span>{boardData?.createDt?.split("T")[0]}</span>
        </div>
        <div css={s.boardContent}>{boardData.content}</div>
      </div>
      <div css={s.btnContainer}>
        {/* 목록 버튼이 나타나는 부분 */}
        <button
          type="button"
          onClick={() => {
            navigate("/board");
          }}
          css={s.btn("#6c757d")}
        >
          목록
        </button>
        {principalData.data.data.userId == boardData.userId ? (
          <div>
            <button css={s.btn("#dc3545")}>삭제</button>
            <button css={s.btn("#0d6efd")}>수정</button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default BoardDetail;

/**
 * 목록 버튼을 누르면 리스트페이지로 보내기
 * 삭제 버튼을 누르면 삭제요청을 보내고 성공시 리스트로 보내기
 */
