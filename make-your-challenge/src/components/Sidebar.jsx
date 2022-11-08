import { useState } from "react";
import Stack from "react-bootstrap/Stack";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import ChallengeList from "./ChallengeList";
// import Profile from "./Profile";

const Wrap = styled(Stack)`
  height: 100vh;
  padding: 30px 20px;
  background-color: #f6f1eb;
  text-align: left;
`;

function Sidebar() {
  // 임시 > 챌린지 리스트의 각 챌린지 제목 들고오기
  const [memolist, setMemolist] = useState([
    { id: 1, title: "밥먹기", memo: "첫번째 내용입니다" },
    { id: 2, title: "운동하기", memo: "두번째 내용입니다" },
    { id: 3, title: "식사하기", memo: "세번째 내용입니다" },
  ]);

  return (
    <Wrap>
      {memolist.map((item) => (
        <NavLink to={"/main/" + item.title} key={memolist.id}> {item.title} </NavLink>
      ))}

      {/*
      <Profile />
      <ChallengeList />
       */}
    </Wrap>
  );
}

export default Sidebar;
