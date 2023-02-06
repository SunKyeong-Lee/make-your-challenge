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
      profile: undefined,
      challengeList: [
        {
          challengeId: 0,
          title: "매일 저녁 운동하기",
          stamp: [
            {
              day: 1,
              date: "2022. 12. 27",
              color: "#5C7373",
              diary: "간만에 해서 그런가 힘들다. 운동량 조절해야겠다.",
            },
            { day: 2, date: "2022. 12. 28", color: "#B0BFB7" },
            { day: 3, date: "2022. 12. 30", color: "#3C401E" },
            { day: 4, date: "2023. 01. 03", color: "#71733C" },
            {
              day: 5,
              date: "2023. 01. 04",
              color: "#BFB856",
              diary: "운동 매트 사야겠다.",
            },
            {
              day: 6,
              date: "2023. 01. 05",
              color: "#2F3B7B",
              diary: "몇 일 했다고 조오금 체력 괜찮아진 거 같기도...?",
            },
            { day: 7, date: "2023. 01. 09", color: "#655A88" },
            {
              day: 8,
              date: "2023. 01. 10",
              color: "#F4CAB2",
              diary: "귀찮다고 어제 스트레칭 빼먹어서 그런지 몸이 조금 뻐근한 거 같다. \n스트레칭 잘 해야지...",
            },
            {
              day: 9,
              date: "2023. 01. 11",
              color: "#F28F6B",
              diary: "스쿼트 평소보다 많이 해서 다리 떨린다고 했더니 친구가 나보고 아기 고라니라고 했다.",
            },
            { day: 10, date: "2023. 01. 13", color: "#D95F5F" },
            {
              day: 11,
              date: "20223. 01. 18",
              color: "#BFA688",
              diary: "널부렁",
            },
            { day: 12, date: "20223. 01. 26", color: "#F2DEC4" },
            {
              day: 13,
              date: "20223. 01. 27",
              color: "#F29544",
              diary: "요즘 넘 뜸하게 한 거 같다. 꾸준히 하자 나",
            },
          ],
          memo: [
            { memoId: 0, text: "운동 전후 스트레칭 하기" },
            { memoId: 1, text: "물 자주 마시기" },
          ],
        },
        {
          challengeId: 1,
          title: "주말 산책하기",
          stamp: [
            { day: 1, date: "2022. 10. 09", color: "#2F3B7B" },
            { day: 2, date: "2022. 10. 15", color: "#655A88" },
            { day: 3, date: "2022. 10. 16", color: "#F4CAB2" },
            { day: 4, date: "2022. 10. 22", color: "#F28F6B" },
            { day: 5, date: "2022. 10. 23", color: "#D95F5F" },
            { day: 6, date: "2022. 10. 29", color: "#BFA688" },
            { day: 7, date: "2022. 10. 30", color: "#F2DEC4" },
            { day: 8, date: "2022. 11. 05", color: "#F29544" },
            { day: 9, date: "2022. 11. 06", color: "#594A3C" },
            { day: 10, date: "2022. 11. 12", color: "#8C7561" },
            { day: 11, date: "2022. 11. 13", color: "#012744" },
            { day: 12, date: "2022. 11. 19", color: "#155764" },
            { day: 13, date: "2022. 11. 20", color: "#588681" },
            { day: 14, date: "2022. 11. 26", color: "#8C9C88" },
            { day: 15, date: "2022. 11. 27", color: "#F2DBAE" },
            { day: 16, date: "2022. 12. 03", color: "#8F797E" },
            { day: 17, date: "2022. 12. 04", color: "#FFC2B5" },
            { day: 18, date: "2022. 12. 10", color: "#FFE3CC" },
            { day: 19, date: "2022. 12. 11", color: "#646C8F" },
            { day: 20, date: "2022. 12. 17", color: "#DCC3A1" },
            { day: 21, date: "2022. 12. 18", color: "#729599" },
            { day: 22, date: "2023. 01. 07", color: "#BCC5CE" },
            { day: 23, date: "2023. 01. 08", color: "#E6DFD9" },
            { day: 24, date: "2023. 01. 15", color: "#BFB3A8" },
            { day: 25, date: "2023. 01. 14", color: "#7A7067" },
            { day: 26, date: "2023. 01. 28", color: "#5C7373" },
            { day: 27, date: "2023. 01. 29", color: "#B0BFB7" },
            { day: 28, date: "2023. 02. 04", color: "#3C401E" },
            { day: 29, date: "2023. 02. 05", color: "#71733C" },
          ],
          memo: [],
        },
        {
          challengeId: 2,
          title: "비타민 챙겨먹기",
          stamp: [
            { day: 1, date: "2023. 01. 02", color: "#012744" },
            { day: 2, date: "2023. 01. 03", color: "#155764" },
            { day: 3, date: "2023. 01. 04", color: "#588681" },
            { day: 4, date: "2023. 01. 05", color: "#8C9C88" },
            { day: 5, date: "2023. 01. 06", color: "#F2DBAE" },
            { day: 6, date: "2023. 01. 07", color: "#BFA688" },
            { day: 7, date: "2023. 01. 08", color: "#F2DEC4" },
            { day: 8, date: "2023. 01. 09", color: "#F29544" },
            { day: 9, date: "2023. 01. 10", color: "#594A3C" },
            { day: 10, date: "2023. 01. 11", color: "#8C7561" },
            { day: 11, date: "2023. 01. 12", color: "#8F797E" },
            { day: 12, date: "2023. 01. 13", color: "#FFC2B5" },
            { day: 13, date: "2023. 01. 14", color: "#FFE3CC" },
            { day: 14, date: "2023. 01. 15", color: "#646C8F" },
            { day: 15, date: "2023. 01. 16", color: "#DCC3A1" },
            { day: 16, date: "2023. 01. 17", color: "#5C7373" },
            { day: 17, date: "2023. 01. 18", color: "#B0BFB7" },
            { day: 18, date: "2023. 01. 19", color: "#3C401E" },
            { day: 19, date: "2023. 01. 20", color: "#71733C" },
            { day: 20, date: "2023. 01. 21", color: "#BFB856" },
            { day: 21, date: "2023. 01. 22", color: "#729599" },
            { day: 22, date: "2023. 01. 23", color: "#BCC5CE" },
            { day: 23, date: "2023. 01. 24", color: "#E6DFD9" },
            { day: 24, date: "2023. 01. 25", color: "#BFB3A8" },
            { day: 25, date: "2023. 01. 26", color: "#7A7067" },
            { day: 26, date: "2023. 01. 27", color: "#2F3B7B" },
            { day: 27, date: "2023. 01. 28", color: "#655A88" },
            { day: 28, date: "2023. 02. 29", color: "#F4CAB2" },
            { day: 29, date: "2023. 02. 30", color: "#F28F6B" },
            { day: 30, date: "2023. 02. 31", color: "#D95F5F" },
          ],
          memo: [],
        },
      ],
      challengeCount: 3,
      memoCount: 2,
    },
    {
      userId: "edf123",
      password: "12345",
      nickname: "성춘향",
      profile: undefined,
      challengeList: [],
      challengeCount: 0,
      memoCount: 0,
    },
  ]);

  // 로그인한 유저 정보
  const [currentUser, setCurrentUser] = useState({});

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
    state: { user, stamp, currentUser },
    action: { setUser, setStamp, setCurrentUser },
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

const { Consumer: DataConsumer } = DataContext;

export { DataProvider, DataConsumer };
export default DataContext;
