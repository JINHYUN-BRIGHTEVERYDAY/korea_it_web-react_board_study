/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import * as s from "./styles";
import { ref, uploadBytesResumable } from "@firebase/storage";
import { v4 as uuid } from "uuid";
import { storage } from "../../apis/config/firebaseConfig";

function ChangeProfileImg({ oldProfileImg }) {
  const [profileImg, setProfileImg] = useState("");
  const [newProfileImg, setNewProfileImg] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef(null);

  const onChangeFileHandler = (e) => {
    const file = e.target.files[0];

    if (file) {
      setNewProfileImg(file);

      const reader = new FileReader();
      // 파일 읽기가 완료되면 호출될 콜백 함수를 정의함
      reader.onloadend = () => {
        setProfileImg(reader.result);
      };

      // 선택될 파일을 URL 형식으로 읽어오게 된다
      reader.readAsDataURL(file);
    }
  };

  const onClickProfileImgHandler = () => {
    fileInputRef.current.click();
  };

  const onClickChangeBtnHandler = () => {
    if (!newProfileImg) {
      alert("이미지를 선택하세요");
      return;
    }

    //업로드 시작부분
    setIsUploading(true);

    const imageRef = ref(
      storage,
      `profile-img/${uuid()}_${newProfileImg.name.split(".").pop}`
    );

    const uploadTask = uploadBytesResumable(imageRef, newProfileImg);

    // 업로드 상태 변화를 감지하는 이벤트 리스너를 등록
    uploadTask.on(
      "stage_changed",
      // 진행상황 리스너 : 업로드 진행률을 계산할 수 있게 해주는 것
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      }
    );

    //=== 에러 핸들러, 완료 핸들러 남은
  };

  useEffect(() => {
    setProfileImg(oldProfileImg);
  }, [oldProfileImg]);
  return (
    <div css={s.container}>
      <div css={s.profileImgBox}>
        <img src={profileImg} alt="" onClick={onClickProfileImgHandler} />
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={onChangeFileHandler}
        />
        <div css={s.buttonBox}>
          <button onClick={onClickChangeBtnHandler}>변경하기</button>
        </div>
      </div>
    </div>
  );
}

export default ChangeProfileImg;
