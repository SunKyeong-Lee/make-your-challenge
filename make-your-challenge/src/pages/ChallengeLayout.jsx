import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import styled from "styled-components";
import { useState } from "react";
import Diary from "../components/Diary";
import Memo from "../components/Memo";
import StampBoard from "../components/StampBoard";
import { useParams } from "react-router-dom";

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 55% 45%;
`;
const TabWrap = styled.div`
  grid-column: 2;
  box-shadow: #eeeeee 1px 0 30px;
`;

const ChallengeLayout = () => {
  const [key, setKey] = useState("memo");

  return (
    <Wrap>
      <StampBoard />

      <TabWrap>
        <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
          <Tab eventKey="memo" title="Memo">
            <Memo />
          </Tab>
          <Tab eventKey="diary" title="Diary">
            <Diary />
          </Tab>
        </Tabs>
      </TabWrap>
    </Wrap>
  );
};

export default ChallengeLayout;
