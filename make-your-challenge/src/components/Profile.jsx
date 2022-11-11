import { useContext } from "react";
import styled from "styled-components";
import DataContext from "../context/DataContext";

const Wrap = styled.div`
  display: flex;
`;
const ProfileImg = styled.div`
  width: 3rem;
  height: 3rem;
  align-self: center;
  border-radius: 50%;
  background-color: #9e9e9e;
`;
const User = styled.div`
  margin-left: 1rem;
  ${"div"} {
    &:first-child {
      color: #9e9e9e;
    }
    &:last-child {
      font-size: 20px;
      font-weight: bold;
    }
  }
`;

const Profile = () => {
  const { state, action } = useContext(DataContext);

  return (
    <Wrap>
      <ProfileImg />
      <User>
        <div>welcome back,</div>
        <div>{state.user.nickname}</div>
      </User>
    </Wrap>
  );
};

export default Profile;
