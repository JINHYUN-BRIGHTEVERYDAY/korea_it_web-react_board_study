/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./styles";
import { getBoardDetail, updateBoard } from "../../apis/board/boardApis";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { usePrincipalState } from "../../store/usePrincipalStore";

function Update() {
  const [newBoardData, setNewBoardData] = useState({});
  const [boardData, setBoardData] = useState({});
  const { boardId } = useParams();
  const navigate = useNavigate();
  const { isLoggedIn, principal } = usePrincipalState();
  // const principalData = queryClient.getQueryData(["getPrincipal"]);

  const updateBoardMutation = useMutation({
    mutationKey: "updateBoard",
    mutationFn: updateBoard,
    onSuccess: (response) => {
      if (response.data.status === "success") {
        alert(response.data.message);
        navigate("/board");
      } else if (response.data.status === "failed") {
        alert(response.data.message);
        return;
      }
    },
    onError: (error) => {
      alert("문제가 발생하였습니다. 다시 시도해주세요");
      return;
    },
  });

  const updateOnClickHandler = () => {
    if (
      boardData.title.trim().length === 0 ||
      boardData.content.trim().length === 0
    ) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    updateBoardMutation.mutate({
      title: boardData.title,
      content: boardData.content,
      boardId: boardId,
    });
  };

  useEffect(() => {
    getBoardDetail(boardId).then((response) => {
      if (response.data.status === "success") {
        if (principal.userId !== response.data.data.userId) {
          alert("잘못된 접근입니다.");
          navigate("/board");
        }
        setBoardData(response.data.data);
      } else if (response.data.status === "failed") {
        alert(response.data.message);
        navigate("/board");
      }
    });
  }, [boardId, principal, navigate]);

  // useEffect(() => {
  //   if (principalData.data.data.userId !== boardData.userId) {
  //     alert("잘못된 접근입니다.");
  //     navigate("/board");
  //   }
  // }, [principalData, boardData, navigate]);

  return (
    <div css={s.container}>
      <input
        type="text"
        value={boardData.title}
        placeholder="제목을 입력해주세요."
        onChange={(e) => {
          setNewBoardData({ ...newBoardData, title: e.target.value });
        }}
      />
      <textarea
        name=""
        id=""
        placeholder="내용을 입력해주세요."
        value={boardData.content}
        onChange={(e) => {
          setNewBoardData({
            ...newBoardData,
            content: e.target.value,
          });
        }}
      ></textarea>
      <div css={s.btnBox}>
        <button onClick={updateOnClickHandler}>수정하기</button>
      </div>
    </div>
  );
}

export default Update;
