import Container from "react-bootstrap/Container";
import styled from "styled-components";
import { useContext, useState } from "react";
import DataContext from "../context/DataContext";
import StampSelect from "./StampSelect";

const MyContainer = styled(Container)`
  padding: 2.5rem 3.5rem;
  .date {
    margin-bottom: 3rem;
    ${"div"} {
      font-size: 23px;
      font-weight: bold;
      font-family: "KOTRAHOPE";
    }
  }
  ${"h2"} {
    margin: 0;
    margin-bottom: 1.5rem;
    padding: 0.25rem 1rem;
    border-left: 0.5rem solid #fcbda3;
    font-size: 20px;
    font-weight: bold;
  }
`;
const Wrap = styled.div`
  width: 305px;
  position: relative;
`;
const Board = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  transform: translateX(-0.4rem);
  ${"div"} {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    margin: 0.4rem;
    border-radius: 50%;
  }
`;
const Empty = styled.div`
  color: #fcfcfc;
  position: absolute;
  background-color: #e0e0e0;
  font-family: "KOTRAHOPE";
`;
const Stamp = styled.div`
  position: absolute;
  background-color: ${(props) => props.color};
`;

const StampBoard = (props) => {
  const { state, action } = useContext(DataContext);
  const { challengeItem } = props; // challengeList: {...}
  const stampBoard = [];
  for (let i = 0; i < 30; i++) {
    stampBoard.push(i);
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <MyContainer>
      <div className="date">
        <div>Today,</div>
        <div>0000.00.00</div>
      </div>
      <h2>{challengeItem.title}</h2>
      <Wrap>
        <Board>
          {stampBoard.map((n, index) => (
            <div key={index}>
              <Empty>{n + 1}</Empty>
            </div>
          ))}
        </Board>
        <Board>
          {challengeItem.stamp.map((color, index) => (
            <div key={index}>
              <Stamp color={color} />
            </div>
          ))}
          {challengeItem.stamp.length < 30 && (
            <div>
              <StampSelect challengeItem={challengeItem} />
            </div>
          )}
        </Board>
      </Wrap>
    </MyContainer>
  );
};

export default StampBoard;
