import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Diary from "../components/Diary";
import Memo from "../components/Memo";
import StampBoard from "../components/StampBoard";
import { useNavigate, useParams } from "react-router-dom";

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 55% 45%;
`;
const TabWrap = styled.div`
  grid-column: 2;
  box-shadow: #eeeeee 1px 0 30px;
`;

const ChallengeDetail = () => {
  const [key, setKey] = useState("memo");
  // const { id } = useParams();

  // // 임시 > 챌린지 리스트의 각 챌린지 제목 들고오기
  // const [memolist, setMemolist] = useState([
  //   { id: 1, title: "밥먹기", memo: "첫번째 내용입니다" },
  //   { id: 2, title: "운동하기", memo: "두번째 내용입니다" },
  //   { id: 3, title: "식사하기", memo: "세번째 내용입니다" },
  // ]);
  // // console.log(test);   // {id:식사하기}
  // // console.log(title);  // 식사하기
  // const memo = memolist.find((n) => (n.title === id))
  // // console.log(memo);

  return (
    <Wrap>
      <StampBoard /* memo={memo} props으로 넘기기 */ />  

      <TabWrap>
        <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
          <Tab eventKey="memo" title="Memo">
            <Memo /* memo={memo} props으로 넘기기 */ />
          </Tab>
          <Tab eventKey="diary" title="Diary">
            <Diary /* memo={memo} props으로 넘기기 */ />
          </Tab>
        </Tabs>
      </TabWrap>
    </Wrap>
  );
};

export default ChallengeDetail;
