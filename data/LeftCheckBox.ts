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
    { name: "경북", value: "경북" },
    { name: "경남", value: "경남" },
    { name: "전남", value: "전남" },
    { name: "전북", value: "전북" },
    { name: "충북", value: "충북" },
    { name: "충남", value: "충남" },
    { name: "제주", value: "제주" },
  ],
  overseas: [
    { name: "일본", value: "일본" },
    { name: "미국", value: "미국" },
    { name: "중국", value: "중국" },
  ],
};
