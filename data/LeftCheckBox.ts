interface IData {
  season: { name: string; value: string }[];
  domestic: { name: string; value: string }[];
  overseas: { name: string; value: string }[];
}

export const DATAL = <IData>{
  season: [
    { name: "봄", value: "spring" },
    { name: "여름", value: "summer" },
    { name: "가을", value: "autumn" },
    { name: "겨울", value: "winter" },
  ],
  domestic: [
    { name: "서울", value: "서울" },
    { name: "경기도", value: "경기도" },
    { name: "강원도", value: "강원도" },
  ],
  overseas: [
    { name: "일본", value: "일본" },
    { name: "미국", value: "미국" },
    { name: "중국", value: "중국" },
  ],
};
