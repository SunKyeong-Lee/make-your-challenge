import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useContext, useEffect, useRef, useState } from "react";
import DataContext from "../context/DataContext";
import cloneDeep from "lodash.clonedeep";

const Diary = (props) => {
  const { state, action } = useContext(DataContext);
  const { challengeItem } = props;
  const [diary, setDiary] = useState("");
  const [show, setShow] = useState(false);
  const textRef = useRef([]);
  const copyStamp = cloneDeep(challengeItem.stamp);

  const modifyCurrentUser = (modifyStamp) => {
    const newChallengeList = state.currentUser.challengeList.map((item) => {
      if (item.challengeId === challengeItem.challengeId) {
        return { ...item, stamp: modifyStamp };
      } else {
        return item;
      }
    });
    action.setCurrentUser({
      ...state.currentUser,
      challengeList: newChallengeList,
    });
  };

  const resizeTextarea = (day, e) => {
    setShow(false);
    setDiary(e.target.value);
    textRef.current[day].style.height = "auto";
    textRef.current[day].style.height =
      textRef.current[day].scrollHeight + "px";
  };

  const addDiary = (day) => {
    const isCheckDiary = Object.keys(copyStamp[copyStamp.length - 1]).includes(
      "diary"
    );
    if (diary.trim() == "") {
      alert("내용을 입력해주세요!");
      setDiary("");
      textRef.current[0].value = "";
    } else if (!isCheckDiary) {
      copyStamp[copyStamp.length - 1].diary = diary;
      modifyCurrentUser(copyStamp);
      setDiary("");
      textRef.current[day].value = diary;
      textRef.current[0].value = "";
      textRef.current[0].style.height = "auto";
    } else {
      setShow(true);
    }
  };

  const deleteDiary = (day) => {
    const newStamp = copyStamp.map((stamp) => {
      if (Object.keys(stamp).includes("diary")) {
        stamp.day === day && delete stamp.diary;
        return { ...stamp };
      } else {
        return stamp;
      }
    });
    modifyCurrentUser(newStamp);
  };

  const modifyActive = (day) => {
    const value = textRef.current[day].value;
    textRef.current[day].disabled = false;
    textRef.current[day].focus();
    textRef.current[day].value = "";
    textRef.current[day].value = value;
  };

  const modifyDiary = (day) => {
    textRef.current[day].disabled = true;
    const newStamp = copyStamp.map((stamp) =>
      stamp.day === day ? { ...stamp, diary: diary } : stamp
    );
    modifyCurrentUser(newStamp);
    setDiary("");
  };

  const toggleButton = () => {};

  useEffect(() => {
    setShow(false);
  }, [challengeItem]);

  return (
    <Wrap>
      <div>
        <textarea
          rows={1}
          placeholder="오늘의 챌린지는 어땠나요?"
          onChange={(e) => {
            resizeTextarea(0, e);
          }}
          ref={(el) => (textRef.current[0] = el)}
        />
        <Notice show={show}>
          !! <span>{challengeItem.stamp.length}일차</span> 일기가 이미 작성되어 있어요.
          <br />
          스티커를 붙여야 다음 일기를 작성할 수 있어요.
          <br />
          작성한 일기의 내용 수정은 아래에서 가능해요.
        </Notice>
        <button
          onClick={() => {
            addDiary(challengeItem.stamp.length);
          }}
        >
          작성 완료
        </button>
      </div>
      {challengeItem.stamp.length === 0 ? (
        <div className="empty">
          <div>
            아직 부착한 스티커가 없어요!
            <br />
            오늘의 챌린지를 완료했다면 스티커를 붙여보세요!
          </div>
        </div>
      ) : (
        <div>
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
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      onClick={() => {
                        modifyActive(stamp.day);
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => {
                        deleteDiary(stamp.day);
                      }}
                    />
                  </div>
                </DiaryHead>
                <DiaryBody>
                  <textarea
                    defaultValue={stamp.diary && stamp.diary}
                    ref={(el) => (textRef.current[stamp.day] = el)}
                    onChange={(e) => {
                      resizeTextarea(stamp.day, e);
                    }}
                    onBlur={() => {
                      modifyDiary(stamp.day);
                    }}
                    placeholder="작성된 일기가 없어요!"
                    disabled
                  />
                </DiaryBody>
              </DairyContainer>
            ))}
        </div>
      )}
      <div>
        <button>일기를 작성한 날짜만 보기 : off</button>
        <button>Go Top</button>
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  height: calc(100vh - 164px);
  min-height: 632px;
  box-sizing: border-box;
  overflow-y: auto;
  white-space: pre-wrap;
  display: flex;
  flex-direction: column;
  button {
    height: auto;
    display: flex;
    margin: 0 1rem 0 auto;
    padding: 0 0.5rem;
    background-color: transparent;
    color: #f0884e;
    &:hover {
      font-weight: bold;
    }
  }
  > div:nth-child(1) {
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
  }
  > div:nth-child(2) {
    overflow-y: auto;
    margin: 2rem 0 1rem 0;
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
    &::-webkit-scrollbar-track {
      border: 3px solid transparent;
      border-radius: 10px;
      background-color: rgb(190, 190, 190, 0.3);
      background-clip: content-box;
      -webkit-background-clip: content-box;
    }
    &::-webkit-scrollbar-track:hover {
      border: none;
      box-shadow: inset 0px 0px 5px rgb(190, 190, 190, 0.7);
      background-clip: border-box;
      -webkit-background-clip: border-box;
    }
    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
      background-color: transparent;
    }
    &.empty {
      height: 100%;
      color: #a5a5a5;
      background-color: #eeeeee;
      border-radius: 10px;
      margin: 2.5rem 1rem 1rem;
      padding: 2.5rem;
      > div {
        text-align: center;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  > div:nth-child(3) {
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    button {
      display: inline-block;
      margin: 0 1rem;
      padding: 0.5rem;
    }
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
  padding: 0 1.2rem;
  textarea {
    height: auto;
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 0;
    resize: none;
    &:focus {
      background-color: #e0e0e0;
      outline: none;
    }
    &::placeholder {
      color: #c2c2c2;
    }
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
