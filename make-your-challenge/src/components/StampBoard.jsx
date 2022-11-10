import { useState } from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

const MyContainer = styled(Container)`
  padding: 2.5rem 3rem;
  .date {
    margin-bottom: 3rem;
    ${"div"} {
      font-size: 20px;
      font-family: "yg-jalnan";
    }
  }
  ${"h2"} {
    margin: 0;
    padding: 0.25rem 1rem;
    border-left: 0.5rem solid #fcbda3;
    font-size: 20px;
    font-weight: bold;
  }
`;
const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  ${"div"} {
    width: 48px;
    height: 48px;
    background-color: #e0e0e0;
    border-radius: 50%;
    color: #f6f1eb;
  }
`;

const StampBoard = (props) => {
  const { challengeItem } = props; // challengeList: {...}
  const stampBoard = [];
  for (let i = 0; i < 30; i++) {
    stampBoard.push(i);
  }

  // 테스트

  return (
    <MyContainer>
      <div className="date">
        <div>Today,</div>
        <div>0000.00.00</div>
      </div>
      <h2>{challengeItem.title}</h2>
      <Board>
        {stampBoard.map((n, index) => (
          <div key={index} n={n+1}>
            {n + 1}
          </div>
        ))}
      </Board>
    </MyContainer>
  );
};

export default StampBoard;
