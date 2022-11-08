import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";

const Wrap = styled.div`
  width: 320px;
  margin: auto;
  font-size: 18px;
  ${"p"} {
    margin: 0;
    font-weight: bolder;
  }
`;
const MyButton = styled.button`
  display: block;
  width: 100%;
  background-color: #f6f1eb;
  color: #9e9e9e;
  box-shadow: #f6f1eb 0 0px 0px 2px inset;
  &:hover {
    color: #011126;
    font-weight: bold;
    background-color: #f6f1eb;
    box-shadow: #fcbda3 0 50px 0px 2px inset;
  }
  &:active {
    background-color: #fcbda3;
    box-shadow: #f0884e 0 50px 0px 2px inset;
  }
`;
const Notice = styled.div`
  font-size: 13px;
  color: #f0884e;
`

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
      <div className="wrap">
        <form onSubmit={loginUser}>
          <p className="mb-4">로그인</p>
          <input
            className="mb-3"
            type="text"
            placeholder="아이디"
            onChange={(e) => {
              setId(e.target.value);
            }}
            required
          />
          <input
            className="mb-3"
            type="password"
            placeholder="비밀번호"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <Notice className={login && "hidden"}>
            아이디 또는 비밀번호를 잘못 입력했어요! <br />
            다시 확인해주세요!
          </Notice>
          <MyButton className="mt-4" type="submit">
            확인
          </MyButton>
        </form>
      </div>
    </Wrap>
  );
}

export default Login;
