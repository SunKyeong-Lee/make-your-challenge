import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useContext, useState } from "react";
import DataContext from "../context/DataContext";
import styled from "styled-components";

const ActiveStamp = styled.div`
  color: #011126;
  font-family: "BMJUA";
  cursor: pointer;
`;
const Board = styled.div`
  width: 390px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: auto;
  justify-items: center;
  margin: auto;
  ${"div"} {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    margin: 0.5rem;
    border-radius: 50%;
  }
`;
const Pallete = styled.div`
  background-color: ${(props) => props.value};
  cursor: pointer;
  &.select-color {
    box-shadow: 0 0.7em 0.5em -0.3em #9e9e9e;
    transform: translateY(-0.25em);
    transition: all 0.35s cubic-bezier(0.5, 1, 0.15, 1.36);
  }
`;
const MyButton = styled.button`
  background-color: ${(props) => props.color};
  &:hover {
    font-weight: bold;
  }
  &:active {
    background-color: ${(props) => props.active};
  }
`;

const StampSelect = (props) => {
  const { state, action } = useContext(DataContext);
  const { challengeItem } = props; // {challengeId, challengeState...}
  const [selectColor, setSelectColor] = useState(state.stamp[0]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const select = () => {
    const newUserStamp = challengeItem.stamp.concat(selectColor);
    const findIndex = state.user.challengeList.findIndex(
      (n) => n.challengeId == challengeItem.challengeId
    );
    const copyChallengeList = state.user.challengeList;
    if (findIndex != -1) {
      copyChallengeList[findIndex] = {
        ...copyChallengeList[findIndex],
        stamp: newUserStamp,
      };
    }
    action.setUser({ ...state.user, challengeList: copyChallengeList });
    handleClose();
  };

  return (
    <div>
      <ActiveStamp onClick={handleShow}>
        {challengeItem.stamp.length + 1}
      </ActiveStamp>

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
                onClick={() => {setSelectColor(color);}}
                className={color == selectColor ? "select-color" : undefined}
              />
            ))}
          </Board>
        </Modal.Body>
        <Modal.Footer>
          <MyButton color={"#bebebe"} active={"#9e9e9e"} onClick={handleClose}>
            취소
          </MyButton>
          <MyButton color={"#fcbda3"} active={"#f0884e"} onClick={select}>
            선택하기
          </MyButton>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default StampSelect;
