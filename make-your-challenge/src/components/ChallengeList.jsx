import Collapse from "react-bootstrap/Collapse";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import DataContext from "../context/DataContext";

const ChallengeList = () => {
  const { state, action } = useContext(DataContext);
  const [open, setOpen] = useState([true, true]);

  return (
    <Wrap>
      <hr />
      <h2>
        <span>진행중인 챌린지</span>
        <IconStyle
          open={open[0]}
          onClick={() => setOpen([!open[0], open[1]])}
          aria-controls="collapse-text1"
          aria-expanded={open[0]}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </IconStyle>
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
        <IconStyle
          open={open[1]}
          onClick={() => setOpen([open[0], !open[1]])}
          aria-controls="collapse-text2"
          aria-expanded={open[1]}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </IconStyle>
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
    </Wrap>
  );
};

const Wrap = styled.div`
  ${"hr"} {
    width: 280px;
    transform: translateX(-2.5rem);
    opacity: 0.1;
  }
  ${"h2"} {
    display: flex;
    width: 100%;
    padding: 0.3rem 0;
    margin-top: 2.5rem;
    margin-bottom: 0;
    font-size: 16px;
    font-weight: bold;
  }
  ${"a"} {
    display: block;
    padding: 0.5rem 2rem;
    margin-bottom: 0.1rem;
    color: #444649;
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
const IconStyle = styled.span`
  cursor: pointer;
  margin-left: auto;
  transition: transform 0.35s;
  transform: ${(props) => (props.open ? null : "rotate(180deg)")};
`;

export default ChallengeList;
