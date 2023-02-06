import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import { useContext, useRef, useState } from "react";
import DataContext from "../context/DataContext";

const Diary = (props) => {
  const { state, action } = useContext(DataContext);
  const { challengeItem } = props;
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const textRef = useRef();

  const resizeTextarea = (e) => {
    setShow(false);
    setText(e.target.value);
    textRef.current.style.height = "auto";
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  };

  const addDiary = () => {
    const copyStamp = [...challengeItem.stamp];
    const isCheckDiary = Object.keys(copyStamp[copyStamp.length - 1]).includes(
      "diary"
    );
    if (text.trim() == "") {
      alert("내용을 입력해주세요!");
      setText("");
      textRef.current.value = "";
    } else if (!isCheckDiary) {
      // 수정
      copyStamp[copyStamp.length - 1].diary = text;
      action.setCurrentUser({
        ...state.currentUser,
        stamp: copyStamp,
      });
      setText("");
      textRef.current.value = "";
      textRef.current.style.height = "auto";
    } else {
      setShow(true);
    }
  };

  const deleteDiary = (item) => {
    // 삭제 확인 문구 추가 ?
    const newStamp = challengeItem.stamp.map((el) => {
      if (Object.keys(item).includes("diary")) {
        el.day === item.day && delete el.diary
        return {...el};
      } else {
        return item;
      }
    });
    console.log(newStamp)

    // const newChallengeList = state.currentUser.challengeList.map((el) => {
    //   if (el.challengeId === challengeItem.challengeId) {
    //     return { ...el, stamp: newStamp };
    //   } else {
    //     return el;
    //   }
    // });
    // console.log(newChallengeList)
    // action.setCurrentUser({
    //   ...state.currentUser,
    //   challengeList: newChallengeList,
    // }); 
  };

  // 일기 수정
  const modifyDiary = () => {};

  return (
    <Wrap>
      <textarea
        rows={1}
        placeholder="오늘의 챌린지는 어땠나요?"
        onChange={resizeTextarea}
        ref={textRef}
      />
      <Notice show={show}>
        !! <span>{challengeItem.stamp.length}일차</span> 일기가 이미 작성되어
        있어요.
        <br />
        스티커를 붙여야 다음 일기를 작성할 수 있어요.
        <br />
        작성한 일기의 내용 수정은 아래에서 가능해요.
      </Notice>
      <button onClick={addDiary}>작성 완료</button>
      {challengeItem.stamp
        .slice(0)
        .reverse()
        .map((stamp) => (
          <DairyContainer key={stamp.day}>
            <DiaryHead>
              <Color color={stamp.color} />
              <div>
                Day {stamp.day} :: {stamp.date}
              </div>
              <div>
                <FontAwesomeIcon icon={faPenToSquare} />
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => {
                    deleteDiary(stamp);
                  }}
                />
              </div>
            </DiaryHead>
            <DiaryBody>
              {stamp.diary ? stamp.diary : <span>작성된 일기가 없어요!</span>}
            </DiaryBody>
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
  textarea {
    width: calc(100% - 32px);
    padding: 1.5rem 1.2rem;
    margin: 1.5rem 1rem 1rem 1rem;
    border: 1px solid #e7e0d6;
    border-radius: 10px;
    box-shadow: 0 0 10px #eeeeee;
    background-color: #f6f1eb;
    resize: none;
    overflow-y: hidden;
    min-height: 74px;
    &::placeholder {
      color: #bebebe;
    }
    &:focus {
      outline: 1px solid #bebebe;
    }
  }
  button {
    height: auto;
    margin-right: 1rem;
    margin-bottom: 3rem;
    padding-right: 0.5rem;
    background-color: transparent;
    color: #f0884e;
    float: right;
    &:hover {
      font-weight: bold;
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
const Notice = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  font-size: 14px;
  background-color: rgb(252, 189, 163, 0.5);
  border-radius: 10px;
  padding: 0.5rem 1rem;
  margin: 0 1rem 1rem;
  span {
    font-weight: bold;
  }
`;
const DairyContainer = styled.div`
  clear: both;
  border-bottom: 1px solid #e0e0e0;
  padding: 1rem 0;
  margin: 0 1.2rem;
  svg {
    margin-left: 0.5rem;
    padding: 0.2rem;
    color: #e0e0e0;
    &:hover {
      color: #011126;
      cursor: pointer;
    }
  }
`;
const DiaryHead = styled.h2`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  font-size: 16px;
  font-weight: bold;
  div:last-child {
    margin-left: auto;
  }
`;
const DiaryBody = styled.div`
  padding: 0 1.2rem 1rem;
  span {
    color: #c2c2c2;
  }
`;
const Color = styled.div`
  width: 0.7rem;
  height: 0.7rem;
  margin-right: 0.5rem;
  border-radius: 100%;
  background-color: ${(props) => props.color};
`;
export default Diary;
