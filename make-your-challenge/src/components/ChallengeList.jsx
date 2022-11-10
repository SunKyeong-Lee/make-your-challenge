import Collapse from "react-bootstrap/Collapse";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import DataContext from "../context/DataContext";

const MyStyle = styled.div`
  border-top: 1px solid #bebebe;
  ${"h2"} {
    display: flex;
    width: 100%;
    padding: 0.3rem 0;
    margin-top: 3rem;
    margin-bottom: 0;
    font-size: 16px;
    font-weight: bold;
  }
  ${"a"} {
    display: block;
    padding: 0.3rem 1.5rem;
    color: rgb(68, 70, 73);
    text-decoration: none;
    transition: all 0.35s;
    &:hover {
      color: #011126;
      border-radius: 5px;
      background-color: #fcbda3;
      font-weight: bold;
    }
    &:active {
      background-color: #f0884e;
    }
  }
  .active {
    border-radius: 5px;
    color: #011126;
    background-color: #fcbda3;
    font-weight: bold;
  }
`;
const MySpan = styled.span`
  cursor: pointer;
  margin-left: auto;
  transition: transform 0.35s;
  transform: ${(props) => (props.open ? null : "rotate(180deg)")};
`;

const ChallengeList = () => {
  const { state } = useContext(DataContext);
  const [open, setOpen] = useState([true, true]);

  return (
    <MyStyle>
      <h2>
        <span>진행중인 챌린지</span>
        <MySpan
          open={open[0]}
          onClick={() => setOpen([!open[0], open[1]])}
          aria-controls="collapse-text1"
          aria-expanded={open[0]}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </MySpan>
      </h2>
      <Collapse in={open[0]}>
        <div id="collapse-text1">
          {state.user.challengeList.map(
            (item) =>
              item.challengeState === 1 && (
                <li key={item.challengeId}>
                  <NavLink to={"/main/" + item.challengeId}>{item.title}</NavLink>
                </li>
              )
          )}
        </div>
      </Collapse>

      <h2>
        <span>완료한 챌린지</span>
        <MySpan
          open={open[1]}
          onClick={() => setOpen([open[0], !open[1]])}
          aria-controls="collapse-text2"
          aria-expanded={open[1]}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </MySpan>
      </h2>
      <Collapse in={open[1]}>
        <div id="collapse-text2">
          {state.user.challengeList.map(
            (item) =>
              item.challengeState === 0 && (
                <li key={item.challengeId}>
                  <NavLink to={"/main/" + item.challengeId}>{item.title}</NavLink>
                </li>
              )
          )}
        </div>
      </Collapse>
    </MyStyle>
  );
};

export default ChallengeList;
