import { useState } from "react";
import { createContext } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  // 유저 정보
  const [user, setUser] = useState([
    {
      userId: "abc123",
      password: "12345",
      nickname: "홍길동",
      profile: null,
      challengeList: [
        {
          challengeId: 1,
          challengeState: 1, // 진행중인 챌린지
          title: "매일 저녁 운동하기",
          stamp: [
            "#5C7373", "#B0BFB7", "#3C401E", "#71733C", "#BFB856",
            "#2F3B7B", "#655A88", "#F4CAB2", "#F28F6B", "#D95F5F",
            "#BFA688", "#F2DEC4", "#F29544",
          ],
          memo: ["운동 전후 스트레칭", "물 마시기"],
          diary: [],
        },
        {
          challengeId: 2,
          challengeState: 1,
          title: "주말 산책하기",
          stamp: [
            "#2F3B7B", "#655A88", "#F4CAB2", "#F28F6B", "#D95F5F",
            "#BFA688", "#F2DEC4", "#F29544", "#594A3C", "#8C7561",
            "#012744", "#155764", "#588681", "#8C9C88", "#F2DBAE",
            "#8F797E", "#FFC2B5", "#FFE3CC", "#646C8F", "#DCC3A1",
            "#729599", "#BCC5CE", "#E6DFD9", "#BFB3A8", "#7A7067",
            "#5C7373", "#B0BFB7", "#3C401E", "#71733C", 
          ],
          memo: [],
          diary: [],
        },
        {
          challengeId: 3,
          challengeState: 0, // 완료한 챌린지
          title: "비타민 챙겨먹기",
          stamp: [
            "#012744", "#155764", "#588681", "#8C9C88", "#F2DBAE",
            "#BFA688", "#F2DEC4", "#F29544", "#594A3C", "#8C7561",
            "#8F797E", "#FFC2B5", "#FFE3CC", "#646C8F", "#DCC3A1",
            "#5C7373", "#B0BFB7", "#3C401E", "#71733C", "#BFB856",
            "#729599", "#BCC5CE", "#E6DFD9", "#BFB3A8", "#7A7067",
            "#2F3B7B", "#655A88", "#F4CAB2", "#F28F6B", "#D95F5F",
          ],
          memo: [],
          diary: [],
        },
      ],
      challengeCount: 3,
    },
    {
      userId: "edf123",
      password: "12345",
      nickname: "성춘향",
      profile: null,
      challengeList: [],
      challengeCount: 0,
    },
  ]);

  // 스탬프 컬러 정보
  const [stamp, setStamp] = useState([
    "#BFA688", "#F2DEC4", "#F29544", "#594A3C", "#8C7561",
    "#8F797E", "#FFC2B5", "#FFE3CC", "#646C8F", "#DCC3A1",
    "#729599", "#BCC5CE", "#E6DFD9", "#BFB3A8", "#7A7067",
    "#2F3B7B", "#655A88", "#F4CAB2", "#F28F6B", "#D95F5F",
    "#012744", "#155764", "#588681", "#8C9C88", "#F2DBAE",
    "#5C7373", "#B0BFB7", "#3C401E", "#71733C", "#BFB856",
  ]);

  const value = {
    state: { user, stamp },
    action: { setUser, setStamp },
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

const { Consumer: DataConsumer } = DataContext;

export { DataProvider, DataConsumer };
export default DataContext;
