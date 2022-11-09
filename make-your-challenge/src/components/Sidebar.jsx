import Stack from "react-bootstrap/Stack";
import styled from "styled-components";
import ChallengeList from "./ChallengeList";

const Wrap = styled(Stack)`
  height: 100vh;
  padding: 30px 20px;
  background-color: #f6f1eb;
  text-align: left;
`;

function Sidebar() {
  return (
    <Wrap>
      {/*
      <Profile />
       */}
      <div>프로필</div>
      <div>프로필</div> <br />

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
