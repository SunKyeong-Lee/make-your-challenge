import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useContext, useLayoutEffect, useRef, useState } from "react";
import DataContext from "../context/DataContext";

const Memo = (props) => {
  const { state, action } = useContext(DataContext);
  const { challengeItem } = props;
  const [show, setShow] = useState(false);
  const textRef = useRef();

  useLayoutEffect(() => {
    if (textRef.current !== null) textRef.current.focus();
  });

  const resizeTextarea = () => {
    textRef.current.style.height = "auto";
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  };

  const addMemo = (e) => {
    if (e.target.value.trim() == "") {
      textRef.current.value = "";
      textRef.current.style.height = "auto";
      setShow(false);
      return;
    }
    const newMemo = challengeItem.memo.concat({
      memoId: state.currentUser.memoCount,
      text: e.target.value,
    });
    const newChallengeList = state.currentUser.challengeList.map((item) => {
      if (item.challengeId === challengeItem.challengeId) {
        return { ...item, memo: newMemo };
      } else {
        return item;
      }
    });
    action.setCurrentUser({
      ...state.currentUser,
      challengeList: newChallengeList,
      memoCount: state.currentUser.memoCount + 1,
    });
    setShow(false);
    textRef.current.value = "";
    textRef.current.style.height = "auto";
  };

  const deleteMemo = (memo) => {
    const newMemo = challengeItem.memo.filter(
      (item) => item.memoId != memo.memoId
    );
    const newChallengeList = state.currentUser.challengeList.map((item) => {
      if (item.challengeId === challengeItem.challengeId) {
        return { ...item, memo: newMemo };
      } else {
        return item;
      }
    });
    action.setCurrentUser({
      ...state.currentUser,
      challengeList: newChallengeList,
    });
  };

  return (
    <Wrap>
      {challengeItem.memo.length == 0 ? (
        <MemoStyle style={show ? { display: "none" } : { color: "#bebebe" }}>
          아직 작성된 메모가 없어요!
          <br />
          아래 버튼을 눌러 메모를 추가할 수 있어요!
        </MemoStyle>
      ) : undefined}
      {challengeItem.memo.map((memo) => (
        <MemoStyle key={memo.memoId}>
          <div>{memo.text}</div>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => {
              deleteMemo(memo);
            }}
          />
        </MemoStyle>
      ))}
      <textarea
        rows={1}
        style={show ? { display: "block" } : { display: "none" }}
        onChange={resizeTextarea}
        onBlur={addMemo}
        ref={textRef}
      />
      <Button
        onClick={() => {
          setShow(true);
        }}
      >
        <FontAwesomeIcon icon={faPlus} className="me-3" />새 메모
      </Button>
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
    &:focus {
      outline: 1px solid #bebebe;
      min-height: 120px;
    }
  }
  &::-webkit-scrollbar-thumb {
    border: 3px solid transparent;
    border-radius: 10px;
    background-color: rgb(190, 190, 190, 0.5);
    background-clip: content-box;
    -webkit-background-clip: content-box;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgb(190, 190, 190, 0.8);
    background-clip: border-box;
    -webkit-background-clip: border-box;
  }
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: transparent;
  }
`;
const MemoStyle = styled.div`
  display: flex;
  min-height: 120px;
  padding: 1.5rem 1.2rem;
  margin: 1.5rem 1rem 1rem 1rem;
  border: 1px solid #e7e0d6;
  border-radius: 10px;
  box-shadow: 0 0 10px #eeeeee;
  background-color: #f6f1eb;
  svg {
    color: #bebebe;
    margin-left: auto;
    padding-left: 1rem;
    cursor: pointer;
    &:hover {
      color: #011126;
    }
  }
`;
const Button = styled.button`
  height: auto;
  display: block;
  margin-right: 1rem;
  padding-right: 0.5rem;
  background-color: #fcfcfc;
  color: #f0884e;
  float: right;
  &:hover {
    font-weight: bold;
  }
`;

export default Memo;
