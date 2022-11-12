import styled from "styled-components";
import { useContext, useState } from "react";
import DataContext from "../context/DataContext";
import { useParams } from "react-router-dom";
import Diary from "../components/Diary";
import Memo from "../components/Memo";
import StampBoard from "../components/StampBoard";

const ChallengeDetail = () => {
  const { state } = useContext(DataContext);
  const { id } = useParams(); // id : challengeId(문자열)
  const [tab, setTab] = useState([true, false]);

  const tabAction = () => setTab([!tab[0], !tab[1]]);

  const challengeItem = state.user.challengeList.find(
    (n) => n.challengeId === parseInt(id)
  );

  return (
    <Wrap>
      <StampBoard challengeItem={challengeItem} />

      <TabWrap>
        <MyButton
          onClick={tabAction}
          className={tab[0] ? undefined : "inactive"}
        >
          <div className={tab[0] ? "active" : undefined} />
          Memo
        </MyButton>
        <MyButton
          onClick={tabAction}
          className={tab[1] ? undefined : "inactive"}
        >
          <div className={tab[1] ? "active" : undefined} />
          Diary
        </MyButton>

        <MyTab className={tab[0] ? undefined : "hidden"}>
          <Memo challengeItem={challengeItem} />
        </MyTab>
        <MyTab className={tab[1] ? undefined : "hidden"}>
          <Diary challengeItem={challengeItem} />
        </MyTab>
      </TabWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: grid;
  grid-template-columns: minmax(520px, auto) 1fr;
`;
const TabWrap = styled.div`
  padding: 3.5rem 2.5rem;
  box-shadow: #eeeeee 1px 0 30px;
`;
const MyTab = styled.div`
  &.hidden {
    display: none;
  }
`;
const MyButton = styled.h2`
  display: inline-block;
  position: relative;
  margin: 0;
  margin-bottom: 1.5rem;
  font-size: 23px;
  font-family: "BMJUA";
  transform: translate(8px, 6px);
  z-index: 0;
  cursor: pointer;
  &:first-child::after {
    content: "";
    display: inline-block;
    height: 16px;
    border: 1px solid #bebebe;
    margin: 0 1.5rem 0 1rem;
  }
  ${"div"} {
    &.active {
      position: absolute;
      top: -6px;
      left: -8px;
      width: 18px;
      height: 18px;
      background-color: #fce5bc;
      border-radius: 50%;
      z-index: -1;
    }
  }
  &.inactive {
    color: #bebebe;
  }
`;

export default ChallengeDetail;
