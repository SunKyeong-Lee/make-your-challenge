import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Wrap = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 240px) 1fr;
`;

const Layout = () => {
  // // 로그인하자마자 params 목록 중 제일 처음것을 보이게 하기 위함
  // const navigator = useNavigate();

  // // 임시 > 챌린지 리스트의 각 챌린지 제목 들고오기
  // const [memolist, setMemolist] = useState([
  //   { id: 1, title: "밥먹기", memo: "첫번째 내용입니다" },
  //   { id: 2, title: "운동하기", memo: "두번째 내용입니다" },
  //   { id: 3, title: "식사하기", memo: "세번째 내용입니다" },
  // ]);

  // useEffect(() => {
  //   navigator("/main/" + memolist[0].title);
  // }, []);
  
  return (
    <Wrap>
      <Sidebar />
      <Outlet />
    </Wrap>
  );
};

export default Layout;
