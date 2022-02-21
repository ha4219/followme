import Chance from "chance";

export interface MapDataType {
  url: string;
  title: string;
  content: string;
  lat: number;
  lon: number;
  tags: string[];
  score: number;
  distance: number;
}

export const getMapDummyDataGenerate = (length: number, size: number) => {
  const arr: MapDataType[] = [];
  const chance = new Chance();

  for (let i = 0; i < length; i++) {
    arr.push({
      url: `https://picsum.photos/id/${i}/${size}/${size}`,
      title: chance.sentence(),
      content: chance.paragraph(),
      // lat: chance.latitude({ min: 36.5, max: 38 }),
      // lon: chance.longitude({ min: 127, max: 128 }),
      lat: chance.latitude({ min: 37.5, max: 37.8 }),
      lon: chance.longitude({ min: 126.8, max: 127.2 }),
      tags: chance.sentence().split(" "),
      score: chance.integer({ min: 0, max: 5 }),
      distance: chance.integer({ min: 0, max: 5000 }),
    });
  }
  return arr;
};

export const mapDummyData = [
  {
    url: `https://gyeongju.go.kr/upload/content/thumb/20200506/F868EBF82A2F466C9ED436464A81B190.jpg`,
    title: "솥미가|한식|음식점|음식",
    content:
      "대표메뉴 및 1인 식사 예산 : 솔미가 밥상 15,000원 / 한우불고기 밥상 18,000원",
    lat: 37.57168561560953,
    lon: 126.9706817375283,
    tags: ["한우불고기", "더덕구이", "한옥집", "보문단지"],
    score: 5,
    distance: 100,
  },
  {
    url: `https://mp-seoul-image-production-s3.mangoplate.com/281547/753280_1550146766591_11966?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80`,
    title: "솥미가|한식|음식점|음식",
    content: "사시미와 마구로 신선하고 맛좋은 음식",
    lat: 37.58168561560953,
    lon: 126.9606817375283,
    tags: ["이자카야", "오뎅", "꼬치"],
    score: 4,
    distance: 120,
  },
  {
    url: `https://media-cdn.tripadvisor.com/media/photo-s/14/22/13/fe/owner-of-this-photo.jpg`,
    title: "뉴델리",
    content: "인도 요리, 아시아 요리",
    lat: 37.58168561560953,
    lon: 126.9806817375283,
    tags: ["인도요리", "아시아요리"],
    score: 5,
    distance: 180,
  },
  {
    url: `https://s3-ap-northeast-1.amazonaws.com/dcreviewsresized/20220221034715997_photo_1af421799b78.jpg`,
    title: "아고스토 타코스",
    content: "신도림 | 멕시코, 퀘사디아",
    lat: 37.56168561560953,
    lon: 126.9606817375283,
    tags: ["멕시칸", "바베큐", "파스타", "타코"],
    score: 3,
    distance: 200,
  },
  {
    url: `https://s3-ap-northeast-1.amazonaws.com/dcreviewsresized/300_300_20220221034149_photo6_qdWZ8T0B0NQ1.jpg`,
    title: "백채김치찌개 약수역점",
    content: "약수역 | 김치찌개, 계란말이",
    lat: 37.57368561560953,
    lon: 126.9776817375283,
    tags: ["김치찌개", "계란말이"],
    score: 5,
    distance: 100,
  },
];
