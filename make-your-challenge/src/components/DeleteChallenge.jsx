import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteChallenge = () => {
  const { id } = useParams(); // id : challengeId(문자열)
  const [show, setShow] = useState(false);
  const navigator = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteChallenge = () => {

  }

  return (
    <div>
      <button onClick={handleShow}>
        <FontAwesomeIcon icon={faTrash} className="me-3" />
        챌린지 삭제하기
      </button>

      <ModalStyle show={show} onHide={handleClose} centered>
        <Modal.Header closeButton />
        <Modal.Body>
          정말로 ㅇㅇㅇ 챌린지를 삭제할까요?
        </Modal.Body>
        <Modal.Footer>
          <MyButton color={"#bebebe"} hover={"#9e9e9e"} onClick={handleClose}>
            취소
          </MyButton>
          <MyButton color={"#fcbda3"} hover={"#f0884e"} onClick={deleteChallenge}>
            삭제
          </MyButton>
        </Modal.Footer>
      </ModalStyle>
    </div>
  );
}

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

export default DeleteChallenge;