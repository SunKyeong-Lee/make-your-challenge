import Stack from "react-bootstrap/Stack";
import styled from "styled-components";
import ChallengeList from "./ChallengeList";
import Profile from "./Profile";

const Wrap = styled(Stack)`
  height: 100vh;
  padding: 2.5rem 2rem;
  background-color: #f6f1eb;
  text-align: left;
`;

function Sidebar() {
  return (
    <Wrap>
      <Profile />
      <ChallengeList />

      <div className="mt-auto">
        <div>옵션</div>
        <div>옵션</div>
        <div>옵션</div>
      </div>
    </Wrap>
  );
}

export default Sidebar;
