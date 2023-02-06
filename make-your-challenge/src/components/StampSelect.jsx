import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import { useContext, useState } from "react";
import DataContext from "../context/DataContext";

const StampSelect = (props) => {
  const { state, action } = useContext(DataContext);
  const { challengeItem } = props;
  const [selectColor, setSelectColor] = useState(state.stamp[0]);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const getDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const date = String(today.getDate() + 1).padStart(2, "0");
    return `${year}. ${month}. ${date}`;
  };

  const select = () => {
    const newStamp = challengeItem.stamp.concat({
      day: challengeItem.stamp.length + 1,
      date: getDate(),
      color: selectColor,
    });
    const newChallengeList = state.currentUser.challengeList.map((item) => {
      if (item.challengeId === challengeItem.challengeId) {
        return { ...item, stamp: newStamp };
      } else {
        return item;
      }
    });
    action.setCurrentUser({
      ...state.currentUser,
      challengeList: newChallengeList,
    });
    handleClose();
  };

  return (
    <div>
      <StampButton onClick={handleShow}>
        {challengeItem.stamp.length + 1}
      </StampButton>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>원하는 색을 선택해주세요!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Board>
            {state.stamp.map((color, index) => (
              <Pallete
                key={index}
                value={color}
                onClick={() => {
                  setSelectColor(color);
                }}
                className={color == selectColor ? "select-color" : undefined}
              />
            ))}
          </Board>
        </Modal.Body>
        <Modal.Footer>
          <MyButton color={"#bebebe"} hover={"#9e9e9e"} onClick={handleClose}>
            취소
          </MyButton>
          <MyButton color={"#fcbda3"} hover={"#f0884e"} onClick={select}>
            선택하기
          </MyButton>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const StampButton = styled.div`
  position: absolute;
  background-color: #e0e0e0;
  color: #011126;
  cursor: pointer;
`;
const Board = styled.div`
  width: 390px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: auto;
  justify-items: center;
  margin: auto;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    margin: 1rem 0.5rem;
    border-radius: 50%;
  }
`;
const Pallete = styled.div`
  background-color: ${(props) => props.value};
  cursor: pointer;
  &.select-color {
    box-shadow: 0 0.7em 0.5em -0.3em #9e9e9e;
    transform: translateY(-0.3em);
    transition: all 0.35s cubic-bezier(0.5, 1.5, 0.15, 1.36);
    &::after {
      content: "✔";
      display: flex;
      width: 2.5rem;
      height: 2.5rem;
      color: #fcfcfc;
      align-items: center;
      justify-content: center;
    }
  }
`;
const MyButton = styled.button`
  background-color: ${(props) => props.color};
  &:hover {
    font-weight: bold;
    background-color: ${(props) => props.hover};
  }
`;

export default StampSelect;
