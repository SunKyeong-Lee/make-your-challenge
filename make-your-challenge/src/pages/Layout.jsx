import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Wrap = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 220px) 1fr;
`;

const Layout = () => {
  return (
    <Wrap>
      <Sidebar />
      <Outlet />
    </Wrap>
  );
};

export default Layout;
