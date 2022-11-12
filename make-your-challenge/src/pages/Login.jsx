import styled from "styled-components";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";

function Login() {
  const { state, action } = useContext(DataContext);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true);
  const navigator = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    const findUser = state.user.find(
      (user) => user.userId === id && user.password === password
    );
    if (findUser) {
      action.setUser(findUser);
      navigator("/main");
    } else {
      setLogin(false);
    }
  };

  return (
    <Wrap>
      <form onSubmit={loginUser}>
        <p>로그인</p>
        <input
          type="text"
          placeholder="아이디"
          onChange={(e) => {setId(e.target.value);}}
          required
        />
        <input
          type="password"
          placeholder="비밀번호"
          onChange={(e) => {setPassword(e.target.value);}}
          required
        />
        <Notice login={login}>
          아이디 또는 비밀번호를 잘못 입력했어요! <br />
          다시 확인해주세요!
        </Notice>
        <MyButton type="submit">확인</MyButton>
      </form>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 320px;
  margin: auto;
  font-size: 18px;
  min-height: 100vh;
  display: grid;
  place-content: center;
  text-align: center;
  ${"p"} {
    margin: 0;
    margin-bottom: 1.5rem;
    font-weight: bolder;
  }
`;
const MyButton = styled.button`
  display: block;
  width: 100%;
  margin-top: 1.5rem;
  color: #9e9e9e;
  background-color: #f6f1eb;
  box-shadow: #f6f1eb 0 0px 0px 2px inset;
  &:hover, &:focus {
    font-weight: bold;
    color: #011126;
    background-color: #f6f1eb;
    box-shadow: #fcbda3 0 50px 0px 2px inset;
    outline: none;
  }
  &:active {
    background-color: #fcbda3;
    box-shadow: #f0884e 0 50px 0px 2px inset;
  }
`;
const Notice = styled.div`
  display: ${(props) => (props.login? "none" : "block")};
  font-size: 13px;
  color: #f0884e;
`;

export default Login;
