import Collapse from "react-bootstrap/Collapse";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import DataContext from "../context/DataContext";

const ChallengeList = () => {
  const { state } = useContext(DataContext);
  const [open, setOpen] = useState([true, true]);

  return (
    <Wrap>
      <h2>
        <span>진행중인 챌린지</span>
        <IconStyle
          open={open[0]}
          onClick={() => setOpen([!open[0], open[1]])}
          aria-expanded={open[0]}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </IconStyle>
      </h2>
      <Collapse in={open[0]}>
        <div>
          {state.currentUser.challengeList.map(
            (item) =>
              item.stamp.length < 30 && (
                <li key={item.challengeId}>
                  <NavLink to={"/board/" + item.challengeId}>
                    {item.title}
                  </NavLink>
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
          aria-expanded={open[1]}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </IconStyle>
      </h2>
      <Collapse in={open[1]}>
        <div>
          {state.currentUser.challengeList.map(
            (item) =>
              item.stamp.length === 30 && (
                <li key={item.challengeId}>
                  <NavLink to={"/board/" + item.challengeId}>
                    {item.title}
                  </NavLink>
                </li>
              )
          )}
        </div>
      </Collapse>
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 60%;
  overflow-y: auto;
  overflow-x: hidden;
  h2 {
    width: 100%;
    display: flex;
    font-size: 16px;
    font-weight: bold;
    &:nth-child(3) {
      margin-top: 3.5rem;
    }
  }
  a {
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
  .empty {
    padding: 0.5rem 2rem;
    color: #bebebe;
    border: 1px dashed #bebebe;
    border-radius: 5px;
    text-align: center;
  }
  &::-webkit-scrollbar-thumb {
    border: 3px solid transparent;
    border-radius: 10px;
    background-color: rgb(190, 190, 190, 0.5);
    background-clip: content-box;
    -webkit-background-clip: content-box;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgb(190, 190, 190, 0.8);
    background-clip: border-box;
    -webkit-background-clip: border-box;
  }
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: transparent;
  }
`;
const IconStyle = styled.span`
  cursor: pointer;
  margin-left: auto;
  transition: transform 0.35s;
  transform: ${(props) => (props.open ? null : "rotate(180deg)")};
`;

export default ChallengeList;
