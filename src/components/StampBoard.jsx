import Container from "react-bootstrap/Container";
import styled from "styled-components";
import StampSelect from "./StampSelect";

const StampBoard = (props) => {
  const { challengeItem } = props; // challengeList: {...}

  const getDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const date = String(today.getDate() + 1).padStart(2, "0");
    return `${year}. ${month}. ${date}`;
  };

  const emptyBoard = [];
  for (let i = challengeItem.stamp.length + 1; i < 30; i++) {
    emptyBoard.push(i);
  }

  return (
    <MyContainer>
      <div className="date">
        <div>Today,</div>
        <div>{getDate()}</div>
      </div>
      <h2>{challengeItem.title}</h2>
      <Board>
        {challengeItem.stamp.map((el) => (
          <FillStamp
            key={el.day}
            color={el.color}
            className={el.day === challengeItem.stamp.length && "stamp-fill"}
          />
        ))}
        {challengeItem.stamp.length < 30 && (
          <StampSelect challengeItem={challengeItem} />
        )}
        {emptyBoard.map((num, index) => (
          <EmptyStamp key={index}>{num + 1}</EmptyStamp>
        ))}
      </Board>
      <div>
        * 차례가 된 숫자를 클릭하면 스티커를 붙일 수 있어요!
        <br />
        * 한 번 붙인 스티커는 제거하거나 바꿀 수 없어요!
      </div>
    </MyContainer>
  );
};

const MyContainer = styled(Container)`
  padding: 3.5rem 4rem;
  .date {
    margin-bottom: 3rem;
    div {
      font-size: 23px;
      font-family: "BMJUA";
    }
  }
  h2 {
    margin: 0;
    margin-bottom: 2rem;
    padding: 0.25rem 1rem;
    border-left: 0.5rem solid #fcbda3;
    font-size: 20px;
    font-weight: bold;
  }
`;
const Board = styled.div`
  display: grid;
  margin-bottom: 3rem;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  transform: translateX(-0.5rem);
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.5rem;
    height: 3.5rem;
    margin: 0.5rem;
    border-radius: 50%;
    font-family: "BMJUA";
  }
`;
const EmptyStamp = styled.div`
  color: #fcfcfc;
  background-color: #e0e0e0;
  cursor: default;
`;
const FillStamp = styled.div`
  background-color: ${(props) => props.color};
  &.stamp-fill {
    animation: stampFill 0.8s;
  }
  @keyframes stampFill {
    0% {
      animation-timing-function: ease-in;
      background-color: #e0e0e0;
      opacity: 1;
      transform: scale(1);
    }
    20% {
      animation-timing-function: ease-out;
      opacity: 0.5;
      transform: scale(1);
    }
    35% {
      background-color: #e0e0e0;
      opacity: 0;
      transform: scale(1);
    }
    40% {
      animation-timing-function: ease-out;
      opacity: 1;
      transform: scale(0);
    }
    60% {
      animation-timing-function: ease-in-out;
      transform: scale(1.2);
    }
    80% {
      transform: scale(0.9);
    }
    to {
      transform: scale(1);
    }
  }
`;

export default StampBoard;
