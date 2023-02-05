import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import DataContext from "../context/DataContext";

const AddChallenge = () => {
  const { state, action } = useContext(DataContext);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [titleCheck, setTitleCheck] = useState(true);
  const navigator = useNavigate();

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setTitle("");
    setTitleCheck(true);
  };

  const addChallenge = () => {
    if (title.trim() === "") {
      setTitleCheck(false);
      return;
    }
    const newChallengeList = state.currentUser.challengeList.concat({
      challengeId: state.currentUser.challengeCount,
      challengeState: 1,
      title: title,
      stamp: [],
      memo: [],
      diary: [],
    });
    action.setCurrentUser({
      ...state.currentUser,
      challengeList: newChallengeList,
      challengeCount: state.currentUser.challengeCount + 1,
    });
    setShow(false);
    navigator("/board/" + (state.currentUser.challengeCount));
  };

  return (
    <div>
      <button onClick={handleShow}>
        <FontAwesomeIcon icon={faSquarePlus} className="me-3" />새 챌린지 만들기
      </button>

      <ModalStyle show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>새로 만들 챌린지 제목을 적어주세요!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            onChange={(e) => {
              if (e.target.focus) {
                setTitleCheck(true);
              }
              setTitle(e.target.value);
            }}
            placeholder="챌린지 제목"
          />
          <Notice titleCheck={titleCheck}>
            ※ 제목이 비어있어요! 제목을 입력해주세요!
          </Notice>
        </Modal.Body>
        <Modal.Footer>
          <MyButton color={"#bebebe"} hover={"#9e9e9e"} onClick={handleClose}>
            취소
          </MyButton>
          <MyButton color={"#fcbda3"} hover={"#f0884e"} onClick={addChallenge}>
            만들기
          </MyButton>
        </Modal.Footer>
      </ModalStyle>
    </div>
  );
};

const MyButton = styled.button`
  background-color: ${(props) => props.color};
  &:hover {
    font-weight: bold;
    background-color: ${(props) => props.hover};
  }
`;
const ModalStyle = styled(Modal)`
  .modal-content {
    padding: 0.5rem;
  }
  div {
    border: none;
    input {
      margin: 0;
      background-color: #ffffff;
      &:focus {
        background-color: #fcfcfc;
      }
    }
    p {
      margin-top: 1rem;
      margin-bottom: 0;
    }
  }
`;
const Notice = styled.div`
  display: ${(props) => (props.titleCheck ? "none" : "inline-block")};
  color: #f0884e;
  margin-top: 1rem;
`;

export default AddChallenge;
