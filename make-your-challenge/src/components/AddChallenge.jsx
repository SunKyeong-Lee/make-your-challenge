import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import { useContext, useState } from "react";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const AddChallenge = () => {
  const { state, action } = useContext(DataContext);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const navigator = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addChallenge = () => {
    const newChallengeList = state.user.challengeList.concat({
      challengeId: state.user.challengeCount + 1,
      challengeState: 1,
      title: title,
      stamp: [],
      memo: [],
      diary: [],
    });
    action.setUser({
      ...state.user,
      challengeList: newChallengeList,
      challengeCount: state.user.challengeCount + 1,
    });
    setShow(false);
    navigator("/board/" + (state.user.challengeCount + 1));
  };

  return (
    <div>
      <button onClick={handleShow}>
        <FontAwesomeIcon icon={faSquarePlus} className="me-3" />
        새 챌린지 만들기
      </button>

      <ModalStyle show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>새로 만들 챌린지 제목을 적어주세요!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            onChange={(e) => {setTitle(e.target.value);}}
            placeholder="챌린지 제목"
          />
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
  ${"div"} {
    border: none;
    ${"input"} {
      margin: 0;
      background-color: #ffffff;
      &:focus {
        background-color: #fcfcfc;
      }
    }
  }
`;

export default AddChallenge;
