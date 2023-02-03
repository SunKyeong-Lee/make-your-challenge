import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Stack from "react-bootstrap/Stack";
import styled from "styled-components";
import ChallengeList from "./ChallengeList";
import Profile from "./Profile";
import AddChallenge from "./AddChallenge";
import DeleteChallenge from "./DeleteChallenge";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigator = useNavigate();

  const logout = () => {
    navigator("/");
    window.sessionStorage.clear();
  }

  return (
    <Wrap>
      <Profile />
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
  background-color: #f6f1eb;
  text-align: left;
`;
const Container = styled.div`
  margin-top: auto;
  ${"button"} {
    width: 100%;
    height: 40px;
    padding: 0.5rem;
    background-color: #f6f1eb;
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
