import { useState } from "react";
import { createContext } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  // 유저 정보 - 테스트용 스탬프
  const stampArr1 = [];
  for (let i = 0; i < 30; i++) {
    i < 14 ? stampArr1.push(true) : stampArr1.push(false);
  }
  const stampArr2 = [];
  for (let i = 0; i < 30; i++) {
    i < 29 ? stampArr2.push(true) : stampArr2.push(false);
  }
  const stampArr3 = [];
  for (let i = 0; i < 30; i++) {
    stampArr3.push(true);
  }
  
  // 유저 정보
  const [user, setUser] = useState([
    {
      userId: "abc123",
      password: "12345",
      nickname: "홍길동",
      profile: null,
      challengeList: [
        { // 진행중인 챌린지 stamp 13/30
          challengeId: 1,
          challengeState: 1,
          title: "매일 저녁 운동하기",
          stamp: stampArr1,
          memo: [],
          diary: [],
        },
        { // 진행중인 챌린지 stamp 29/30
          challengeId: 2,
          challengeState: 1,
          title: "주말 산책하기",
          stamp: stampArr2,
          memo: [],
          diary: [],
        },
        { // 완료한 챌린지
          challengeId: 3,
          challengeState: 0,
          title: "비타민 챙겨먹기",
          stamp: stampArr3,
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

  const value = {
    state: { user },
    action: { setUser },
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

const { Consumer: DataConsumer } = DataContext;

export { DataProvider, DataConsumer };
export default DataContext;
