import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";

const Wrap = styled.div`
  display: grid;
  grid-template-columns: minmax(30px, 240px) 1fr;
`;

const Layout = () => {
  const { state } = useContext(DataContext);
  const navigator = useNavigate();

  useEffect(() => {
    const item = state.user.challengeList.filter(
      (item) => item.challengeState === 1
    );
    navigator("/main/" + item[0].challengeId);
  }, []);

  return (
    <Wrap>
      <Sidebar />
      <Outlet />
    </Wrap>
  );
};

export default Layout;
