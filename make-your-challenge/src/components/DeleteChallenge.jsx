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
  const findChallenge = state.currentUser.challengeList.find(
    (item) => item.challengeId == id
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteChallenge = () => {
    const newChallengeList = state.currentUser.challengeList.filter(
      (item) => item.challengeId != id
    );
    action.setCurrentUser({
      ...state.currentUser,
      challengeList: newChallengeList,
    });
    const itemlist1 = newChallengeList.filter(
      (item) => item.stamp.length < 30
    );
    const itemlist2 = newChallengeList.filter(
      (item) => item.stamp.length === 30
    );
    if (itemlist1.length > 0) {
      navigator("/board/" + itemlist1[0].challengeId);
    } else if (itemlist2.length > 0) {
      navigator("/board/" + itemlist2[0].challengeId);
    } else {
      navigator("/board");
    }
    setShow(false);
  };

  return (
    <div>
      <button onClick={handleShow}>
        <FontAwesomeIcon icon={faTrash} className="me-3" />
        챌린지 삭제하기
      </button>

      <ModalStyle show={show} onHide={handleClose} centered>
        {state.currentUser.challengeList.length > 0 ? (
          <>
            <Modal.Body>
              <p>
                <span>{findChallenge?.title}</span> 챌린지를 삭제할까요?
              </p>
              <p>! 삭제된 챌린지는 복구할 수 없어요.</p>
            </Modal.Body>
            <Modal.Footer>
              <MyButton
                color={"#bebebe"}
                hover={"#9e9e9e"}
                onClick={handleClose}
              >
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
          </>
        ) : (
          <>
            <Modal.Body>
              선택된 챌린지가 없어요! 삭제할 챌린지를 선택해주세요.
            </Modal.Body>
            <Modal.Footer>
              <MyButton
                color={"#fcbda3"}
                hover={"#f0884e"}
                onClick={handleClose}
              >
                확인
              </MyButton>
            </Modal.Footer>
          </>
        )}
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
  div {
    border: none;
    .modal-body {
      font-size: 20px;
      word-break: keep-all;
      margin: 1rem 0;
    }
  }
  span {
    padding: 0 0.3rem;
    box-shadow: 0 -8px 0 0 #fce5bc inset;
  }
  p {
    margin: 0;
    &:last-child {
      color: #f0884e;
      font-size: 16px;
      margin-top: 0.5rem;
      padding-left:0.3rem;
    }
  }
`;

export default DeleteChallenge;
