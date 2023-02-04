import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Stack from "react-bootstrap/Stack";
import styled from "styled-components";
import ChallengeList from "./ChallengeList";
import Profile from "./Profile";
import AddChallenge from "./AddChallenge";
import DeleteChallenge from "./DeleteChallenge";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const { state, action } = useContext(DataContext);
  const navigater = useNavigate();

  const logout = () => {
    const newUserList = state.user.map((user) => {
      if (user.userId === state.currentUser.userId) {
        return state.currentUser;
      } else {
        return user;
      }
    });
    action.setUser(newUserList);
    window.sessionStorage.clear();
    navigater("/");
  };

  return (
    <Wrap>
      <Profile />
      <div className="line" />
      <ChallengeList />

      <Container>
        <AddChallenge />
        <DeleteChallenge />
        <button onClick={logout}>
          <FontAwesomeIcon icon={faRightFromBracket} className="me-3" />
          로그아웃
        </button>
      </Container>
    </Wrap>
  );
}

const Wrap = styled(Stack)`
  padding: 3.5rem 2.5rem;
  height: 100vh;
  min-height: 800px;
  background-color: #f6f1eb;
  text-align: left;
  .line {
    border-bottom: 1px solid rgba(158, 158, 158, 0.3);
    width: 280px;
    transform: translateX(-2.5rem);
    margin-top: 1rem;
    margin-bottom: 2.7rem;
  }
`;
const Container = styled.div`
  margin-top: auto;
  button {
    width: 100%;
    height: 40px;
    padding: 0.5rem;
    background-color: transparent;
    color: #444649;
    font-weight: bold;
    text-align: left;
    transition: all 0.35s;
    &:hover {
      color: #011126;
      border-radius: 5px;
      background-color: #fcbda3;
    }
    &:active {
      background-color: #f0884e;
    }
  }
`;

export default Sidebar;
