import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import styled from "styled-components";
import { useState } from "react";
import Diary from "../components/Diary";
import Memo from "../components/Memo";
import StampBoard from "../components/StampBoard";
import ChallengeLayout from "./ChallengeLayout";
import { useParams } from "react-router-dom";

// const Wrap = styled.div`
//   display: grid;
//   grid-template-columns: 55% 45%;
// `;
// const TabWrap = styled.div`
//   grid-column: 2;
//   box-shadow: #eeeeee 1px 0 30px;
// `;

const ChallengeDetail = () => {
  const test = useParams();

  // 임시 > 챌린지 리스트 들고오기
  const [memolist, setMemolist] = useState([
    { id: 1, title: "밥먹기", memo: "첫번째 내용입니다" },
    { id: 2, title: "운동하기", memo: "두번째 내용입니다" },
    { id: 3, title: "식사하기", memo: "세번째 내용입니다" },
  ]);

  const memo = memolist.find(() => memolist.id == test.id);
  console.log(memo);

  return <ChallengeLayout />;
};

export default ChallengeDetail;
