import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DataContext from "../context/DataContext";

const DeleteChallenge = () => {
  const { state, action } = useContext(DataContext);
  const { id } = useParams(); // id : challengeId(문자열)
  const [show, setShow] = useState(false);
  const navigator = useNavigate();
  const challengeTitle = state.user.challengeList.find(
    (item) => item.challengeId == id
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteChallenge = () => {
    const newChallengeList = state.user.challengeList.filter(
      (item) => item.challengeId != id
    );
    console.log(newChallengeList);
    action.setUser({
      ...state,
      challengeList: newChallengeList,
    });
    const item = newChallengeList.filter((item) => item.challengeState === 1);
    navigator("/main/" + item[0].challengeId);
    setShow(false);
  };

  return (
    <div>
      <button onClick={handleShow}>
        <FontAwesomeIcon icon={faTrash} className="me-3" />
        챌린지 삭제하기
      </button>

      <ModalStyle show={show} onHide={handleClose} centered>
        <Modal.Header closeButton />
        <Modal.Body>
          <span>{challengeTitle == undefined ? "" : challengeTitle.title}</span> 챌린지를 삭제할까요?
        </Modal.Body>
        <Modal.Footer>
          <MyButton color={"#bebebe"} hover={"#9e9e9e"} onClick={handleClose}>
            취소
          </MyButton>
          <MyButton
            color={"#fcbda3"}
            hover={"#f0884e"}
            onClick={deleteChallenge}
          >
            삭제
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
    &.modal-body {
      font-size: 23px;
      word-break: keep-all;
    }
  }
  ${"span"} {
    padding: 0 0.3rem;
    box-shadow: 0 -8px 0 0 #fce5bc inset;
  }
`;

export default DeleteChallenge;
