import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const navigator = useNavigate();

  return (
    <Wrap>
      <div>
        <h1>Make Your Challenge!</h1>
        <p>목표를 설정하고 30일간 꾸준히 실천해보세요!</p>
        <Button
          onClick={() => {
            navigator("/login");
          }}
        >
          Start
        </Button>
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  div {
    min-height: 100vh;
    display: grid;
    place-content: center;
    text-align: center;
  }
  h1 {
    font-family: "BMJUA";
    font-size: 3rem;
  }
  p {
    color: #9e9e9e;
    margin-bottom: 20px;
  }
`;
const Button = styled.button`
  width: 130px;
  height: 130px;
  margin: auto;
  border: none;
  border-radius: 50%;
  background-color: #f6f1eb;
  color: #9e9e9e;
  font-family: "BMJUA";
  font-size: 1.5rem;
  transition: all 0.35s cubic-bezier(0.39, 0.5, 0.15, 1.36);
  box-shadow: #f6f1eb 0 0px 0px 2px inset;
  &:hover {
    color: #011126;
    font-weight: bold;
    box-shadow: #fcbda3 0 130px 0px 2px inset;
  }
  &:active {
    box-shadow: #f0884e 0 130px 0px 2px inset;
  }
`;

export default Intro;
