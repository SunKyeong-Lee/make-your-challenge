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
            "#020F59",
            "#023E73",
            "#D9B79A",
            "#8C6249",
            "#262626",
            "#78A64B",
            "#BF2A2A",
            "#F29F8D",
          ],
          memo: [],
          diary: [],
        },
        {
          challengeId: 2,
          challengeState: 1,
          title: "주말 산책하기",
          stamp: [],
          memo: [],
          diary: [],
        },
        {
          challengeId: 3,
          challengeState: 0, // 완료한 챌린지
          title: ["비타민 챙겨먹기"],
          stamp: [],
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
    "#F299B9",
    "#013A40",
    "#328C83",
    "#F2C12E",
    "#F25C05",
    "#78A64B",
    "#F2D57E",
    "#F22929",
    "#BF2A2A",
    "#F29F8D",
    "#020F59",
    "#023E73",
    "#D9B79A",
    "#8C6249",
    "#262626",
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
