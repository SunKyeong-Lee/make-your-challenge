import { useState } from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

const MyContainer = styled(Container)`
  padding: 30px 20px;
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
  ${"label"} {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: #bebebe;
    cursor: pointer;
  }
  ${"input[type=radio]"}:checked {
    ${"label"} {
      background-color: tomato;
    }
  }
`;

const StampBoard = (props) => {
  const { challengeItem } = props;
  // console.log(challengeItem);

  // 테스트
  const [test, setTest] = useState([
    {state: true, color: "tomato"},
    {state: true, color: "yellowgreen"},
    {state: false, color: "cornflowerblue"},
    {state: false, color: ""},
    {state: false, color: ""},
  ]);
  const color = ["tomato", "yellowgreen", "cornflowerblue"];

  const check = (e) => {
    console.log(e.target.checked);
  };

  return (
    <MyContainer>
      <div className="date">
        <div>Today,</div>
        <div>0000.00.00</div>
      </div>
      <h2>{challengeItem.title}</h2>
      <div className="stamp-board">

        {/* 테스트 */}
        {test.map((n, index) => (
          <label htmlFor={"cb" + index} key={index}>
            {index + 1}
            <input
              type="checkbox"
              id={"cb" + index}
              checked={n.state}
              readOnly
              onClick={check}
            />
          </label>
        ))}

      </div>
    </MyContainer>
  );
};

export default StampBoard;
