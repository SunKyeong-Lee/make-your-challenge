import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import styled from "styled-components";
import { useContext, useState } from "react";
import DataContext from "../context/DataContext";
import { useParams } from "react-router-dom";
import Diary from "../components/Diary";
import Memo from "../components/Memo";
import StampBoard from "../components/StampBoard";

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 420px 1fr;
`;
const TabWrap = styled.div`
  padding: 30px 20px;
  box-shadow: #eeeeee 1px 0 30px;
  .nav {
    border: none;
    margin-bottom: 1rem;
  }
  .nav-link {
    font-family: "yg-jalnan";
    background-color: #fcfcfc;
    :hover {
      border: 1px solid #fcfcfc;
    }
  }
  .active {
    border: 1px solid #fcfcfc;
    background-color: #fcfcfc;
  }
`;

const ChallengeDetail = () => {
  const { state } = useContext(DataContext);
  const { id } = useParams(); // id : challengeId(문자열)
  const [key, setKey] = useState("memo");

  const challengeItem = state.user.challengeList.find(
    (n) => n.challengeId === parseInt(id)
  );

  return (
    <Wrap>
      <StampBoard challengeItem={challengeItem} />

      <TabWrap>
        <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
          <Tab eventKey="memo" title="Memo">
            <Memo challengeItem={challengeItem} />
          </Tab>
          <Tab eventKey="diary" title="Diary">
            <Diary challengeItem={challengeItem} />
          </Tab>
        </Tabs>
      </TabWrap>
    </Wrap>
  );
};

export default ChallengeDetail;
