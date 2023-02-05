import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useContext, useRef, useState } from "react";
import DataContext from "../context/DataContext";

const Diary = (props) => {
  const { state, action } = useContext(DataContext);
  const { challengeItem } = props;
  const [content, setContent] = useState("");
  const textRef = useRef();

  const resizeTextarea = (e) => {
    textRef.current.style.height = "auto";
    textRef.current.style.height = textRef.current.scrollHeight + "px";
    setContent(e.target.value);
  };

  const addDiary = () => {
    if (content.trim() == "") {
      alert("내용을 입력해주세요!");
      return;
    }
    // 같은 diaryId가 있다면 아래에서 수정하라고 주의문 주기
    // const newDiary = challengeItem.diary.concat({
    //   diaryId: challen geItem.stamp.length,
    //   diaryContent: content,
    // });
    // const findIndex = state.currentUser.challengeList.findIndex(
    //   (n) => n.challengeId == challengeItem.challengeId
    // );
    // const copyChallengeList = state.currentUser.challengeList;
    // if (findIndex != -1) {
    //   copyChallengeList[findIndex] = {
    //     ...copyChallengeList[findIndex],
    //     diary: newDiary,
    //   };
    // }
    // action.setCurrentUser({
    //   ...state.currentUser,
    //   challengeList: copyChallengeList,
    // });
    setContent("");
    textRef.current.style.height = "auto";
    textRef.current.value = "";
    // 텍스트에리아 작성값이 남아있음 수정필요
  };

  const deleteDiary = (item) => {
    // 삭제 확인 문구 추가
    // const newDiary = challengeItem.diary.filter(
    //   (n) => n.diaryId != item.diaryId
    // );
    // const findIndex = state.currentUser.challengeList.findIndex(
    //   (n) => n.challengeId == challengeItem.challengeId
    // );
    // const copyChallengeList = state.currentUser.challengeList;
    // if (findIndex != -1) {
    //   copyChallengeList[findIndex] = {
    //     ...copyChallengeList[findIndex],
    //     diary: newDiary,
    //   };
    // }
    // action.setCurrentUser({
    //   ...state.currentUser,
    //   challengeList: copyChallengeList,
    // });
  };

  return (
    <Wrap>
      <textarea
        rows={1}
        placeholder="오늘의 챌린지는 어땠나요?"
        onChange={resizeTextarea}
        ref={textRef}
      />
      <MyButton onClick={addDiary}>작성 완료</MyButton>
      {challengeItem.stamp
        .slice(0)
        .reverse()
        .map((item) => (
          <DairyContainer key={item.day}>
            <Head>
              <Color color={item.color} />
              <div>
                Day {item.day} :: {item.date}
              </div>
              <div
                onClick={() => {
                  deleteDiary(item);
                }}
              >
                <FontAwesomeIcon icon={faTrash} />
              </div>
            </Head>
            <Body>{item.diary}</Body>
          </DairyContainer>
        ))}
    </Wrap>
  );
};

const Wrap = styled.div`
  height: calc(100vh - 164px);
  min-height: 632px;
  box-sizing: border-box;
  overflow-y: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  textarea {
    display: block;
    padding: 1.5rem 1.2rem;
    margin: 1.5rem 1rem 1rem 1rem;
    border: 1px solid #e7e0d6;
    border-radius: 10px;
    box-shadow: 0 0 10px #eeeeee;
    background-color: #f6f1eb;
    width: calc(100% - 32px);
    resize: none;
    overflow-y: hidden;
    &::placeholder {
      color: #bebebe;
    }
    &:focus {
      outline: 1px solid #bebebe;
    }
  }
  &::-webkit-scrollbar-thumb {
    border: 3px solid transparent;
    border-radius: 10px;
    background-color: #bebebe;
    background-clip: content-box;
    -webkit-background-clip: content-box;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #bebebe;
    background-clip: border-box;
    -webkit-background-clip: border-box;
  }
  &::-webkit-scrollbar-track:hover {
    background-color: rgb(190, 190, 190, 0.3);
    box-shadow: inset 0px 0px 5px rgb(190, 190, 190, 0.7);
    border-radius: 10px;
  }
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: transparent;
  }
`;
const MyButton = styled.button`
  height: auto;
  display: block;
  margin-right: 1rem;
  margin-bottom: 3rem;
  padding-right: 0.5rem;
  background-color: #fcfcfc;
  color: #f0884e;
  float: right;
  &:hover {
    font-weight: bold;
  }
`;
const DairyContainer = styled.div`
  clear: both;
  padding: 0 1.2rem;
  margin: 0.5rem 0;
`;
const Head = styled.h2`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  font-size: 16px;
  font-weight: bold;
  ${"svg"} {
    padding-right: 8px;
    color: #e0e0e0;
    font-size: 0.8rem;
  }
  ${"div"} {
    &:last-child {
      margin-left: auto;
      cursor: pointer;
      &:hover {
        ${"svg"} {
          color: #011126;
        }
      }
    }
  }
`;
const Body = styled.div`
  padding-left: 20px;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e0e0e0;
`;
const Color = styled.div`
  width: 0.7rem;
  height: 0.7rem;
  margin-right: 0.5rem;
  border-radius: 100%;
  background-color: ${(props) => props.color};
`;

export default Diary;
