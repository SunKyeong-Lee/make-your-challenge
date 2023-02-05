import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";

const Layout = () => {
  const { state } = useContext(DataContext);
  const navigator = useNavigate();

  useEffect(() => {
    if (state.currentUser.challengeList.length > 0) {
      const item = state.currentUser.challengeList.filter(
        (item) => item.stamp.length < 30
      );
      navigator("/board/" + item[0].challengeId);
    }
  }, []);

  return (
    <Wrap>
      <Sidebar />
      {state.currentUser.challengeList.length === 0 ? (
        <Container>
          <div>
            <p>아직 작성된 챌린지가 없어요!</p>
            <p>
              메뉴에서 <span>"새 챌린지 만들기"</span>를 눌러 챌린지를 만들 수 있어요!
            </p>
          </div>
        </Container>
      ) : (
        <Outlet />
      )}
    </Wrap>
  );
};

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
`;
const Container = styled.div`
  background-color: #eeeeee;
  border-radius: 10px;
  width: 80%;
  height: 80%;
  margin: auto;
  padding: 5rem;
  text-align: center;
  word-break: keep-all;
  div {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  span {
    font-weight: bold;
  }
`;

export default Layout;
