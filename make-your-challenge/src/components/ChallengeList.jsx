import Collapse from "react-bootstrap/Collapse";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import DataContext from "../context/DataContext";

const MyStyle = styled.div`
  ${"h2"} {
    display: flex;
    width: 100%;
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
`;

const ChallengeList = () => {
  const { state, action } = useContext(DataContext);
  const [open, setOpen] = useState(true);

  return (
    <MyStyle>
      <h2>
        <span>진행중인 챌린지</span>
        <span
          onClick={() => setOpen(!open)}
          aria-controls="collapse-text1"
          aria-expanded={open}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </h2>
      <Collapse in={open}>
        <div id="collapse-text1">
          {state.user.challengeList.map(
            (item) =>
              item.challengeState === 1 && (
                <li key={item.challengeId}>
                  <NavLink to={"/main/" + item.title}>{item.title}</NavLink>
                </li>
              )
          )}
        </div>
      </Collapse>

      {/*
      <details open className="mt-5">
        <summary>
          <span>완료한 챌린지</span>
          <span>
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
        </summary>
        <div>
          {state.user.challengeList.map(
            (item) =>
              item.challengeState === 0 && (
                <li key={item.challengeId}>
                  <NavLink to={"/main/" + item.title}>{item.title}</NavLink>
                </li>
              )
          )}
        </div>
      </details>
       */}
    </MyStyle>
  );
};

export default ChallengeList;
